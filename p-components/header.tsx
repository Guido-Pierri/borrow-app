import { RxHamburgerMenu } from "react-icons/rx"
import { BsChatLeftText } from "react-icons/bs"
import Link from "next/link"
import { useState } from "react"
import Image from "next/image"

const Header = ({}) => {
  const [hide, setHide] = useState(false)

  const hideData = () => {
    console.log("HideData was triggered")
    setHide(!hide)
  }

  return (
    <div className="flex items-top justify-center pt-6 bg-[#FFFFFF]">
      <nav className="w-full">
        <div className="flex space-x-16 p-3 rounded-sm">
          <div className="p-3 mt-3 text-3xl text-[#000000] z-10">
            <div className="btn">
              <button onClick={hideData}>
                <RxHamburgerMenu />
              </button>
              {hide && (
                <div className="bg-white border-2 min-h-screen text-sm text-left">
                  <div className="max-w-7xl py-6 px-20">
                    <ul className="pl-0">
                      <li className="py-1">
                        <a href={"/information-side"}>Så fungerar Borrow</a>
                      </li>
                      <li className="py-1">
                        <a href={"/contact"}>Kontakta oss</a>
                      </li>
                      <div className="X_button_class">
                        <button onClick={hideData}>X</button>
                      </div>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="mt-6 text-[#C7784C] z-0 m-auto left-16">
            <Image
              src={"/Borrow.svg"}
              height={61}
              width={135}
              alt={"#"}
            ></Image>

            {/* <Link href={'/ads'}>
              <b className="text-4xl">Borrow</b>
            </Link> */}
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
