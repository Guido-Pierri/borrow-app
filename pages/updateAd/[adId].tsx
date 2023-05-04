import clientPromise from "@/lib/mongodb"
import { useRouter } from "next/router"
import { Ad } from "@/types/ads"
import { useEffect, useState } from "react"
import Link from "next/link"
import { v4 as uuidv4 } from "uuid"
import CloseIcon from "@/p-components/closeIcon"
import Icons from "@/p-components/icons"

interface AdId {
  id: string
}
interface Props {
  ads: Ad
}

export default function Post({ ads }: Props) {
  const router = useRouter()
  const [imageUrl, setImageUrl] = useState("")
  const { adId } = router.query
  console.log(adId)
  const [userId, setUserId] = useState<string>("")

  interface FormData {
    id: string
    title: string
    description: string
    fullName: string
    email: string
  }
  interface ApiData {
    id: string
    title: string
    description: string
    fullName: string
    email: string
    publisher: string
    image: string
  }

  /*Defining a function (pass to other files), that has 
  a object formData that contains following properties*/

  const [formData, setFormData] = useState<FormData>({
    id: ads?.id || "",
    title: ads?.title || "",
    description: ads?.description || "",
    fullName: ads?.fullName || "",
    email: ads?.email || "",
  })
  console.log("ads?.id", ads?.id)
  console.log("adId", adId)

  console.log("formData", formData)

  async function deleteAd(id: string, publisher: string) {
    console.log("deleteAd")
    console.log("id", id)
    console.log("publisher", publisher)

    const confirmed = window.confirm(
      "Är du säker att du vill ta bort din annons?"
    )

    // async function handleClick() {
    //   const response = await fetch("/api/user", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ adId }),
    //   })

    //   const data = await response.json()

    //   console.log("data", data)
    //   if (data) {
    //   }
    // }

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

  /*Creating apiData object that contains the formData
    to be submitted to server.This is sent through POST
    to the server*/
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    // if (!formData) {
    //   return
    //   ;<div></div>
    // }
    event.preventDefault()

    // const apiData: ApiData = {
    //   id: ads?.id,
    //   title: formData.title,
    //   description: formData.description,
    //   fullName: formData.fullName,
    //   email: formData.email,
    // }
    // console.log("apiData:", apiData)

    // const response = await fetch("/api/ad", {
    //   method: "PATCH",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(apiData),
    // })

    // const data = await response.json()

    // console.log(data)
    // console.log(apiData)

    // window.location.href = "/ads"
  }

  async function updateAd(id: string) {
    // const confirmed = window.confirm(
    //   'Din annons kommer updateras, vill du fortsätta?'
    // )

    const apiData: ApiData = {
      id: ads?.id,
      image: ads?.image,
      title: formData.title,
      description: formData.description,
      fullName: formData.fullName,
      email: formData.email,
      publisher: ads?.publisher,
    }
    console.log("apiData:", apiData)

    const response = await fetch("/api/ad", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiData),
    })

    const data = await response.json()

    console.log(data)
    console.log(apiData)

    window.location.href = "/ads/myAds/" + `${ads?.publisher}`
  }

  /*Is called when user types something in the form
    and it updates formData with the new values passed in
    through setFormData*/
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormData((prevFormData: any) => ({ ...prevFormData, [name]: value }))
    console.log(event.target.value)
  }
  const handleInputChangeTextArea = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target
    setFormData((prevFormData: any) => ({ ...prevFormData, [name]: value }))
    console.log(event.target.value)
  }

  console.log(ads?.id)
  return (
    <div className="bg-[#FFFFFF] text-center max-w-sm h-screen ">
      <div className=" font-sans">
        <div className="px-4">
          <div className="flex-column">
            <div className="text-left">
              <form className="text-left" onSubmit={handleSubmit}>
                <div className="mt-2 rounded-md  ">
                  <div className="mt-6 mr-4 flex justify-end">
                    <CloseIcon
                    // adress={"/ads/myAds/" + `${ads?.publisher}`}
                    ></CloseIcon>
                  </div>

                  <h1 className="text-black text-xl py-4 mb-4 font-bold text-center">
                    Redigera annons
                  </h1>
                  <div>
                    <Icons image={ads.image}></Icons>
                  </div>
                  {/* <p className="bold text-[#0f0e0e] mt-2">
                    Titel: {""} */}
                  <div className="text-center">
                    <label>
                      <legend className="mb-[-16px] text-left ml-7">
                        Titel
                      </legend>
                      <input
                        className="rounded py-4 px-2 mt-4 border w-[298px]  border-[#9EBB9D] placeholder-[#000000] bg-[#fff]"
                        // placeholder="Titel..."
                        type="text"
                        name="title"
                        value={formData.title}
                        required
                        onChange={handleInputChange}
                      />
                    </label>
                    <label className="">
                      <legend className="mb-[2px] mt-5 text-left  ml-7">
                        Beskrivning
                      </legend>
                      {/* <input
            className="rounded py-4 px-7 mt-8 border w-[265px] h-28 border-[#9EBB9D] placeholder-[#000000] bg-[#fff]"
            // placeholder="Beskrivning..."
            type="text"
            name="description"
            required
            value={formData.description}
            onChange={handleInputChange}
          /> */}
                      <textarea
                        className="border border-[#9EBB9D] px-2 w-[298px] h-[113px] resize-none rounded"
                        name="description"
                        required
                        value={formData.description}
                        onChange={handleInputChangeTextArea}
                        rows={4}
                        cols={35}
                      />
                    </label>

                    <label>
                      <legend className="mb-[-32px] mt-5 text-left  ml-7">
                        Annonsör
                      </legend>
                      <input
                        className="rounded py-4 px-2 mt-8 border w-[298px] border-[#9EBB9D] placeholder-[#000000] bg-[#fff]"
                        // placeholder="För- och efternamn..."
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                      />
                    </label>
                    <label>
                      <legend className="mb-[-32px] mt-5 text-left  ml-7">
                        E-post
                      </legend>
                      <input
                        className="rounded py-4 px-2 mt-8 border w-[298px] border-[#9EBB9D] placeholder-[#000000] bg-[#fff]"
                        // placeholder="Email..."
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </label>
                  </div>
                  {/* </p> */}
                  {/* </button> */}
                  <div className="py-2 mb-6">
                    <div className="flex mt-4 justify-center">
                      <div className="">
                        <button
                          className="rounded-sm  text-[17px] text-black border-[#9EBB9D] bg-[#9EBB9D] border w-[298px]  py-3"
                          value={ads?.id}
                          type="submit"
                          onClick={() => updateAd(ads?.id)}
                        >
                          Spara annons
                        </button>
                      </div>
                    </div>
                    <div className="flex mt-4 justify-center">
                      <div className="">
                        <button
                          className="rounded-sm text-[17px] text-black border-[#9EBB9D]  border w-[298px]  py-3"
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
                </div>
              </form>
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
