import { RxHamburgerMenu } from "react-icons/rx"
import { BsChatLeftText } from "react-icons/bs"

const Header2 = ({}) => {
  return (
    <div className="flex items-top justify-center ">
      <nav className="w-full">
        <div className="flex space-x-8 p-3 mb-8 rounded-sm bg-[#DBE3DF] justify-center">
          <div className="p-3 mt-3 text-3xl text-[#7BAEAB]">
            <button>
              <RxHamburgerMenu />
            </button>
          </div>

          <header className="mt-4 text-[#C7784C]">
            <b className="text-3xl">Borrow</b>
          </header>
          <a href="/">
            <div className="p-3 mt-3 text-3xl text-[#7BAEAB]">
              <BsChatLeftText />
            </div>
          </a>
        </div>
      </nav>
    </div>
  )
}

export default Header2
