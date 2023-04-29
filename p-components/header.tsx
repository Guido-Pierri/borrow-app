import { BsChatLeftText } from 'react-icons/bs'
import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'
import CloseIcon from './closeIcon'
import HamburgerMenu, { Links } from './hamburgerMenu'
import BorrowLogo from './borrowLogo'

const Header = ({}) => {
  const [hide, setHide] = useState(false)

  const hideData = () => {
    console.log('HideData was triggered')
    setHide(!hide)
  }

  return (
    <div className="max-w-full h-12  bg-[#FFFFFF] mb-4 text-black rounded-md flex justify-center text-center ">
      <div className="flex-initial">
        <HamburgerMenu />
      </div>
      <div className="mx-auto mt-9">
        <BorrowLogo></BorrowLogo>
      </div>
      <div className="hidden md:flex">
        <Links />
      </div>
    </div>

    // <div className="justify-between  bg-[#FFFFFF] border border-red-700">
    //   <nav className="w-full border border-black flex flex-row">
    //     <HamburgerMenu></HamburgerMenu>
    //     <Image
    //       className="mt-2 border-teal-200 border"
    //       src={'/Borrow.svg'}
    //       height={61}
    //       width={135}
    //       alt={'#'}
    //     ></Image>

    //     {/* <Link href={'/ads'}>
    //           <b className="text-4xl">Borrow</b>
    //         </Link> */}
    //     {/* </div> */}
    //   </nav>
    // </div>
  )
}

export default Header
