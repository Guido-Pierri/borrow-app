import Link from "next/link"
import { FcGoogle } from "react-icons/fc"
import { GiHamburgerMenu } from "react-icons/gi"
import { BsFacebook, BsApple, BsFillChatLeftTextFill } from "react-icons/bs"

export default function Header() {
  return (
    <div>
      <nav>
        <div className="border text-white flex justify-between content-center h-20">
          <div className="">
            <GiHamburgerMenu /> {/*Make icons a bit bigger in size*/}
          </div>
          <h1>
            <b>Borrow</b>
          </h1>
          <div className="">
            <BsFillChatLeftTextFill /> {/*Make icons a bit bigger in size*/}
          </div>
        </div>
      </nav>
    </div>
  )
}
