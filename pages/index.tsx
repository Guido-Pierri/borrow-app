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
    }, 50000)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className="bg-[#F5F5F5] max-w-sm">
      <div className="max-w-sm ">
        <Wave
          fill="#46649D"
          paused={true}
          options={{
            height: 1,
            amplitude: 50,
            points: 3,
          }}
          style={{ transform: "rotate(180deg)" }}
        />

        <div className="max-w-sm h-screen flex items-center">
          <div className=" flex-column justify-items-center pl-16">
            <h1 className="text-[#C7784C] text-7xl ">Borrow</h1>

            <section className="font-sans py-2 mt-2 pl-4 font-medium text-lg text-black">
              Låna och låna ut inom din <br />
              bostandsförening!
            </section>
          </div>
        </div>
      </div>
      <div>
        <Wave
          fill="#9EBB9D"
          paused={true}
          options={{
            height: 1,
            amplitude: 50,
            points: 3,
          }}
        />
      </div>
    </div>
  )
}

export default Index
