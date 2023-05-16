import BorrowLogo from "./borrowLogo"

import HamburgerMenuProfile, { Links } from "./HamburgerMenuProfile"
interface Props {
  userId: string
  anotherUserId: number
}
const HeaderProfile = ({ userId, anotherUserId }: Props) => {
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
        <HamburgerMenuProfile userId={userId} />
      </div>
      <div className="mx-auto mt-12 ">
        <BorrowLogo userId={anotherUserId}></BorrowLogo>
      </div>
      <div className="hidden h-screen">
        <Links />
      </div>
    </div>
  )
}

export default HeaderProfile
