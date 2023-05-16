import { useRouter } from 'next/router'
import Image from 'next/image'
import clientPromise from '@/lib/mongodb'
import { User } from '@/types/user'
import ProfileImage from '@/p-components/profileImageChangeIcon'
import ProfileInfo from '@/p-components/profileInfoContent'
import { useState } from 'react'
import HeaderWithCloseIconProfile from '@/p-components/HeaderWithCloseIconProfile'
import NotificationsOverlay from '@/p-components/notificationsOverlay'
import DeleteAccountOverlay from '@/p-components/deleteAccountOverlay'
import ProfileInfoOverlay from '@/p-components/profileInfoOverlay'
import ProfileUploadImageOverlay from '@/p-components/profileUploadImageOverlay'

interface Props {
  user: User
}
export default function MyProfile({ user }: Props) {
  const router = useRouter()
  const { userId } = router.query

  console.log(user.firstAndLastName)
  // const [showHeader, setShowHeader] = useState<string>('')
  // const [showProfile, setShowProfile] = useState<string>('')
  const [showInfoOverlay, setShowInfoOverlay] = useState(false)
  const [showNotificationsOverlay, setShowNotificationsOverlay] =
    useState(false)
  const [showDeleteAccountOverlay, setShowDeleteAccountOverlay] =
    useState(false)

  const [showUploadImageOverlay, setshowUploadImageOverlay] = useState(false)

  const handleInfoElementClick = () => {
    setShowInfoOverlay(true)
  }
  const handleCloseInfoOverlay = () => {
    setShowInfoOverlay(false)
  }
  const handleNotificationsElementClick = () => {
    setShowNotificationsOverlay(true)
  }
  const handleCloseNotificationsOverlay = () => {
    setShowNotificationsOverlay(false)
  }
  const handleDeleteAccountElementClick = () => {
    setShowDeleteAccountOverlay(true)
  }
  const handleCloseDeleteAccountOverlay = () => {
    setShowDeleteAccountOverlay(false)
  }

  const handleImageUploadElementClick = () => {
    setshowUploadImageOverlay(true)
  }
  const handleCloseImageUploadOverlay = () => {
    setshowUploadImageOverlay(false)
  }
  // console.log(showInfo)
  const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/

  // if (!user.profileImage || !urlRegex.test(user.profileImage)) {
  //   return {
  //     redirect: {
  //       destination: '/404',
  //       permanent: false,
  //     },
  //   }
  // }
  return (
    <>
      <div className="max-w-sm">
        <section>
          <HeaderWithCloseIconProfile userId={userId} />
        </section>
        <section>
          <div className="flex ml-[8%] items-center w-[51%]">
            <div className="relative ">
              {!user.profileImage ? (
                <Image
                  className="rounded-full "
                  src={'/profile.svg'}
                  width={'84'}
                  height={84}
                  alt=""
                />
              ) : (
                <Image
                  className="rounded-full aspect-square object-cover"
                  src={`${user.profileImage}`}
                  width={84}
                  height={84}
                  alt=""
                />
              )}

              <div
                className="absolute top-[65.5%] left-[71.42%] clickable"
                onClick={handleImageUploadElementClick}
              >
                <ProfileImage />
                <div>
                  {showUploadImageOverlay && (
                    <ProfileUploadImageOverlay
                      onClose={handleCloseImageUploadOverlay}
                      user={user}
                      userId={userId}
                    />
                  )}
                </div>
              </div>
            </div>
            <p className="ml-[5.38%] font-bold text-xl ">Min profil </p>
          </div>
          <div className="ml-[5.38%] mt-[5.15%]">
            <p
              className="mt-[5.38%] text-base font-normal clickable"
              onClick={handleInfoElementClick}
            >
              Mina uppgifter
            </p>
            <div>
              {showInfoOverlay && (
                <ProfileInfoOverlay
                  onClose={handleCloseInfoOverlay}
                  user={user}
                  userId={userId}
                />
              )}
            </div>
            <p
              className="mt-[5.38%] text-base font-normal clickable"
              onClick={handleNotificationsElementClick}
            >
              Notiser
            </p>
            <div>
              {showNotificationsOverlay && (
                <NotificationsOverlay
                  onClose={handleCloseNotificationsOverlay}
                />
              )}
            </div>
            <p
              className="mt-[5.38%] text-base font-normal clickable"
              onClick={handleDeleteAccountElementClick}
            >
              Avsluta konto
            </p>
            <div>
              {showDeleteAccountOverlay && (
                <DeleteAccountOverlay
                  onClose={handleCloseDeleteAccountOverlay}
                  userId={userId}
                />
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export const getServerSideProps = async (context: any) => {
  try {
    const { userId } = context.query

    const { ObjectId } = require('mongodb')

    const str = userId
    const objId = new ObjectId(str)
    console.log(userId)

    const client = await clientPromise
    const db = client.db('borrow')

    const user = await db.collection('users').findOne({ _id: objId })
    console.log(user)

    return {
      props: { user: JSON.parse(JSON.stringify(user)) },
    }
  } catch (e) {
    console.error(e)
  }
}
