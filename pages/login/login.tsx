import { NextPage } from "next"
import LogIn from "@/p-components/logIn"
import Header from "@/p-components/header2"
interface Props {}

const LoginPage: NextPage<Props> = ({}) => {
  return (
    <div className="max-w-sm">
      <Header></Header>
      <LogIn></LogIn>
    </div>
  )
}

export default LoginPage
