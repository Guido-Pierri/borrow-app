import { FC, useEffect, useState } from 'react'
import { Ad } from '@/types/ads'
import Image from 'next/image'
import router from 'next/router'
import { Console } from 'console'
interface NotificationsContentProps {
  onClose: () => void
  _id: string
  adId: string
  adImage: string
  title: string
  publisher: string
  fullName: string
  publisherProfileImage: string
  adEmail: string
  userId: string
  description: string
}
interface AdId {
  id: string
}
const OverlayMyAdViewContent: FC<NotificationsContentProps> = ({
  onClose,

  _id,
  adId,
  adImage,
  title,
  publisher,
  fullName,
  publisherProfileImage,
  adEmail,
  description,
}) => {
  const [userId, setUserId] = useState<string>('')

  const handleContentClick = (event: any) => {
    // Stop the event from propagating up to the outer div
    event.stopPropagation()
  }
  console.log('adId innan fetch:', _id)

  console.log('adImage:', adImage)
  console.log('id:', adId)

  // const [userId, setUserId] = useState<string>('')

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
  async function deleteAd(adId: string, publisher: string) {
    console.log('deleteAd')
    console.log('id', adId)
    console.log('publisher', publisher)

    const confirmed = window.confirm(
      'Är du säker att du vill ta bort din annons?'
    )

    if (confirmed) {
      console.log('in i if-satsen')
      console.log(adId)

      const apiData: AdId = {
        id: adId,
      }

      console.log(apiData)
      setUserId(publisher)
      console.log('setUserId', setUserId)

      try {
        console.log('try')
        console.log(adId)

        const res = await fetch('/api/deleteAd', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(apiData),
        })
        console.log(res)
        console.log(res.status)

        window.location.href = '/ads/myAds/' + `${publisher}`

        if (res.ok) {
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
  return (
    <>
      <div className="bg-[#FFFFFF] text-center max-w-sm h-full rounded-md">
        <div className="mt-6 rounded-md  text-left flex-column font-sans px-5 pb-4">
          <div className="flex justify-end">
            <Image
              src={'/kryss_annons.svg'}
              height={25}
              width={25}
              alt={'Kryss'}
              onClick={() => {
                onClose()
              }}
              className="clickable mt-4"
            ></Image>
          </div>
          <div className="flex justify-center ">
            <Image
              src={adImage}
              alt={'#'}
              width={250}
              height={250}
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

          <div className="mb-10 py-8">
            <div className="w-full text-[#0f0e0e] mt-4 ">
              <div className="text-right flex justify-center">
                <button
                  className="border flex flex-row justify-center w-[298px] bg-[#9EBB9D] text-[17px] py-3 rounded-sm h-[55px] border-[#9EBB9D] text-black "
                  value={adId}
                  type="submit"
                  onClick={() => updateAd(adId)}
                >
                  <div className="mr-2 mt-1">
                    <Image
                      src={'/Pencil.svg'}
                      alt={'#'}
                      width={'18'}
                      height={'18'}
                      style={{ alignSelf: 'center' }}
                    ></Image>
                  </div>
                  Redigera
                </button>
              </div>

              <div className=" mt-4 ">
                <div className="flex justify-center">
                  <button
                    className="rounded-sm text-[17px] h-[55px] flex flex-row justify-center text-black border-[#9EBB9D]  border w-[298px]  py-3"
                    value={adId}
                    type="submit"
                    onClick={() => deleteAd(adId, publisher)}
                  >
                    <div className="mr-2">
                      <Image
                        src={'/trashcanBlack.svg'}
                        alt={'#'}
                        width={'19'}
                        height={'22'}
                        style={{ alignSelf: 'center' }}
                      ></Image>
                    </div>
                    Ta bort annons
                  </button>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    // <>
    //   <div className="font-sans bg-[#FFFFFF] flex flex-col h-[full] w-[345px] rounded-lg ">
    //     <div className="  text-left flex-column font-sans  mx-[5.9%] mt-[7.5%]">
    //       <div className="flex justify-end ">
    //         <Image
    //           src={'/kryss_annons.svg'}
    //           height={25}
    //           width={25}
    //           alt={'Kryss'}
    //           onClick={() => {
    //             onClose()
    //           }}
    //           className="clickable"
    //         ></Image>
    //       </div>
    //       <div className="mt-[10%]">
    //         <Image
    //           src={adImage}
    //           alt={description}
    //           width={1000}
    //           height={1000}
    //           className="aspect-auto w-full "
    //         ></Image>
    //       </div>
    //       <p className="font-bold text-xl mt-[5.8%]">
    //         <b>{title}</b>
    //       </p>
    //       <p className=" text-sm font-bold mt-[4.2%]">Beskrivning</p>
    //       <p className="font-normal text-sm mt-[3.6%]">{description}</p>
    //       <div className="flex flex-col mt-[10%] w-[26.5%]">
    //         <div className="flex flex-col items-center">
    //           <Image
    //             src={publisherProfileImage}
    //             alt={title}
    //             width={75}
    //             height={75}
    //             className="rounded-full aspect-square object-cover border-[#9EBB9D] border-[3px]"
    //           ></Image>
    //           <div className="">
    //             <p className="font-bold text-xs"> {fullName}</p>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="w-full flex justify-center mt-[12%] mb-[26%]">
    //         <button className="w-full bg-[#9EBB9D] font-normal text-base h-[2.5rem] rounded-sm">
    //           <div className="flex row justify-center">
    //             <Image
    //               src={'/mail.svg'}
    //               height={20}
    //               width={20}
    //               alt={'Kryss'}
    //               className="mr-[0.93rem]"
    //             ></Image>
    //             <Link href={'mailto:' + `${adEmail}`}>Skicka meddelande</Link>
    //           </div>
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </>
  )
}

export default OverlayMyAdViewContent
