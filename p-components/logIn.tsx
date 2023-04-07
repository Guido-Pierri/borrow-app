import { FcGoogle } from "react-icons/fc"
import { BsFacebook, BsApple } from "react-icons/bs"

import { IoIosArrowDown } from "react-icons/io"
import RegEx from "react"
import Link from "next/link"

import { SyntheticEvent, useState } from "react"
import ReactDOM from "react-dom/client"

const LogIn = ({}) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [validMessageEmail, setValidMessagEmail] = useState("")
  const [validMessagePassword, setValidMessagePassword] = useState("")
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    console.log(email, password)
  }

  /*const validation = () => {
    const emailRegEx =
      /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/i

    const passwordRegEx = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
    )

    if (email === "") {
      setValidMessagEmail("Epost är obligatoriskt!")
    } else if (!emailRegEx.test(email)) {
      setValidMessagEmail("Vänligen ange en giltig Epost!")
    }
    if (password === "") {
      setValidMessagePassword("Lösenord är obligatoriskt!")
    } else if (!passwordRegEx.test(password)) {
      setValidMessagePassword("Vänligen ange ett giltigt lösenord!")
    }
  }*/

  return (
    <div className=" flex items-center justify-center text-center font-sans">
      <div className="" onSubmit={handleSubmit}>
        <Link href={"/"}>
          <h1 className="text-xl font-[500] text-black">
            Välkommen till Borrow!
          </h1>

          <p className="text-xl text-black">
            Logga in eller{" "}
            <span className="text-[#46649D]">registrera dig</span>
          </p>
        </Link>

        <div className=" justify-center ml-2 mt-12 ">
          <div className="border-[#7BAEAB] border w-[265px] py-4 my-3">
            <a href={"/"}>
              <div className="mx-5 text-3xl outline-blue-500 flex flex-row ">
                <FcGoogle />
                <p className=" text-base ml-4">Fortsätt med Google</p>
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
        <p className="mt-12 text-black">eller logga in med</p>

        {
          <form className=" my-12 border-[#7BAEAB]">
            <label>
              <input
                className="rounded py-4 px-7 border w-[265px] border-[#7BAEAB] placeholder-[#000000] bg-[#fff]"
                placeholder="E-post..."
                type="email"
                required
                /*pattern="/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i"*/
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>

            <br />
            {validMessageEmail}
            <label>
              <br />
              <input
                className="rounded py-4 px-7 border w-[265px] border-[#7BAEAB] placeholder-[#000000] bg-[#fff]"
                placeholder="Lösenord..."
                type="password"
                required
                /*pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"*/
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <br />
            {validMessagePassword}

            <div className="flex items-top justify-center my-12 ">
              <Link href={"/products"}>
                <div
                  className=" text-xl mb-2 
        rounded bg-[#9EBB9D] py-3 border w-[265px] "
                >
                  <button
                    /*onClick={validation}*/
                    type="submit"
                    className=" 
          rounded-sm text-[17px] text-black 
         "
                  >
                    Logga in
                  </button>
                </div>
              </Link>
            </div>
          </form>
        }
      </div>
    </div>
  )
}

export default LogIn
