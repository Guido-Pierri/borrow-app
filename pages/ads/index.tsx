import Link from 'next/link'
import Header from '@/p-components/header'
import clientPromise from '@/lib/mongodb'
import { GoSearch } from 'react-icons/go'
interface Ad {
  id: string
  title: string
  description: string
  fullName: string
  email: string
}
interface Props {
  ads: Ad[]
}
export default function Ads({ ads }: Props) {
  return (
    <div className="bg-[#F5F5F5] text-center max-w-sm h-screen ">
      <Header></Header>
      {/* <form>
        <div className="">
          <label className="">
            <input
              className="bg-[#E6E6E6] font-sans
              placeholder-black px-1 rounded-sm "
              type="text"
              placeholder="Sök..."
            />
            <div className="text-right">
              <GoSearch />
            </div>
          </label>
        </div>
      </form> */}
      <form>
        <label className="relative">
          <input
            className="bg-[#E6E6E6] font-sans placeholder-black px-6 py-2 rounded-sm w-80"
            type="text"
            placeholder="Sök..."
          />
          <div className="absolute inset-y-0 right-0 flex items-center px-2">
            <GoSearch />
          </div>
        </label>
      </form>

      <style jsx>{`
        input[type='text'] {
          background-repeat: no-repeat;
          background-size: 16px 16px;
          background-position: 8px 50%;
        }
      `}</style>

      <div className="flex justify-center mt-5">
        <Link href={'/createAd'}>
          <button className="flex justify-center p-2 text-gray-900 bg-[#9EBB9D] w-[263px] rounded-sm text-xl font-[500] font-sans">
            <p className=""> Skapa annons</p>
          </button>
        </Link>
      </div>
      <section className="flex justify-around mt-5 ">
        <button className="mt-4 font-sans font-semibold border-4 px-4 py-1 border-[#46649D]">
          LÅNA
        </button>
        <button className="mt-4 font-sans font-semibold border-2 px-4 py-1 border-black">
          MINA ANNONSER
        </button>
        <button className="mt-4 font-sans font-semibold border-2 px-4 py-1 border-black">
          TAVLAN
        </button>
      </section>
      <section className="font-sans ">
        <h2 className="text-left mt-4 px-4">Alla resultat:</h2>
      </section>
      <div className=" font-sans">
        <div className="px-4">
          <div className="flex-column">
            {ads.map((ad) => (
              <a key={ad.id} className="group">
                <div className="">
                  <div className="mt-4 rounded-sm border-[#46649D] border-2">
                    <p className="bold text-[#0f0e0e]">
                      <b>{ad.title}</b>
                    </p>
                    <p className="text-[#0f0e0e]">
                      Beskrivning: {ad.description}
                    </p>
                    <p className="text-[#0f0e0e]">Annonsör: {ad.fullName}</p>
                    <Link href={'mailto:' + `${ad.email}`}>
                      <button>
                        <p style={{ color: 'blue' }}>
                          {' '}
                          <b className="text-[#0f0e0e]">Kontakt:</b> {ad.email}
                        </p>
                      </button>
                    </Link>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  try {
    const client = await clientPromise
    const db = client.db('borrow')

    const ads = await db.collection('ads').find({}).limit(1000).toArray()

    return {
      props: { ads: JSON.parse(JSON.stringify(ads)) },
    }
  } catch (e) {
    console.error(e)
  }
}
