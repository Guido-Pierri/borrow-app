import CreateAd from "@/p-components/createAd"
import Header from "@/p-components/header"
import { NextPage } from "next"
interface Props {}

const Index: NextPage<Props> = ({}) => {
  return (
    <div className="bg-[#FFFFFF] max-w-sm">
      <Header></Header>
      <CreateAd></CreateAd>
    </div>
  )
}

export default Index
