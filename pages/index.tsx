// import Products from "@/p-components/products";
// import Header from "@/p-components/header";
// import { NextPage } from "next";
// import Link from "next/link";
// interface Props {}

// const Index: NextPage<Props> = ({}) => {
//   return (
//     <div className="bg-[#F5F5F5] max-w-sm h-screen">
//       <Header></Header>

//       <section className="flex flex-column justify-center font-sans">
//         <Link href={"/login"}>
//           <h1 className="pt-10 text-gray-900">Welcome to BORROW!</h1>
//         </Link>
//       </section>
//     </div>
//   );
// };

// export default Index;
import { NextPage } from "next";
import Link from "next/link";

interface Props {}

const Index: NextPage<Props> = ({}) => {
  return (
    <div className="">
      <div className="">
        <h1 className=" text-amber-600 w-72 h-20 text-7xl place-self-center font-minFont">
          Borrow
        </h1>
        <p>Låna och låna ut inom din bostadsförening!</p>
        <Link href={"/login"}>
          <button>Kom igång!</button>
        </Link>
      </div>
    </div>
  );
};

export default Index;
