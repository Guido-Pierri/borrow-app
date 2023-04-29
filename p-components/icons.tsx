import { NextPage } from "next"
import Image from "next/image"
import Link from "next/link"

interface Props {} //add link and other functionalities when needed

const Icons = ({}) => {
  return (
    <div className="bg-[#FFFFFF]">
      <p className="mb-[-32px] ml-5 text-left text-black">Bilder</p>
      <div className="flex flex-row py-8 pb-8 justify-evenly">
        <button
          style={{ borderStyle: "dashed" }}
          className="border border-[#9EBB9D] w-[90px] h-[80px]"
        >
          <div className="flex justify-center">
            <Image
              src={"/trachcan.svg"}
              alt={"#"}
              width={"24"}
              height={"28"}
              style={{ alignSelf: "center" }}
            ></Image>
          </div>
        </button>
        <button
          style={{ borderStyle: "dashed" }}
          className="border border-[#9EBB9D] w-[90px] h-[80px]"
        >
          <div className="flex justify-center">
            <Image
              src={"/trachcan.svg"}
              alt={"#"}
              width={"24"}
              height={"28"}
              style={{ alignSelf: "center" }}
            ></Image>
          </div>
        </button>
        <button
          style={{ borderStyle: "dashed" }}
          className="border border-[#9EBB9D] w-[90px] h-[80px]"
        >
          <div className="flex justify-center">
            <Image
              src={"/image.svg"}
              alt={"#"}
              width={"34"}
              height={"34"}
              style={{ alignSelf: "center" }}
            ></Image>
          </div>
        </button>
      </div>
    </div>
  )
}

export default Icons
