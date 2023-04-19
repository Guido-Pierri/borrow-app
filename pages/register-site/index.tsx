import Header from "@/p-components/header"
import { NextPage } from "next"
import { useState } from "react"
import { v4 as uuidv4 } from "uuid"
import { Link } from 'react-router-dom';
uuidv4()
interface FormData {
  id: string
  title: string
  description: string
  fullName: string
  email: string
  password: string
}
interface ApiData {
  id: string
  title: string
  description: string
  fullName: string
  email: string
  password: string
}
export default function MyPage() {
  const [formData, setFormData] = useState<FormData>({
    id: "",
    title: "",
    description: "",
    fullName: "",
    email: "",
    password: "",
  })

  console.log(formData)
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const apiData: ApiData = {
      id: uuidv4(),
      title: formData.title,
      description: formData.description,
      fullName: formData.fullName,
      email: formData.email,
      password: "",
    }

    const response = await fetch("/api/postAds/postAds", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiData),
    })

    const data = await response.json()

    console.log(data)
    window.location.href = "/ads"
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }))
    console.log(event.target.value)
  }
  return (
    <div className="bg-[#F5F5F5] text-center max-w-sm h-screen ">
      <Header></Header>
      <form className="font-sans bg-[#F5F5F5]" onSubmit={handleSubmit}>
      <h1 className="text-xl font-[500] text-black" style={{ marginBottom: '1rem' }}> Registrera konto:</h1>
      
        <label>
          
          <input
            className="rounded py-4 px-7 mt-800 border w-[265px] border-[#9EBB9D] placeholder-[#000000] bg-[#fff]"
            placeholder="Förnamn..."
            type="text"
            name="förnamn"
            value={formData.title}
            required
            onChange={handleInputChange}
          />
        </label>
        <label>
          <input
            className="rounded py-4 px-7 mt-8 border w-[265px] border-[#9EBB9D] placeholder-[#000000] bg-[#fff]"
            placeholder="Efternamn..."
            type="text"
            name="efternamn"
            required
            value={formData.description}
            onChange={handleInputChange}
          />
        </label>
        <label>
          <input
            className="rounded py-4 px-7 mt-8 border w-[265px] border-[#9EBB9D] placeholder-[#000000] bg-[#fff]"
            placeholder="Adress..."
            type="text"
            name="adress"
            value={formData.fullName}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          <input
            className="rounded py-4 px-7 mt-8 border w-[265px] border-[#9EBB9D] placeholder-[#000000] bg-[#fff]"
            placeholder="Epost..."
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>
        <label>
          <input
            className="rounded py-4 px-7 mt-8 border w-[265px] border-[#9EBB9D] placeholder-[#000000] bg-[#fff]"
            placeholder="Mobilnummer..."
            type="text"
            name="telefon"
            value={formData.fullName}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          <input
            className="rounded py-4 px-7 mt-8 border w-[265px] border-[#9EBB9D] placeholder-[#000000] bg-[#fff]"
            placeholder="Lösenord..."
            type="password"
            name="password"
            required
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Måste innehålla minst en siffra och en stor och liten bokstav, och minst 8 eller fler tecken"
            minLength={8}
            value={formData.password}
            onChange={handleInputChange}
          />
        </label>
        <label>
          <input
            className="rounded py-4 px-7 mt-8 border w-[265px] border-[#9EBB9D] placeholder-[#000000] bg-[#fff]"
            placeholder="Bekräfta lösenord..."
            type="password"
            name="password"
            required
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Måste innehålla minst en siffra och en stor och liten bokstav, och minst 8 eller fler tecken"
            minLength={8}
            value={formData.password}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <br />
        <div className="bg-[#F5F5F5]">
          <Link href={"/ads"}>
          <button
            className="
           rounded-sm text-[17px] text-black border-[#9EBB9D] bg-[#9EBB9D] border w-[265px]  py-3
    "
            type="submit"
          >
            Logga in
          </button>
          </Link>
        </div>
      </form>
    </div>
  )
}
