import { User } from '@/types/user'
import { FC, useState } from 'react'
import UploadImageUpdateProfileImage from './uploadImageUpdateProfileImage'
import CloseIconWOLink from './closeIconWOLink'

interface ProfileUploadImageContentProps {
  onClose: () => void
  user: User
  userId: any
}
const ProfileUploadImageContent: FC<ProfileUploadImageContentProps> = ({
  onClose,
  user,
  userId,
}) => {
  const [imgUrl, setImgUrl] = useState('')
  const apiData: User = {
    userId: user.userId,
    firstAndLastName: user.firstAndLastName,
    postCode: user.postCode,
    email: user.email,
    password: user.password,
    profileImage: imgUrl,
  }

  return (
    <>
      <div className="bg-[#ffffff] rounded-md">
        <div className="mt-[8.5%] ml-[7.9%] mr-[5.8%] flex flex-row justify-between ">
          <p className="text-xl font-[700] text-black flex justify-start">
            Mina uppgifter
          </p>
          <div>
            <button onClick={onClose}>
              <CloseIconWOLink />
            </button>
          </div>
        </div>
        <div>
          <UploadImageUpdateProfileImage setImageUrl={setImgUrl} />
        </div>
      </div>
    </>
  )
}
export default ProfileUploadImageContent
