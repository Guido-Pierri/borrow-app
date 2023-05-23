import { NextPage } from 'next'
import LogIn from '@/p-components/logIn'
import HeaderProfile from '@/p-components/HeaderProfile'
import { GetServerSideProps } from 'next'
import { useState } from 'react'
import MyContextProvider from '@/contexts/my-context-provider'

interface Props {}

const Index: NextPage<Props> = ({}) => {
  const [_id, set_id] = useState<string>('')
  return (
    <div className="max-w-sm">
      <HeaderProfile userId={''} anotherUserId={0} />
      <LogIn></LogIn>
    </div>
  )
}

export default Index
