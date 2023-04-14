import CreateAd from "@/p-components/createAd"
import { NextPage } from "next"

interface Props {}

const Index: NextPage<Props> = ({}) => {
  return (
    <div>
      <CreateAd></CreateAd>
    </div>
  )
}

export default Index

/*import { useState } from "react"

export interface FormData {
  title: string
  description: string
  fullName: string
  email: string
}

export default function MyPage() {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    description: "",
    fullName: "",
    email: "",
  })

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const response = await fetch("http://localhost:3000/api/my-endpoint", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })

    const data = await response.json()
    console.log(data)
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }))
  }

  return (
    <form className="font-sans" onSubmit={handleSubmit}>
      <label>
        Titel:
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Beskrivning:
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Fulla namn:
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  )
}*/
