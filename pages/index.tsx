import Products from "@/p-components/products"
import Header from "@/p-components/header"
import { NextPage } from "next"
import Link from "next/link"
interface Props {}

const Index: NextPage<Props> = ({}) => {
  return (
    <div className="bg-[#F3F0EC] max-w-sm">
      <Header></Header>

      <section>
        <h1>Wellcome to BORROW!</h1>
        <Link>
          <h2>LOGIN</h2>
        </Link>
        <h2>LOGIN</h2>
      </section>
    </div>
  )
}

export default Index
