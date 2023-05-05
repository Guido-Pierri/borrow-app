import HeaderWithCloseIcon from '@/p-components/headerWithCloseIcon'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { GetServerSideProps } from 'next'
import clientPromise from '@/lib/mongodb'
import { User } from '@/types/user'

interface Props {
  user: User
}
export default function MyProfile({ user }: Props) {
  const router = useRouter()
  const { userId } = router.query
  console.log(user.firstName)

  return (
    <>
      <div className="max-w-sm">
        <HeaderWithCloseIcon />
        <div className="flex ml-[8%] items-center">
          <Image src={'/Ellipse 61.jpg'} width={100} height={100} alt="" />
          <p className="ml-[5.38%] font-bold text-xl">Min profil </p>
        </div>
        <div className="ml-[5.38%] mt-[5.15%]">
          <p className="text-base font-normal">Mina uppgifter</p>
          <p className="mt-[5.38%] text-base font-normal">Notiser</p>
          <p className="mt-[5.38%] text-base font-normal">Avsluta konto</p>
        </div>
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
