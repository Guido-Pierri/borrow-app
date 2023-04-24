import CreateAd from '@/p-components/createAd'
import Header from '@/p-components/header'
import { NextPage } from 'next'
interface Props {}

const Index: NextPage<Props> = ({}) => {
  return (
    <div className="bg-[#F5F5F5] max-w-sm">
      <Header></Header>
      <CreateAd></CreateAd>
    </div>
  )
}

export default Index
