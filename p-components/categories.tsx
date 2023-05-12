import Image from "next/image"
import { useState } from "react"

interface Props {} //add link and other functionalities when needed

const Categories = ({ setSelectedCategory }: any) => {
  const [clean, setClean] = useState(false)
  const [tools, setTools] = useState(false)
  const [bicykle, setBicykle] = useState(false)
  const [electronic, setElectronic] = useState(false)
  const [grill, setGrill] = useState(false)

  function reset(category: string) {
    switch (category) {
      case "clean":
        setTools(false)
        setBicykle(false)
        setElectronic(false)
        setGrill(false)
        break
      case "tools":
        setClean(false)
        setBicykle(false)
        setElectronic(false)
        setGrill(false)
        break
      case "bicykle":
        setTools(false)
        setClean(false)
        setElectronic(false)
        setGrill(false)
        break
      case "electronic":
        setClean(false)
        setTools(false)
        setBicykle(false)
        setGrill(false)
        break
      case "grill":
        setClean(false)
        setTools(false)
        setElectronic(false)
        setBicykle(false)
        break

      default:
        break
    }
  }

  return (
    <div className="bg-[#FFFFFF]">
      {/* <h1 className="font-sans text-black text-[14px] font-bold text-left pt-6 pl-8 ">
        Kategorier
      </h1> */}
      <div className=" overflow-x-scroll inline-block w-[90%] whitespace-nowrap scroll-smooth scrollbar-hide">
        <div className="flex flex-row py-4 pb-8 ">
          <div className="pr-5">
            <button
              style={{
                border: clean ? "3px solid #9EBB9D" : "",
                borderRadius: "50%",
                // paddingRight: "17px",
              }}
              onClick={() => {
                setSelectedCategory("Städ")
                setClean(!clean)
                reset("clean")
              }}
              // onClick={() => setSelectedCategory("Städ")}
            >
              <div className="pl-5 pt-2  border-[#9EBB9D] border-2 w-[74px] h-[76px] rounded-full flex justify-between">
                <Image
                  src={"/vaccum2.png"}
                  alt={"#"}
                  width={"25"}
                  height={"54"}
                  style={{ alignSelf: "center" }}
                ></Image>
              </div>
            </button>

            <p className="font-sans text-[14px] font-bold text-black pt-[4px] pr-[8px]">
              Städ
            </p>
          </div>
          <div className="pr-5">
            <button
              style={{
                border: tools ? "3px solid #9EBB9D" : "",
                borderRadius: "50%",
                // paddingRight: "17px",
              }}
              onClick={() => {
                setSelectedCategory("Verktyg")
                setTools(!tools)
                reset("tools")
              }}
              // onClick={() => setSelectedCategory("Verktyg")}
            >
              {/* <Link href={"/"}> */}
              <div className="pl-3 pt-5 border-2  border-[#9EBB9D] w-[74px] h-[76px] rounded-full ">
                <Image
                  src={"/pickaxe.svg"}
                  alt={"#"}
                  width={"47"}
                  height={"38"}
                  style={{
                    alignSelf: "center",
                  }}
                ></Image>
              </div>
              {/* </Link> */}
            </button>
            <p className=" font-sans text-[14px] font-bold text-black mt-[-3px] pr-[2px]">
              Verktyg
            </p>
          </div>
          <div className="pr-5">
            <button
              style={{
                border: bicykle ? "3px solid #9EBB9D" : "",
                borderRadius: "50%",
                // paddingRight: "17px",
              }}
              onClick={() => {
                setSelectedCategory("Cyklar")
                setBicykle(!bicykle)
                reset("bicykle")
              }}
              // onClick={() => setSelectedCategory("Cyklar")}
            >
              {/* <Link href={"/"}> */}
              <div className=" pl-2 pt-6 border-2 border-[#9EBB9D] w-[74px] h-[76px] rounded-full ">
                <Image
                  src={"/bike.svg"}
                  alt={"#"}
                  width={"54"}
                  height={"32"}
                  style={{ alignSelf: "center" }}
                ></Image>
              </div>
              {/* </Link> */}
            </button>
            <p className=" font-sans text-[14px] font-bold text-black mt-[-2px] pr-[4px]">
              Cyklar
            </p>
          </div>

          <div className="pr-5">
            <button
              style={{
                border: electronic ? "3px solid #9EBB9D" : "",
                borderRadius: "50%",
                // paddingRight: "17px",
              }}
              onClick={() => {
                setSelectedCategory("Elektronik")
                setElectronic(!electronic)
                reset("electronic")
              }}
              // onClick={() => setSelectedCategory("Elektronik")}
            >
              {/* <Link href={"/"}> */}
              <div className=" pl-2 pt-4 border-2 border-[#9EBB9D] w-[74px] h-[76px] rounded-full ">
                <Image
                  src={"/tv.svg"}
                  alt={"#"}
                  width={"47"}
                  height={"37"}
                  style={{ alignSelf: "center" }}
                ></Image>
              </div>
              {/* </Link> */}
            </button>
            <p className="font-sans text-[14px] font-bold text-black mt-[-3px] pr-[4px]">
              Elektronik
            </p>
          </div>
          <div className="pr-5">
            <button
              style={{
                border: grill ? "3px solid #9EBB9D" : "",
                borderRadius: "50%",
                // paddingRight: "17px",
              }}
              onClick={() => {
                setSelectedCategory("Grill")
                setGrill(!grill)
                reset("grill")
              }}
              // onClick={() => setSelectedCategory("Grill")}
            >
              {/* <Link href={"/"}> */}
              <div className="pl-3 border-2 border-[#9EBB9D] w-[74px] h-[76px] rounded-full flex justify-between">
                <Image
                  src={"/grill2.png"}
                  alt={"#"}
                  width={"37"}
                  height={"74"}
                  style={{ alignSelf: "center" }}
                ></Image>
              </div>
              {/* </Link> */}
            </button>
            <p className="font-sans text-[14px] font-bold text-black pt-[4px] pr-[4px]">
              Grill
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Categories
