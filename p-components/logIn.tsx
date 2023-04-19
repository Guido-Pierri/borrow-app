import Link from 'next/link'
import { useState } from 'react'

import { User } from '@/types/user'
import { v4 as uuidv4 } from 'uuid'

interface FormData {
  email: string
  password: string
}

export default function MyPage() {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
  })

  console.log(formData)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const apiData: User = {
      email: formData.email,
      password: formData.password,
      userId: uuidv4(),
    }
    const response = await fetch('/api/loginUsers/loginUsers', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(apiData),
    })

    const data = await response.json()

    console.log(data)
    console.log('data', data)

    window.location.href = '/ads'
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }))
    console.log(event.target.value)
  }

  return (
    <div className=" flex items-start justify-center text-center bg-[#F5F5F5] h-screen font-sans">
      <div>
        <div className="py-8">
          <Link href={'/'}>
            <h1 className="text-xl font-[500] text-black">
              Välkommen till Borrow!
            </h1>
            <p className="text-xl text-black">
              Logga in eller{' '}
              <span className="text-[#46649D]">registrera dig</span>
            </p>
          </Link>
        </div>
        <form onSubmit={handleSubmit}>
          <label>
            <input
              className="rounded py-4 px-7 mt-8 border w-[265px] border-[#9EBB9D] placeholder-[#000000] bg-[#fff]"
              placeholder="E-post..."
              type="email"
              name="email"
              pattern="^[A-Za-z0-9+_.-]+@(.+)$"
              required
              minLength={10}
              value={formData.email}
              onChange={handleInputChange}
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
          <div className="py-12">
            <button
              className=" 
           rounded-sm text-[17px] text-black border-[#9EBB9D] bg-[#9EBB9D] border w-[265px]  py-3
    "
              type="submit"
            >
              Logga in
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

/*import { NextPage } from "next"
import Link from "next/link"
import { SyntheticEvent, use, useState } from "react"
import { BsFacebook } from "react-icons/bs"
import { FcGoogle } from "react-icons/fc"
import validation from "./validation"

interface Props {
  email: string
  password: string
}

function LogIn() {
  const [input, setInput] = useState<string>("")
  const [user, setUser] = useState<Props>({
    email: "",
    password: "",
  })

  const [errorMessages, setErrorMessages]: any = useState({}) //validation on change

  function handleAndValidation(e: SyntheticEvent) {
    e.preventDefault()
    console.log("Email: " + user.email)
    console.log("Password: " + user.password)
    

    /*setErrorMessages(validation(user))*/
/*}

  return (
    <div className="  flex items-start  justify-center text-center font-sans bg-[#F5F5F5] h-screen">
      <div className="">
        <div className="py-8">
          <Link href={"/"}>
            <h1 className="text-xl font-[500] text-black">
              Välkommen till Borrow!
            </h1>
            <p className="text-xl text-black">
              Logga in eller{" "}
              <span className="text-[#46649D]">registrera dig</span>
            </p>
          </Link>
        </div>
        <br />
        <br />

        <form
          onSubmit={handleAndValidation}
          className=" my-12 border-[#7BAEAB] pb-8"
        >
          <label>
            <input
              className="rounded py-4 px-7 border w-[265px] border-[#9EBB9D] placeholder-[#000000] bg-[#FFF]"
              placeholder="E-post..."
              type="email"
              onChange={(e) => {
                setInput(e.target.value)
                setUser({ ...user, email: e.target.value })
                console.log(e.target.value)
              }}
            />

            {errorMessages.email && (
              <p style={{ color: "red" }}>{errorMessages.email}</p>
            )}
          </label>
          <br />

          <label>
            <br />
            <input
              className="rounded py-4 px-7 border w-[265px] border-[#9EBB9D] placeholder-[#000000] bg-[#FFF]"
              placeholder="Lösenord..."
              type="password"
              onChange={(e) => {
                setInput(e.target.value)
                setUser({ ...user, password: e.target.value })
                console.log(e.target.value)
              }}
            />
            {errorMessages.password && (
              <p style={{ color: "red" }}>{errorMessages.password}</p>
            )}
          </label>
          <br />

          <div className="flex items-top justify-center my-12 ">
            <Link href={"/ads"}>
              <div
                className=" text-xl mb-2 
        rounded bg-[#9EBB9D] py-3 border w-[265px] "
              >
                <button
                  type="submit"
                  className=" 
          rounded-sm text-[17px] text-black "
                >
                  Logga in
                </button>
              </div>
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LogIn*/
