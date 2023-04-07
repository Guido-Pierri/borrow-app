import { RxHamburgerMenu } from "react-icons/rx"
import { BsChatLeftText } from "react-icons/bs"

const Header2 = ({}) => {
  return (
    <div className="flex items-top justify-center py-6 bg-[#F5F5F5]">
      {/*Title does not want to center*/}
      <nav className="w-full">
        <div className="flex space-x-16 p-3 rounded-sm">
          <div className="p-3 mt-3 text-3xl text-[#000000]">
            <button>
              <RxHamburgerMenu />
            </button>
          </div>

          <div className="mt-4 text-[#C7784C]">
            <b className="text-4xl">Borrow</b>
          </div>
          {/*<a href="/">
            <div className="p-3 mt-3 text-3xl text-[#7BAEAB]">
              <BsChatLeftText />
            </div>
  </a>*/}
        </div>
      </nav>
    </div>
  )
}

export default Header2
