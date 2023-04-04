import { FcGoogle } from "react-icons/fc"
import { BsFacebook, BsApple } from "react-icons/bs"
import Link from "next/link"

import { SyntheticEvent, useState } from "react"
import ReactDOM from "react-dom/client"

const LogIn = ({}) => {
  const [epost, setEpost] = useState("")
  const [password, setPassword] = useState("")
  const [validMessageEmail, setValidMessagEmail] = useState("")
  const [validMessagePassword, setValidMessagePassword] = useState("")
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    console.log(epost, password)
  }

  const validation = () => {
    const emailRegEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
    const passwordRegEx = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
    )

    if (!emailRegEx.test(epost) || epost === "") {
      setValidMessagEmail("Epost är inte i giltig format!")
    } else if (emailRegEx) {
    }
    if (!passwordRegEx.test(password) || password === "") {
      setValidMessagePassword("Lösenord är inte i giltig format!")
    }
  }

  return (
    <div className=" flex items-center justify-center text-center bg-[#F3F0EC]">
      <div className="" onSubmit={handleSubmit}>
        <div className=" justify-center ml-4 mt-24 ">
          <div className="border-[#7BAEAB] border w-[250px] py-4 my-3">
            <a href={"/"}>
              <div className="mx-5 text-3xl outline-blue-500 flex flex-row ">
                <FcGoogle />
                <p className=" text-base ml-4">Fortsätt med Google</p>
              </div>
            </a>
          </div>

          <div className="border-[#7BAEAB] border w-[250px] py-4">
            <a href={"/"}>
              <div className="mx-5 text-3xl text-[#46649D] flex flex-row  ">
                <BsFacebook />
                <p className="text-base text-[#020617] ml-4">
                  Fortsätt med Facebook
                </p>
              </div>
            </a>
          </div>
        </div>
        <p className="mt-12 ">eller</p>
        {
          <form className=" my-12">
            <label>
              <input
                className="rounded py-4 px-7"
                placeholder="Epost..."
                type="email"
                value={epost}
                onChange={(e) => setEpost(e.target.value)}
              />
            </label>
            <br />
            {validMessageEmail}
            <label>
              <br />
              <input
                className="rounded py-4 px-7"
                placeholder="Lösenord..."
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <br />
            {validMessagePassword}
            <div className="flex items-top justify-center my-12">
              <Link href={""}>
                <div
                  className=" text-xl mb-2 
      rounded bg-[#7BAEAB] py-3 w-[221px] "
                >
                  <button
                    onClick={validation}
                    type="submit"
                    className=" 
        rounded-sm font-bold text-white 
       "
                  >
                    Logga in
                  </button>
                </div>
              </Link>
            </div>
            <Link href={"/"}>
              <p className="underline">
                Har du inte ett konto? Registrera dig här
              </p>
            </Link>
          </form>
        }
      </div>
    </div>
  )
}

export default LogIn
