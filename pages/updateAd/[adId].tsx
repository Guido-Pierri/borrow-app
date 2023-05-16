import clientPromise from "@/lib/mongodb"
import { useRouter } from "next/router"
import { Ad } from "@/types/ads"
import { useState } from "react"
import CloseIcon from "@/p-components/closeIcon"
import Icons from "@/p-components/icons"
import Image from "next/image"
import { handleSubmit } from "@/lib/functions/preventDefault"

interface AdId {
  id: string
}
interface Props {
  ads: Ad
}

export default function Post({ ads }: Props) {
  const router = useRouter()
  console.log("image:", ads?.image)

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
        } else {
          console.error("Failed to delete ad")
        }
      } catch (e) {
        console.error("Failed to delete ad", e)
      }
    }
  }

  async function updateAd(id: string) {
    const apiData: ApiData = {
      id: ads?.id,
      image: imageUrl,
      title: formData.title,
      description: formData.description,
      fullName: formData.fullName,
      email: formData.email,
      publisher: ads?.publisher,
    }

    if (imageUrl === "") {
      apiData.image = ads?.image
    }
    console.log("image in updateAd:", imageUrl)

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
    <div className="bg-[#FFFFFF] text-center max-w-sm h-screen">
      <div className=" font-sans">
        <div className="px-4">
          <div className="flex-column">
            <div className="text-left">
              <form className="text-left" onSubmit={handleSubmit}>
                <div className="mt-2 rounded-md  ">
                  <div className="mt-6 mr-4 flex justify-end">
                    <CloseIcon></CloseIcon>
                  </div>

                  <h1 className="text-black text-xl py-4 mb-4 font-bold text-center">
                    Redigera annons
                  </h1>
                  <div>
                    <Icons
                      setNewImageUrl={setImageUrl}
                      image={ads.image}
                    ></Icons>
                  </div>

                  <div className="text-center">
                    <label>
                      <legend className="mb-[-16px] text-left ml-7">
                        Titel
                      </legend>
                      <input
                        className="rounded py-4 px-2 mt-4 border w-[298px]  border-[#9EBB9D] placeholder-[#000000] bg-[#fff]"
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
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </label>
                  </div>

                  <div className="py-2 mb-6">
                    <div className="flex mt-4 justify-center">
                      <div className="">
                        <button
                          className="rounded-sm  text-[17px] flex flex-row justify-center text-black border-[#9EBB9D] bg-[#9EBB9D] border w-[298px]  py-3"
                          value={ads?.id}
                          type="submit"
                          onClick={() => updateAd(ads?.id)}
                        >
                          <div className="mr-2">
                            <Image
                              src={"/Downloading Updates.svg"}
                              alt={"#"}
                              width={"27"}
                              height={"27"}
                              style={{ alignSelf: "center" }}
                            ></Image>
                          </div>
                          Spara annons
                        </button>
                      </div>
                    </div>
                    <div className="flex mt-4 justify-center">
                      <div className="">
                        <button
                          className="rounded-sm text-[17px] text-black flex flex-row justify-center border-[#9EBB9D]  border w-[298px]  py-3"
                          value={ads?.id}
                          type="submit"
                          onClick={() => deleteAd(ads?.id, ads?.publisher)}
                        >
                          <div className="mr-2">
                            <Image
                              src={"/trashcanBlack.svg"}
                              alt={"#"}
                              width={"19"}
                              height={"22"}
                              style={{ alignSelf: "center" }}
                            ></Image>
                          </div>
                          Ta bort annons
                        </button>
                        <br />
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
  }
}
