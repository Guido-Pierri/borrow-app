import { useState } from "react"

interface FormData {
  name: string
  email: string
}

interface ApiData {
  name: string
  email: string
}

export default function MyPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
  })

  console.log(formData)

  /*const [title, setTitle] = useState<string>("")
  const [description, setdescription] = useState<string>("")
  const [fullName, setFullName] = useState<string>("")
  const [email, setEmail] = useState<string>("")*/

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const apiData: ApiData = { name: formData.name, email: formData.email }
    const response = await fetch(
      "https://borrow-qoiwa2hkz-guido-pierri.vercel.app/api/users/users",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(apiData),
      }
    )

    const data = await response.json()

    console.log(data)
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }))
    console.log(event.target.value)
  }

  return (
    <div className=" flex items-start justify-center text-center bg-[#F5F5F5] h-screen font-sans">
      <form className="font-sans" onSubmit={handleSubmit}>
        <label>
          <input
            className="rounded py-4 px-7 mt-8 border w-[265px] border-[#9EBB9D] placeholder-[#000000] bg-[#fff]"
            placeholder="Ditt fulla namn..."
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          <input
            className="rounded py-4 px-7 mt-8 border w-[265px] border-[#9EBB9D] placeholder-[#000000] bg-[#fff]"
            placeholder="Email..."
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <br />
        <button
          className="
           rounded-sm text-[17px] text-black border-[#9EBB9D] bg-[#9EBB9D] border w-[265px]  py-3
    "
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  )
}
