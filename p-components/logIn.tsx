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
    <div className=" justify-center text-center">
      <div className="bg-[#F5F5F5]" onSubmit={handleSubmit}>
        <h1 className="text-lg pt-8">
          Välkommen till Borrow! <br />
          Börja med att logga in.
        </h1>
        <form className=" my-12 ">
          <label>
            <input
              className="rounded py-4 px-7"
              placeholder="Användarnamn..."
              type="text"
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
            <Link href={"/"}>
              <div
                className=" text-xl mb-2 
        rounded bg-[#7BAEAB] py-3 w-[256px] "
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
        </form>
        <p className="">Eller fortsätt med</p>
        <footer className="flex space-x-4 justify-center mt-10">
          <a href={"/"}>
            <div className="mx-3 text-3xl">
              <FcGoogle />
            </div>
          </a>
          <br />
          <a href={"/"}>
            <div className="mx-3 text-3xl text-[#46649D]">
              <BsFacebook />
            </div>
          </a>
          <br />
          <a href={"/"}>
            <div style={{ color: "grey" }} className="mx-3 text-3xl">
              <BsApple />
              <br className="" />
            </div>
          </a>
        </footer>
      </div>
    </div>
  )
}

export default LogIn
