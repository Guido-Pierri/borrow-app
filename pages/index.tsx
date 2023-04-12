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
    <div className=" bg-[#F5F5F5] max-w-sm h-screen">
      <div className="Wave1">
        <div className="custom-shape-divider-top-1681296353">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
      <h1 className=" text-amber-600 text-7xl place-self-center font-minFont">
        Borrow
      </h1>
      <p>Låna och låna ut inom din bostadsförening!</p>
      <Link href={"/login"}>
        <button>Kom igång!</button>
      </Link>
    </div>
  );
};

export default Index;
