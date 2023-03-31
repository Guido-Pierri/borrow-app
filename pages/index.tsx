import Products from "@/p-components/products"
import Header from "@/p-components/header2"
import { NextPage } from "next"

interface Props {}

const Index: NextPage<Props> = ({}) => {
  return (
    <div className="bg-[#F3F0EC] max-w-sm">
      <Header></Header>

      <section>
        <h1>Wellcome to BORROW!</h1>
      </section>
    </div>
  )
}

export default Index
