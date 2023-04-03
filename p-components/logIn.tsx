import { FcGoogle } from "react-icons/fc"
import { BsFacebook, BsApple } from "react-icons/bs"
import Link from "next/link"

import { SyntheticEvent, useState } from "react"
import ReactDOM from "react-dom/client"

const LogIn = ({}) => {
  const [name, setName] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    console.log(name, password)
  }

  return (
    <div className=" flex items-center justify-center text-center bg-[#F3F0EC]">
      <div className="" onSubmit={handleSubmit}>
        {" "}
        {/*bg-[#F5F5F5], på div innan form*/}
        <div className=" justify-center ml-2 mt-24 ">
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
        <p className="mt-12">eller</p>
        {/*<div className=" ml-2 justify-center mt-16">
        <button>
          <div className="mx-4 text-2xl text-[#7BAEAB]  flex flex-row space-x-[126px] my-2">
            <p className=" text-base text-[#020617]">Logga in</p>
            <IoIosArrowDown />
          </div>
        </button>
        <br />
        <button className="mt-6">
          <div className="mx-4 text-2xl text-[#7BAEAB]  flex flex-row space-x-[100px] ">
            <p className=" text-base text-[#020617]">Skapa konto</p>
            <IoIosArrowDown />
          </div>
        </button>
</div>*/}
        {
          <form className=" my-12 ">
            <label>
              <input
                className="rounded py-4 px-7 "
                placeholder="Epost..."
                type="email"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <br />
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

            <div className="flex items-top justify-center my-12">
              <Link href={"/products"}>
                <div
                  className=" text-xl mb-2 
      rounded bg-[#7BAEAB] py-3 w-[221px] "
                >
                  <button
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
              <p>Har du inte ett konto? Registrera dig här</p>
            </Link>
          </form>
        }
        <br className="my-40" />
      </div>
    </div>
  )
}

export default LogIn
