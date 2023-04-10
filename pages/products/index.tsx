import Products from "@/p-components/products"
import Header from "@/p-components/header"
import { NextPage } from "next"
import Link from "next/link"

interface Props {}

const Index: NextPage<Props> = ({}) => {
  return (
    <div className="bg-[#F5F5F5] max-w-sm">
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

      <section className="bg-[#F5F5F5] pb-10">
        <h1 className="flex justify-center text-xl font-[500] font-sans">
          Borrow something
        </h1>
        <Products></Products>
        <div className="flex justify-center ">
          <Link href={"/createAd"}>
            <button className="flex items-top justify-center p-2 text-gray-900 bg-[#9EBB9D] rounded text-xl font-[500] font-sans">
              <p className=""> Skapa en annons</p>
            </button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Index
