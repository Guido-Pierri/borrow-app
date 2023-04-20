import { RxHamburgerMenu } from "react-icons/rx"
import { BsChatLeftText } from "react-icons/bs"
import Link from "next/link"

const Header = ({}) => {
  return (
    <div className="flex items-top justify-center pt-6 bg-[#F5F5F5]">
      <nav className="w-full">
        <div className="flex space-x-16 p-3 rounded-sm">
          <div className="p-3 mt-3 text-3xl text-[#000000]">
            <Link href={"/information-side"}>
              <button>
                <RxHamburgerMenu />
              </button>
            </Link>
          </div>

          <div className="mt-4 text-[#C7784C]">
            <Link href={"/ads"}>
              <b className="text-4xl">Borrow</b>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
