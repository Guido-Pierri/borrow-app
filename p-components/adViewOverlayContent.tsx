import { FC, useEffect, useState } from 'react'
import { Ad } from '@/types/ads'
import AdviewOverlay from './adViewOverlay'
import Link from 'next/link'
import Image from 'next/image'
import router from 'next/router'
interface NotificationsContentProps {
  onClose: () => void
  _id: string
  adImage: string
  title: string
  publisher: string
  fullName: string
  publisherProfileImage: string
  adEmail: string
  userId: string
  description: string
}

const AdviewOverlayContent: FC<NotificationsContentProps> = ({
  onClose,
  userId,
  _id,
  adImage,
  title,
  publisher,
  fullName,
  publisherProfileImage,
  adEmail,
  description,
}) => {
  const handleContentClick = (event: any) => {
    // Stop the event from propagating up to the outer div
    event.stopPropagation()
  }
  console.log('adId innan fetch:', _id)

  console.log('adImage:', adImage)
  // const [ad, setAd] = useState<Ad[] | null>(null)

  // useEffect(() => {
  //   fetchData(_id)
  // }, [_id])

  // async function fetchData(_id: string) {
  //   try {
  //     const response = await fetch('/api/ad/getAd', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ id: _id }), // Pass the id as an object with the `id` property
  //     })
  //     const data = await response.json()

  //     console.log('data:', data)
  //     const fetchedAd = data.ad
  //     console.log('fetchedAd', fetchedAd)

  //     setAd(fetchedAd)
  //   } catch (error) {
  //     console.error('Error fetching ad:', error)
  //   }
  // }

  // if (!ad) {
  //   // Render loading state or return null if needed
  //   return <div>Loading...</div>
  // }
  // console.log('ad', ad)
  // const adItem = ad[0] // Access the first item in the array
  // console.log(adItem.title)

  return (
    <>
      <div className="bg-[#FFFFFF] text-center max-w-sm h-screen">
        <div className="mt-6 rounded-md border-[#9EBB9D] border-2 text-left flex-column font-sans px-5 pb-20 shadow-md">
          <div className="flex justify-end mt-5 mb-5">
            <Image
              src={'/kryss_annons.svg'}
              height={25}
              width={25}
              alt={'Kryss'}
              onClick={() => {
                router.back()
              }}
              className="clickable"
            ></Image>
          </div>
          <div className="flex justify-center">
            <Image
              src={adImage}
              alt={''}
              width={100}
              height={100}
              className="aspect-auto w-full rounded-[4px]"
            ></Image>
          </div>
          <p className="bold text-[#0f0e0e] mt-2 text-[20px] font-bold">
            <b>{title}</b>
          </p>
          <p className="text-[#0f0e0e] mt-2 text-[14px] font-semibold">
            Beskrivning
          </p>
          <p className="font-normal text-[14px]">{description}</p>
          <div className="flex flex-col w-fit mt-6 ">
            <Image
              src={publisherProfileImage}
              alt={title}
              width={75}
              height={75}
              className="rounded-full aspect-square object-cover"
              style={{ alignSelf: 'center' }}
            ></Image>
            <p className="text-[#0f0e0e] text-center"> {fullName}</p>
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
                <Link href={'mailto:' + `${adEmail}`}>Skicka meddelande</Link>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdviewOverlayContent
