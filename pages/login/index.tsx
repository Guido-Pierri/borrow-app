import { NextPage } from 'next'
import LogIn from '@/p-components/logIn'
import HeaderProfile from '@/p-components/HeaderProfile'
interface Props {}

const Index: NextPage<Props> = ({}) => {
  return (
    <div className="max-w-sm">
      <HeaderProfile userId={''} anotherUserId={0} />
      <LogIn></LogIn>
    </div>
  )
}

export default Index
