import HamburgerMenu, { Links } from './hamburgerMenu'
import BorrowLogo from './borrowLogo'
import router from 'next/router'
import BorrowLogoInView from './borrowLogoInView'

interface Props {
  userId?: any
  anotherUserId?: any
}
const HeaderInView = ({ userId, anotherUserId }: Props) => {
  return (
    <div
      className="h-14  
    bg-[#FFFFFF] 
    text-black 
    rounded-md 
    flex justify-center 
    text-center 
    mb-14 
    relative max-w-sm"
    >
      <div className="pt-12 absolute left-5 ">
        <HamburgerMenu userId={userId} />
      </div>
      <div className="mx-auto mt-12 ">
        <BorrowLogoInView />
      </div>
      <div className="hidden h-screen">
        <Links />
      </div>
    </div>
  )
}

export default HeaderInView
