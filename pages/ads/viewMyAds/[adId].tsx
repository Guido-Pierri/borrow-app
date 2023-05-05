import clientPromise from "@/lib/mongodb"
import { useRouter } from "next/router"
import { Ad } from "@/types/ads"
import Link from "next/link"
import Header from "@/p-components/header"
import Image from "next/image"
import { Query } from "mongoose"
import { Context } from "vm"
import { useState } from "react"

interface Props {
  ads: Ad
}

interface AdId {
  id: string
}

export default function Post({ ads }: Props, { publisher }: any) {
  const router = useRouter()
  const [userId, setUserId] = useState<string>("")
  const { adId } = router.query
  console.log(adId)

  /*Defining a function (pass to other files), that has
  a object formData that contains following properties*/
  function navigateBack() {
    router.back()
  }
  console.log(ads?.id)

  async function updateAd(id: string) {
    window.location.href = `/updateAd/${id}`
    console.log("updateAd")
  }

  async function deleteAd(id: string, publisher: string) {
    console.log("deleteAd")
    console.log("id", id)
    console.log("publisher", publisher)

    const confirmed = window.confirm(
      "Är du säker att du vill ta bort din annons?"
    )

    if (confirmed) {
      console.log("in i if-satsen")
      console.log(id)

      const apiData: AdId = {
        id: id,
      }

      console.log(apiData)
      setUserId(publisher)
      console.log("setUserId", setUserId)

      try {
        console.log("try")
        console.log(id)

        const res = await fetch("/api/deleteAd", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(apiData),
        })
        console.log(res)
        console.log(res.status)

        window.location.href = "/ads/myAds/" + `${publisher}`

        if (res.ok) {
          // setDeletedAdId(id)
        } else {
          console.error("Failed to delete ad")
        }
      } catch (e) {
        console.error("Failed to delete ad", e)
      }
    }
  }

  return (
    <>
      <div className="bg-[#FFFFFF] text-center max-w-sm h-screen">
        <Header></Header>

        <div className="mt-6 rounded-md border-[#9EBB9D] border-2 text-left flex-column font-sans px-5 pb-4 shadow-md">
          <div className="flex justify-end mt-5 mb-5">
            {/* <Link href={}> */}
            <Image
              src={"/kryss_annons.svg"}
              height={25}
              width={25}
              alt={"Kryss"}
              onClick={() => {
                navigateBack()
              }}
              className="clickable"
            ></Image>
            {/* </Link> */}
          </div>
          <div className="flex justify-center ">
            <Image
              src={ads.image}
              alt={"#"}
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
          {/* <div className="flex flex-col w-fit mt-6">
            <Image
              src={"/profile.svg"}
              alt={"#"}
              width={75}
              height={75}
              className="aspect-auto"
              style={{ alignSelf: "center" }}
            ></Image>
            <p className="text-[#0f0e0e] text-center"> {ads.fullName}</p>
          </div> */}
          <div className="mb-10 py-8">
            <div className="w-full text-[#0f0e0e] mt-4 ">
              <div className="text-right flex justify-center">
                <button
                  className="border w-[298px] bg-[#9EBB9D] py-3 rounded-sm h-[55px] border-[#9EBB9D] text-black "
                  value={ads?.id}
                  type="submit"
                  onClick={() => updateAd(ads?.id)}
                >
                  Redigera
                </button>
              </div>

              <div className=" mt-4 ">
                <div className="flex justify-center">
                  <button
                    className="rounded-sm text-[17px] h-[55px] text-black border-[#9EBB9D]  border w-[298px]  py-3"
                    value={ads?.id}
                    type="submit"
                    onClick={() => deleteAd(ads?.id, ads?.publisher)}
                  >
                    Ta bort annons
                  </button>
                  <br />
                </div>
              </div>
            </div>

            {/* <button className="w-full bg-[#9EBB9D] font-normal text-base  h-[40px] rounded-sm">
              <div className="flex row justify-center">
                <Image
                  src={"/mail.svg"}
                  height={20}
                  width={20}
                  alt={"Kryss"}
                  className="mr-[15px]"
                ></Image>
                <Link href={"mailto:" + `${ads.email}`}>Skicka meddelande</Link>
              </div>
            </button> */}
            {/* <Link href={'mailto:' + `${ads.email}`}>{ads.email}</Link> */}
          </div>
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps(context: Context) {
  try {
    const { adId } = context.query
    const client = await clientPromise
    const db = client.db("borrow")

    const ads = await db.collection("ads").findOne({ id: adId })
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
