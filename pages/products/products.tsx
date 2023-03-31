import Products from "@/p-components/products"
import Header from "@/p-components/header2"
import { NextPage } from "next"

interface Props {}

const TestProps: NextPage<Props> = ({}) => {
  return (
    <div className="bg-[#F3F0EC] max-w-sm">
      <section>
        <Header></Header>
      </section>
      {/*<section className="p-8 grid grid-cols-2 place-content-center  bg-[#DBE3DF]">
        <article className="p-4">
          <Product
            name={"Flower 1"}
            description={"A flower"}
            pictureSrc={"/flower.jpg"}
            price={25}
            isSoldOut={true}
          ></Product>
        </article>
        <article className="p-4">
          <Product
            name={"Bicycle"}
            pictureSrc={"/bicycle.jpg"}
            description={"Itsa bike"}
            price={25}
            isSoldOut={false}
          ></Product>
        </article>
        <article className="p-4">
          <Product
            name={"Cat"}
            description={"Sad cat is sad"}
            pictureSrc={"/cat.jpg"}
            price={25}
            isSoldOut={false}
          ></Product>
        </article>
        <article className="p-4">
          <Product
            name={"Screw Driver"}
            description={"To rent"}
            pictureSrc={"/screwdriver.jpg"}
            price={25}
            isSoldOut={true}
          ></Product>
        </article>
      </section> */}

      <section>
        <Products></Products>
      </section>
    </div>
  )
}

export default TestProps
