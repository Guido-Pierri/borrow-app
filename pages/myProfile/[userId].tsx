import HeaderWithCloseIcon from '@/p-components/headerWithCloseIcon'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { GetServerSideProps } from 'next'
import clientPromise from '@/lib/mongodb'
import { User } from '@/types/user'
import ProfileImage from '@/p-components/profileImageChangeIcon'
import ProfileInfo from '@/p-components/profileInfo'
import { useState } from 'react'

interface Props {
  user: User
}
export default function MyProfile({ user }: Props) {
  const router = useRouter()
  const { userId } = router.query
  console.log(user.firstName)
  const [showInfo, setShowInfo] = useState<string>('hidden')
  const [showHeader, setShowHeader] = useState<string>('')
  const [showProfile, setShowProfile] = useState<string>('')

  console.log(showInfo)

  return (
    <>
      <div className="max-w-sm">
        <section className={showHeader}>
          <HeaderWithCloseIcon />
        </section>
        <section>
          <div className={showInfo}>
            <ProfileInfo
              setShowInfo={setShowInfo}
              setShowHeader={setShowHeader}
              setShowProfile={setShowProfile}
              user={user}
            />
          </div>
        </section>
        <section className={showProfile}>
          <div className="flex ml-[8%] items-center">
            <div className="relative">
              <Image src={'/Ellipse 61.jpg'} width={100} height={100} alt="" />
              <div className="absolute top-[65.5%] left-[71.42%] clickable">
                <ProfileImage />
              </div>
            </div>

            <p className="ml-[5.38%] font-bold text-xl ">Min profil </p>
          </div>
          <div className="ml-[5.38%] mt-[5.15%]">
            <p
              className="text-base font-normal clickable"
              onClick={() => {
                setShowHeader('hidden')
                setShowProfile('hidden')
                setShowInfo('')
              }}
            >
              Mina uppgifter
            </p>
            <p
              className="mt-[5.38%] text-base font-normal clickable"
              onClick={() => {}}
            >
              Notiser
            </p>
            <p
              className="mt-[5.38%] text-base font-normal clickable"
              onClick={() => {
                router.push('#')
              }}
            >
              Avsluta konto
            </p>
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
