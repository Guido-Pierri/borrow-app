import Header from "@/p-components/header"
import { NextPage } from "next"
import { useState } from "react"
import { v4 as uuidv4 } from "uuid"
uuidv4()
interface FormData {
  id: string
  firstName: string
  lastName: string
  adress: string
  email: string
  mobileNumber: number
  password: string
  samePassword: string
}
interface ApiData {
  id: string
  title: string
  description: string
  fullName: string
  email: string
  mobileNumber: number
  password: string
  samePassword: string
}
function navigateTo() {
  window.location.href = "/ads"
}
export default function MyPage() {
  const [formData, setFormData] = useState<FormData>({
    id: "",
    firstName: "",
    lastName: "",
    adress: "",
    email: "",
    mobileNumber: 0,
    password: "",
    samePassword: ""
  })

  console.log(formData)
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const response = await fetch("/api/postAds/postAds", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
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
        <h1
          className="text-xl font-[500] text-black"
          style={{ marginBottom: "1rem" }}
        >
          {" "}
          Registrera konto:
        </h1>

        <label>
          <input
            className="rounded py-4 px-7 mt-800 border w-[265px] border-[#9EBB9D] placeholder-[#000000] bg-[#fff]"
            placeholder="Förnamn..."
            type="text"
            name="firstName"
            value={formData.firstName}
            required
            onChange={handleInputChange}
            style={{ color: "#000000" }}
          />
        </label>
        <label>
          <input
            className="rounded py-4 px-7 mt-8 border w-[265px] border-[#9EBB9D] placeholder-[#000000] bg-[#fdfdfd]"
            placeholder="Efternamn..."
            type="text"
            name="lastName"
            required
            value={formData.lastName}
            onChange={handleInputChange}
            style={{ color: "#000000" }}
          />
        </label>
        <label>
          <input
            className="rounded py-4 px-7 mt-8 border w-[265px] border-[#9EBB9D] placeholder-[#000000] bg-[#fff]"
            placeholder="Adress..."
            type="text"
            name="adress"
            value={formData.adress}
            onChange={handleInputChange}
            style={{ color: "#000000" }}
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
            style={{ color: "#000000" }}
          />
        </label>
        <label>
          <input
            className="rounded py-4 px-7 mt-8 border w-[265px] border-[#9EBB9D] placeholder-[#000000] bg-[#fff]"
            placeholder="Mobilnummer..."
            type="text"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleInputChange}
            style={{ color: "#000000" }}
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
            style={{ color: "#000000" }}
          />
        </label>
        <label>
          <input
            className="rounded py-4 px-7 mt-8 border w-[265px] border-[#9EBB9D] placeholder-[#000000] bg-[#fff]"
            placeholder="Bekräfta lösenord..."
            type="password"
            name="samePassword"
            required
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Måste innehålla minst en siffra och en stor och liten bokstav, och minst 8 eller fler tecken"
            minLength={8}
            value={formData.samePassword}
            onChange={handleInputChange}
            style={{ color: "#000000" }}
          />
        </label>
        <br />
        <br />
        <div className="bg-[#F5F5F5]">
          <button
            className="
           rounded-sm text-[17px] text-black border-[#9EBB9D] bg-[#9EBB9D] border w-[265px]  py-3
    "
            type="submit"
            onClick={navigateTo}
          >
            Registrera
          </button>
        </div>
      </form>
    </div>
  )
}
