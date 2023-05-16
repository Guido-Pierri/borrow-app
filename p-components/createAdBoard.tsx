import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useRouter } from 'next/router'
import Image from 'next/image'

//function that generates random id:s
uuidv4()

/*Defining two interfaces,
that describes shape of the data*/
interface FormData {
  id: string
  title: string
  description: string
  email: string
}

interface ApiData {
  id: string
  title: string
  description: string
  email: string
  publisher: string
  publisherProfileImage: string
  publisherName: string
}

/*Defining a function (pass to other files), that has 
a object formData that contains following properties*/
export default function CreateAd({ userId }: any) {
  const [formData, setFormData] = useState<FormData>({
    id: '',
    title: '',
    description: '',
    email: '',
  })
  const [profileImage, setProfileImage] = useState<string | null>(null)

  console.log(formData)
  const router = useRouter()

  function handleClick() {
    console.log('handleClick')

    router.push(`/board/${userId}`)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!formData) {
      return alert('Hejsan!')
    }

    const user = await fetch(`/api/user/${userId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userId),
    })
    const userData = await user.json()
    console.log(userData)
    const profileImage = userData.result.profileImage
    const profileName = userData.result.firstAndLastName
    console.log('profileImage:', profileImage)

    const apiData: ApiData = {
      id: uuidv4(),
      title: formData.title,
      description: formData.description,
      email: formData.email,
      publisher: userId,
      publisherProfileImage: profileImage,
      publisherName: profileName,
    }
    console.log(apiData)

    const response = await fetch('/api/boardAd', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
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

  return (
    <div className=" flex items-start justify-center text-center bg-[#FFFFFF] h-screen font-sans">
      <form className="font-sans text-left" onSubmit={handleSubmit}>
        <h1 className="text-black text-xl mb-7 font-bold text-center">
          Skapa inlägg
        </h1>

        <label>
          <legend className="mb-[-16px] ">Titel</legend>
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
          <legend className="mb-[2px] mt-5 ">Beskrivning</legend>

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
          <legend className="mb-[-32px] mt-5">E-post</legend>
          <input
            className="rounded py-4 px-2 mt-8 border w-[298px] border-[#9EBB9D] placeholder-[#000000] bg-[#fff]"
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>

        <br />
        <br />
        <div className="flex">
          <button className="relative rounded-sm text-[17px] text-black border-[#9EBB9D] bg-[#9EBB9D] border w-[298px] py-3 text-center">
            <Image
              src={'/Pin.svg'}
              width={24}
              height={24}
              alt={''}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 ml-4"
            />
            Publicera inlägg
          </button>
        </div>
      </form>
    </div>
  )
}
