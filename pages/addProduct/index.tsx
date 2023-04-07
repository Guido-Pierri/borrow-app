import AddProduct from "@/p-components/addProduct"
import Header from "@/p-components/header"
import { NextPage } from "next"
interface Props {}

const Index: NextPage<Props> = ({}) => {
  return (
    <div className="bg-[#F5F5F5] max-w-sm">
      <Header></Header>
      <AddProduct></AddProduct>
    </div>
  )
}

export default Index
