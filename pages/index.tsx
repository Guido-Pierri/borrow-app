import { useEffect } from "react"
import { useRouter } from "next/router"
import Header from "@/p-components/header"
import { NextPage } from "next"

interface Props {}

const Index: NextPage<Props> = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.location.href = "/login"
    }, 2300)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className="bg-[#FFFFFF] max-w-sm ">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#46649D"
          fill-opacity="1"
          d="M0,288L34.3,245.3C68.6,203,137,117,206,122.7C274.3,128,343,224,411,245.3C480,267,549,213,617,208C685.7,203,754,245,823,266.7C891.4,288,960,288,1029,261.3C1097.1,235,1166,181,1234,149.3C1302.9,117,1371,107,1406,101.3L1440,96L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
        ></path>
      </svg>

      <span className="max-w-sm flex items-center h-screen mt-[-145px]">
        <div className=" mt-32 flex-column justify-items-center pl-10 ">
          <h1 className="text-[#C7784C] text-[84px]">Borrow</h1>

          <section className="font-sans pl-2 font-bold mb-6 text-[22.2px] text-black">
            Låna och låna ut inom din <br />
            <span className="ml-10">bostandsförening!</span>
          </section>
        </div>
      </span>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#9EBB9D"
          fill-opacity="1"
          d="M0,192L40,197.3C80,203,160,213,240,186.7C320,160,400,96,480,74.7C560,53,640,75,720,85.3C800,96,880,96,960,96C1040,96,1120,96,1200,133.3C1280,171,1360,245,1400,282.7L1440,320L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
    </div>
  )
}

export default Index

// import { useEffect } from "react"
// import { useRouter } from "next/router"
// import Header from "@/p-components/header"
// import { NextPage } from "next"
// import Wave from "react-wavify"

// interface Props {}

// const Index: NextPage<Props> = () => {
//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       window.location.href = "/login"
//     }, 2000)

//     return () => clearTimeout(timeout)
//   }, [])

//   return (
//     <div className="bg-[#FFFFFF] max-w-sm ">
//       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
//         <path
//           fill="#46649D"
//           fill-opacity="1"
//           d="M0,288L34.3,245.3C68.6,203,137,117,206,122.7C274.3,128,343,224,411,245.3C480,267,549,213,617,208C685.7,203,754,245,823,266.7C891.4,288,960,288,1029,261.3C1097.1,235,1166,181,1234,149.3C1302.9,117,1371,107,1406,101.3L1440,96L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
//         ></path>
//       </svg>

//       <span className="max-w-sm flex items-center h-screen mt-[-145px]">
//         <div className=" mt-32 flex-column justify-items-center pl-10 ">
//           <h1 className="text-[#C7784C] text-[84px]">Borrow</h1>

//           <section className="font-sans pl-2 font-bold mb-6 text-[22.2px] text-black">
//             Låna och låna ut inom din <br />
//             <span className="ml-10">bostandsförening!</span>
//           </section>
//         </div>
//       </span>

//       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
//         <path
//           fill="#9EBB9D"
//           fill-opacity="1"
//           d="M0,192L40,197.3C80,203,160,213,240,186.7C320,160,400,96,480,74.7C560,53,640,75,720,85.3C800,96,880,96,960,96C1040,96,1120,96,1200,133.3C1280,171,1360,245,1400,282.7L1440,320L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
//         ></path>
//       </svg>
//     </div>
//   )
// }

// export default Index
