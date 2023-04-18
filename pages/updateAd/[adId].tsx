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

import { useEffect } from 'react'

interface Props {
  ads: Ad
}

interface Ad {
  _id: string
  id: string
  title: string
  description: string
  fullName: string
  email: string
}

export default function Post({ ads }: Props) {
  useEffect(() => {})
  const router = useRouter()
  const { adId } = router.query
  console.log(adId)

  console.log(ads?.id)
  return (
    <>
      <div className="font-sans">
        <p>Ad: {adId}</p>
        <p>{ads?.title}</p>
        <p>{ads?.description}</p>
        <p>{ads?.email}</p>
      </div>
    </>
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
