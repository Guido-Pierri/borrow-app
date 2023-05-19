import { FC, useEffect, useState } from 'react'
import { Ad } from '@/types/ads'
import AdviewOverlay from './adViewOverlay'
import Link from 'next/link'
import Image from 'next/image'
import router from 'next/router'
import { close } from 'fs'
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
      <div className="font-sans bg-[#FFFFFF] flex flex-col h-[full] w-[345px] rounded-lg ">
        <div className="  text-left flex-column font-sans  mx-[5.9%] mt-[7.5%]">
          <div className="flex justify-end ">
            <Image
              src={'/kryss_annons.svg'}
              height={25}
              width={25}
              alt={'Kryss'}
              onClick={() => {
                onClose()
              }}
              className="clickable"
            ></Image>
          </div>
          <div className="mt-[10%]">
            <Image
              src={adImage}
              alt={description}
              width={100}
              height={100}
              className="aspect-auto w-full "
            ></Image>
          </div>
          <p className="font-bold text-xl mt-[5.8%]">
            <b>{title}</b>
          </p>
          <p className=" text-sm font-bold mt-[4.2%]">Beskrivning</p>
          <p className="font-normal text-sm mt-[3.6%]">{description}</p>
          <div className="flex flex-col mt-[10%] w-[26.5%]">
            <div className="flex flex-col items-center">
              <Image
                src={publisherProfileImage}
                alt={title}
                width={75}
                height={75}
                className="rounded-full aspect-square object-cover border-[#9EBB9D] border-[3px]"
              ></Image>
              <div className="">
                <p className="font-bold text-xs"> {fullName}</p>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center mt-[12%] mb-[26%]">
            <button className="w-full bg-[#9EBB9D] font-normal text-base h-[2.5rem] rounded-sm">
              <div className="flex row justify-center">
                <Image
                  src={'/mail.svg'}
                  height={20}
                  width={20}
                  alt={'Kryss'}
                  className="mr-[0.93rem]"
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
