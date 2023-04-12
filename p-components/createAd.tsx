import { IoIosArrowDown } from "react-icons/io"
import RegEx, { useEffect } from "react"
import Link from "next/link"

import { SyntheticEvent, useState } from "react"
import ReactDOM from "react-dom/client"
import Products from "./products"

interface Annons {
  //Kajsaaa countinue, with this database
  title: string
  description: string
  username: string
  email: string
}
const CreateAd = ({}) => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")

  const [validMessageEmail, setValidMessagEmail] = useState("")
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    // console.log(email)
  }
  return (
    <div className=" flex items-center justify-center text-center bg-[#F5F5F5] font-sans">
      <div>
        <h1 className="text-xl font-[500] text-black">Skapa en annons</h1>

        {
          <form className=" my-12 border-[#7BAEAB]" onSubmit={handleSubmit}>
            <label>
              <input
                className="rounded py-4 px-7 border w-[265px] border-[#7BAEAB] placeholder-[#000000] bg-[#fff]"
                placeholder="Rubrik..."
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </label>

            <br />

            <label>
              <br />
              <input
                className="rounded py-4 px-7 border w-[265px] border-[#7BAEAB] placeholder-[#000000] bg-[#fff]"
                placeholder="Beskrivning..."
                type="text"
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </label>
            <br />
            <label>
              <br />
              <input
                className="rounded py-4 px-7 border w-[265px] border-[#7BAEAB] placeholder-[#000000] bg-[#fff]"
                placeholder="Ditt fulla namn..."
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </label>
            <br />
            <label>
              <br />
              <input
                className="rounded py-4 px-7 border w-[265px] border-[#7BAEAB] placeholder-[#000000] bg-[#fff]"
                placeholder="Din epost..."
                type="email"
                required
                /*pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"*/
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <div className="flex items-top justify-center my-12 ">
              <Link href={"/ads"}>
                <div
                  className=" text-xl mb-2 
        rounded bg-[#9EBB9D] py-3 border w-[265px] "
                >
                  <button
                    type="submit"
                    className=" 
          rounded-sm text-[17px] text-black 
         "
                    onClick={function addData() {
                      return {
                        title: { title },
                        description: { description },
                        fullName: { fullName },
                        email: { email },
                      }
                    }}
                  >
                    Spara annonsen
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

export default CreateAd
