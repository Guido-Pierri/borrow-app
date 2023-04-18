// import clientPromise from '@/lib/mongodb'
// import { useRouter } from 'next/router'
// import { parse } from 'path'
// import { json } from 'stream/consumers'
// import Link from 'next/link'
// import { useEffect } from 'react'

// interface Props {
//     ads: Ad
// }
// interface Ad {
//     _id: string
//     id: string
//     title: string
//     description: string
//     fullName: string
//     email: string
// }

// export default function Post({ ads }: Props) {
//     useEffect(()=>{})
//   const router = useRouter()
//   const { adId } = router.query
//   console.log(adId)

//   //   console.log(ads.id)
//   console.log(ads.id)
//   return (
//     <>
//       <p className="font-sans">Ad: {adId}</p>
//       {/* <p>{ads.id}</p> */}
//     </>
//   )
// }
// export async function getServerSideProps(adId: any) {
//   try {
//     const client = await clientPromise
//     const db = client.db('borrow')

//     const ads = await db.collection('ads').find({ adId })
//     console.log(ads)

//     return {
//       props: { ads: JSON.parse(JSON.stringify(ads)) },
//     }
//   } catch (e) {
//     console.error(e)
//   }
// }
import clientPromise from '@/lib/mongodb'
import { useRouter } from 'next/router'
import { Ad } from '@/types/ads'
import { useEffect } from 'react'
import Link from 'next/link'

interface Props {
  ads: Ad
}

export default function Post({ ads }: Props) {
  const router = useRouter()
  const { adId } = router.query
  console.log(adId)

  console.log(ads?.id)
  return (
    <div className="bg-[#F5F5F5] text-center max-w-sm h-screen ">
      <div className=" font-sans">
        <div className="px-4">
          <div className="flex-column">
            <div className="text-left">
              <div className="mt-6 rounded-sm border-[#46649D] border-2">
                <p className="bold text-[#0f0e0e] mt-2">
                  <b>
                    Ändra titeln:
                    <input
                      className="bg-[#F5F5F5]"
                      value={' ' + ads.title}
                    ></input>
                  </b>
                </p>
                <p className="text-[#0f0e0e] mt-2">
                  Ändra Beskrivning:
                  <input
                    className="bg-[#F5F5F5] mt-2"
                    value={' ' + ads.description}
                  ></input>
                </p>
                <p className="text-[#0f0e0e] mt-2">
                  Ändra Annonsör:
                  <input
                    className="bg-[#F5F5F5] mt-2"
                    value={' ' + ads.fullName}
                  ></input>
                </p>

                <button>
                  <p style={{ color: 'blue' }}>
                    <b className="text-[#0f0e0e] ">Kontakt: </b>
                    <input
                      className="bg-[#F5F5F5] mt-2"
                      value={' ' + ads.email}
                    ></input>
                  </p>
                </button>

                <div className="flex mt-4">
                  <div className="">
                    <button
                      className="bg-[#9EBB9D] rounded-sm bg- mb-1 mx-1 px-2"
                      value={ads._id}
                      type="submit"
                      //   onClick={() => updateAd(ad.id)}
                    >
                      Redigera annons
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(context: any) {
  try {
    const { adId } = context.query
    const client = await clientPromise
    const db = client.db('borrow')

    const ads = await db.collection('ads').findOne({ id: adId })
    console.log(ads)

    return {
      props: { ads: JSON.parse(JSON.stringify(ads)) },
    }
  } catch (e) {
    console.error(e)
    return {
      props: { ads: {} },
    }
  }
}
