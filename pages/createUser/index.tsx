import CreateUser from "@/p-components/createUser"
import Header from "@/p-components/header"
import { NextPage } from "next"
interface Props {}

const Index: NextPage<Props> = ({}) => {
  return (
    <div className="bg-[#F5F5F5] max-w-sm">
      <Header></Header>
      <CreateUser></CreateUser>
    </div>
  )
}

export default Index
