import Toggle from './toggle'
import { FC } from 'react'
import CloseIconWOLink from './closeIconWOLink'
import { Ad } from '@/types/ads'
import AdviewOverlay from './adViewOverlay'
// import clientPromise from '@/lib/mongodb'
import Link from 'next/link'
import Image from 'next/image'
import router from 'next/router'
interface NotificationsContentProps {
  onClose: () => void
  adId: string
}

interface Props {
  ad: Ad
}
const AdviewOverlayContent: FC<NotificationsContentProps> = (
  { onClose, adId },
  { ad }: Props
) => {
  const handleContentClick = (event: any) => {
    // Stop the event from propagating up to the outer div
    event.stopPropagation()
  }
  console.log('adId innan fetch:', adId)

  //   fetchData(adId)
  async function fetchData(adId: string) {
    const response = await fetch('/api/ad/getAd', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(adId),
    })
    const data = await response

    console.log('data:', data)
  }
  function navigateBack() {
    throw new Error('Function not implemented.')
  }
  console.log(ad)

  console.log(adId)

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
                navigateBack()
              }}
              className="clickable"
            ></Image>
          </div>
          <div className="flex justify-center">
            <Image
              src={ad.image}
              alt={'#'}
              width={250}
              height={250}
              className="aspect-auto w-full rounded-[4px]"
            ></Image>
          </div>
          <p className="bold text-[#0f0e0e] mt-2 text-[20px] font-bold">
            <b>{ad.title}</b>
          </p>
          <p className="text-[#0f0e0e] mt-2 text-[14px] font-semibold">
            Beskrivning
          </p>
          <p className="font-normal text-[14px]">{ad.description}</p>
          <div className="flex flex-col w-fit mt-6 ">
            <Image
              src={ad.publisherProfileImage}
              alt={ad.title}
              width={75}
              height={75}
              className="rounded-full aspect-square object-cover"
              style={{ alignSelf: 'center' }}
            ></Image>
            <p className="text-[#0f0e0e] text-center"> {ad.fullName}</p>
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
                <Link href={'mailto:' + `${ad.email}`}>Skicka meddelande</Link>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdviewOverlayContent
