import { IoIosArrowDown } from "react-icons/io"
import RegEx, { useEffect } from "react"
import Link from "next/link"

import { SyntheticEvent, useState } from "react"
import ReactDOM from "react-dom/client"
import Products from "./products"

interface Annons {
  name: string
  description: string
}
const CreateAd = ({}) => {
  const [rubrik, setRubrik] = useState("")
  const [beskrivning, setBeskrivning] = useState("")
  const [namn, setNamn] = useState("")
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
          <form className=" my-12 border-[#7BAEAB]">
            <label>
              <input
                className="rounded py-4 px-7 border w-[265px] border-[#7BAEAB] placeholder-[#000000] bg-[#fff]"
                placeholder="Rubrik..."
                type="text"
                required
                value={rubrik}
                onChange={(e) => setRubrik(e.target.value)}
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
                value={beskrivning}
                onChange={(e) => setBeskrivning(e.target.value)}
              />
            </label>
            <br />
            <label>
              <br />
              <input
                className="rounded py-4 px-7 border w-[265px] border-[#7BAEAB] placeholder-[#000000] bg-[#fff]"
                placeholder="Ditt namn..."
                type="text"
                required
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
              <Link href={"/products"}>
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
                        name: { rubrik },
                        description: { beskrivning },
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
