import Link from 'next/link'
import Header from '@/p-components/header'
import { GoSearch } from 'react-icons/go'
import { Ad } from '@/types/ads'
import { CldImage } from 'next-cloudinary'
import Image from 'next/image'
import { Suspense } from 'react'

interface AdId {
  id: string
}

function navigateToCreateAd() {
  window.location.href = '/createAd'
}
interface Props {
  ads: Ad[]
}
const Ads = ({ ads }: Props) => {
  async function deleteAd(id: string) {
    console.log('deleteAd')
    const confirmed = window.confirm(
      'Är du säker att du vill ta bort din annons?'
    )

    if (confirmed) {
      const apiData: AdId = {
        id: id,
      }
      console.log(apiData)

      try {
        console.log('try')
        console.log(id)

        const res = await fetch('/api/deleteAd', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(apiData),
        })
        console.log(res)
        console.log(res.status)

        if (res.ok) {
          // setDeletedAdId(id)
          window.location.reload()
        } else {
          console.error('Failed to delete ad')
        }
      } catch (e) {
        console.error('Failed to delete ad', e)
      }
    }
  }

  async function updateAd(id: string) {
    window.location.href = `/updateAd/${id}`
    console.log('updateAd')
  }
  function navigateToAd(id: string) {
    window.location.href = `/ads/view/${id}`
  }
  return (
    <div className="bg-[#ffffff] text-center max-w-sm h-screen ">
      <Header></Header>
      <form>
        <label className="relative">
          <input
            className="bg-[#E6E6E6] font-sans placeholder-black px-6 py-2 rounded-sm w-80"
            type="text"
            placeholder="Sök..."
          />
          <div className="absolute inset-y-0 right-0 flex items-center px-2 text-black">
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

      <section className="flex justify-around mt-5 ">
        <button className="rounded-t-md -md mt-4 font-sans font-semibold   px-4 py-1 bg-[#46649D] text-white">
          Låna
        </button>
        <button className="rounded-t-md -md mt-4 font-sans font-semibold   px-4 py-1 text-black">
          Mina annonser
        </button>
        <button className="rounded-t-md -md mt-4 font-sans font-semibold   px-4 py-1  text-black">
          Tavlan
        </button>
      </section>

      <div className="bg-[#46649D] h-2"></div>
      <div className="flex justify-center mt-5 ">
        <button
          className="flex justify-center p-2 text-gray-900 bg-[#9EBB9D] w-[350px] rounded-sm text-xl font-[500] font-sans"
          onClick={navigateToCreateAd}
        >
          <p className="text-black"> Skapa annons</p>
        </button>
      </div>

      <section>
        <div className=" font-sans text-left grid grid-cols-2 gap-y-2 gap-x-4 p-4">
          {ads.map((ad) => (
            <div key={ad.id} className="">
              <Image
                onClick={() => navigateToAd(ad.id)}
                className="mt-4  w-full aspect-square"
                alt={ad.description}
                src={ad.image}
                width={'1000'}
                height={'0'}
              />

              {/* <div className=" mt-2">
                        <div className="">
                          <button
                            className="underline rounded-sm bg- mb-1  text-black"
                            value={ad._id}
                            type="submit"
                            onClick={() => updateAd(ad.id)}
                          >
                            Redigera
                          </button>
                        </div>

                        {/* <div className="">
                          <button
                            className="bg-[#9EBB9D] rounded-sm border-2 mb-1 mx-1 px-2 text-black"
                            value={ad._id}
                            type="submit"
                            onClick={() => deleteAd(ad.id)}
                          >
                            Ta bort
                          </button>
                        </div> 
                      </div> */}
              <div>
                <p
                  className="bold text-[#0f0e0e] mt-1 link "
                  onClick={() => navigateToAd(ad.id)}
                >
                  {ad.title}
                </p>
                {/* <p
                          className="text-[#0f0e0e]"
                          onClick={() => navigateToAd(ad.id)}
                        >
                          Beskrivning: {ad.description}
                        </p> */}
              </div>
            </div>
          ))}
        </div>
      </section>
      <style jsx>{`
        .link {
          cursor: pointer;
        }
      `}</style>
    </div>
  )
}
export default Ads
