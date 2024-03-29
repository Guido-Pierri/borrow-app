import clientPromise from '@/lib/mongodb'
import { useRouter } from 'next/router'
import { Ad } from '@/types/ads'
import Link from 'next/link'
import Header from '@/p-components/header'
import Image from 'next/image'

interface Props {
  ads: Ad
}

export default function Post({ ads }: Props, { publisher }: any) {
  const router = useRouter()
  const { adId } = router.query
  console.log(adId)

  /*Defining a function (pass to other files), that has
  a object formData that contains following properties*/
  function navigateBack() {
    router.back()
  }
  console.log(ads?.id)
  return (
    <>
      <div className="bg-[#FFFFFF] text-center max-w-sm h-screen">
        {/* <Header></Header> */}

        <div className="mt-6 rounded-md border-[#9EBB9D] border-2 text-left flex-column font-sans px-5 pb-20 shadow-md">
          <div className="flex justify-end mt-5 mb-5">
            <Image
              src={'/kryss_annons.svg'}
              height={25}
              width={25}
              alt={'Kryss'}
              onClick={() => {
                navigateBack()
              }}
              className="clickable"
            ></Image>
          </div>
          <div className="flex justify-center">
            <Image
              src={ads.image}
              alt={'#'}
              width={250}
              height={250}
              className="aspect-auto w-full rounded-[4px]"
            ></Image>
          </div>
          <p className="bold text-[#0f0e0e] mt-2 text-[20px] font-bold">
            <b>{ads.title}</b>
          </p>
          <p className="text-[#0f0e0e] mt-2 text-[14px] font-semibold">
            Beskrivning
          </p>
          <p className="font-normal text-[14px]">{ads.description}</p>
          <div className="flex flex-col w-fit mt-6 ">
            <Image
              src={ads.publisherProfileImage}
              alt={ads.title}
              width={75}
              height={75}
              className="rounded-full aspect-square object-cover"
              style={{ alignSelf: 'center' }}
            ></Image>
            <p className="text-[#0f0e0e] text-center"> {ads.fullName}</p>
          </div>
          <div className="w-full text-[#0f0e0e] mt-4  flex justify-center">
            <button className="w-full bg-[#9EBB9D] font-normal text-base  h-[40px] rounded-sm">
              <div className="flex row justify-center">
                <Image
                  src={'/mail.svg'}
                  height={20}
                  width={20}
                  alt={'Kryss'}
                  className="mr-[15px]"
                ></Image>
                <Link href={'mailto:' + `${ads.email}`}>Skicka meddelande</Link>
              </div>
            </button>
          </div>
        </div>
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
