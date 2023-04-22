import { useEffect } from "react"
import { useRouter } from "next/router"
import Header from "@/p-components/header"
import { NextPage } from "next"
import Wave from "react-wavify"

interface Props {}

const Index: NextPage<Props> = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.location.href = "/login"
    }, 2000)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className="bg-[#FFFFFF] max-w-sm ">
      <Wave
        fill="#46649D"
        paused={true}
        options={{
          height: -10,
          amplitude: 200,
          points: 2,
        }}
        style={{ transform: "rotate(180deg)", position: "relative" }}
      />

      <span className="max-w-sm flex items-center h-screen mt-[-162px] mb-[-162px]">
        <div className=" flex-column justify-items-center pl-12 ">
          <h1 className="text-[#C7784C] text-[84px]">Borrow</h1>

          <section className="font-sans pl-2 font-bold mb-6 text-[22.2px] text-black">
            Låna och låna ut inom din <br />
            <span className="ml-10">bostandsförening!</span>
          </section>
        </div>
      </span>

      <Wave
        className=""
        fill="#9EBB9D"
        paused={true}
        options={{
          height: -10,
          amplitude: 200,
          points: 2,
        }}
        style={{ position: "relative" }}
      />
    </div>
  )
}

export default Index
