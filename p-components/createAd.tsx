//TODO
//add userId to ads dynamically from login-->ads--->createAds


import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useRouter } from 'next/router'
import Upload from '@/p-components/upload'

//function that generates random id:s
uuidv4()

/*Defining two interfaces,
that describes shape of the data*/
interface FormData {
  id: string
  title: string
  description: string
  fullName: string
  email: string
  category: string
}
interface ApiData {
  image: string
  id: string
  title: string
  description: string
  fullName: string
  email: string
  category: string
  publisher: string
}

/*Defining a function (pass to other files), that has 
a object formData that contains following properties*/
export default function CreateAd({ imageUrl, userId }: any) {
  const [imgUrl, setImgUrl] = useState("")

  const [formData, setFormData] = useState<FormData>({
    id: "",
    title: "",
    description: "",
    fullName: "",
    email: "",
    category: "",
  })

  console.log(formData)
  const router = useRouter()

  function handleClick() {
    console.log("handleClick")

    router.push(`/ads/${userId}`)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!imgUrl) {
      return alert("ladda upp en bild!")
    }
    // if (!file) {
    //   return
    // }

    // const imageData = new FormData()
    // imageData.append('file', file)

    // const imageResponse = await fetch('/api/upload', {
    //   method: 'POST',
    //   body: imageData,
    // })

    // if (imageResponse.ok) {
    //   const data = await imageResponse.json()
    //   console.log(data)
    // } else {
    //   console.error(imageResponse.statusText)
    // }

    const apiData: ApiData = {
      image: imgUrl,
      id: uuidv4(),
      title: formData.title,
      description: formData.description,
      fullName: formData.fullName,
      email: formData.email,
      category: formData.category,
      publisher: userId,
      // userId:
    }
    console.log(apiData)

    const response = await fetch("/api/ad", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiData),
    })
    const data = await response.json()
    console.log(data)
    if (data) {
    }
    handleClick()
  }

  /*Is called when user types something in the form
  and it updates formData with the new values passed in
  through setFormData*/
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }))
    console.log(event.target.value)
  }
  const handleInputChangeTextArea = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }))
    console.log(event.target.value)
  }

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }))
    console.log(event.target.value)
  }
  // function handleOnUpload(info){
  //   updateInfo(info)
  // }
  return (
    <div className=" flex items-start justify-center text-center bg-[#FFFFFF] h-screen font-sans">
      <form className="font-sans text-left" onSubmit={handleSubmit}>
        <h1 className="text-black text-xl mb-7 font-bold text-center">
          Skapa annons
        </h1>
        <div>
          <legend className="mb-[-32px]">Bilder</legend>
          <Upload setImageUrl={setImgUrl} />
        </div>
        <label>
          <legend className="mb-[-16px] ">Titel</legend>
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
          <legend className="mb-[2px] mt-5 ">Beskrivning</legend>
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
            className="border border-[#9EBB9D] w-[298px] px-2 resize-none rounded"
            name="description"
            required
            value={formData.description}
            onChange={handleInputChangeTextArea}
            rows={4}
            cols={35}
          />
        </label>
        <label>
          <legend className="mb-[2px] mt-5 ">Välj en kategori</legend>
          <select
            className="rounded py-4 px-7 border w-[298px] border-[#9EBB9D] placeholder-[#000000] bg-[#fff]"
            id="simple"
            name="category"
            value={formData.category}
            onChange={handleSelectChange}
          >
            <option disabled>Kategorier</option>
            <option>Städ</option>
            <option>Verktyg</option>
            <option>Cyklar</option>
            <option>Elektronik</option>
            <option>Grill</option>
          </select>
        </label>
        <label>
          <legend className="mb-[-32px] mt-5">Namn</legend>
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
          <legend className="mb-[-32px] mt-5">E-post</legend>
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

        <br />
        <br />
        <button
          className="
           rounded-sm text-[17px] text-black border-[#9EBB9D] bg-[#9EBB9D] border w-[298px]  py-3
    "
          type="submit"
        >
          Publicera annons
        </button>
      </form>
    </div>
  )
}
