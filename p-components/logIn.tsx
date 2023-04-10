import { NextPage } from "next"
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
    /*console.log("Email: " + user.email)
    console.log("Password: " + user.password)*/
    localStorage.setItem("Email", user.email)
    localStorage.setItem("Password", user.password)
    const getEmail = JSON.stringify(localStorage.getItem("Email"))
    const getPassword = JSON.stringify(localStorage.getItem("Password"))
    console.log("LocalStorage: " + getEmail + " and " + getPassword)

    /*setErrorMessages(validation(user))*/
  }

  return (
    <div className=" flex items-center justify-center text-center font-sans bg-[#F5F5F5] ">
      <div>
        <Link href={"/"}>
          <h1 className="text-xl font-[500]">Välkommen till Borrow!</h1>
          <p className="text-xl">
            Logga in eller{" "}
            <span className="text-[#46649D]">registrera dig</span>
          </p>
        </Link>
        <br />
        <br />
        {/*<div className=" justify-center ml-2 mt-12 ">
          <div className="border-[#7BAEAB] border w-[265px] py-4 my-3">
            <a href={"/"}>
              <div className="mx-5 text-3xl outline-blue-500 flex flex-row ">
                <FcGoogle />
                <p className=" text-base ml-4 text-black">
                  Fortsätt med Google
                </p>
              </div>
            </a>
          </div>
          <div className="border-[#7BAEAB] border w-[265px] py-4">
            <a href={"/"}>
              <div className="mx-5 text-3xl text-[#46649D] flex flex-row  ">
                <BsFacebook />
                <p className="text-base text-black ml-4">
                  Fortsätt med Facebook
                </p>
              </div>
            </a>
          </div>
        </div>
  <p className="mt-12">eller logga in med</p>*/}

        <form
          onSubmit={handleAndValidation}
          className=" my-12 border-[#7BAEAB]"
        >
          <label>
            <input
              className="rounded py-4 px-7 border w-[265px] border-[#7BAEAB] placeholder-[#000000]"
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
              className="rounded py-4 px-7 border w-[265px] border-[#7BAEAB] placeholder-[#000000] "
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
            <Link href={"/products"}>
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

export default LogIn
