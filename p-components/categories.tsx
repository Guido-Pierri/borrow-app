import { NextPage } from "next"
import Image from "next/image"

interface Props {} //add link and other functionalities when needed

const Categories = ({}) => {
  return (
    <div className="bg-[#FFFFFF]">
      <h1 className="font-sans text-black text-[14px] font-bold text-left pt-6 pl-4">
        Kategorier
      </h1>
      <div className="flex flex-row justify-around pt-8 ">
        <div>
          <div className="pl-6 pt-2  border-[#9EBB9D] border-2 w-[74px] rounded-full">
            <Image
              src={"/verticalVacuumCleaner.svg"}
              alt={"#"}
              width={"20"}
              height={"45"}
            ></Image>
          </div>
          <p className="font-sans text-[14px] font-bold text-black pt-[8px]">
            Städ
          </p>
        </div>
        <div>
          <div className="pl-2 pt-8 border-2 border-[#9EBB9D] w-[74px] h-[76px] rounded-full ">
            <Image
              src={"/pickaxe.svg"}
              alt={"#"}
              width={"47"}
              height={"38"}
              style={{ display: "inline-block" }}
            ></Image>
          </div>
          <p className=" font-sans text-[14px] font-bold text-black pt-[12px]">
            Verktyg
          </p>
        </div>
        <div>
          <div className=" pl-2 pt-8 border-2 border-[#9EBB9D] w-[74px] h-[76px] rounded-full">
            <Image
              src={"/bike.svg"}
              alt={"#"}
              width={"60"}
              height={"32"}
              style={{ display: "inline-block" }}
            ></Image>
          </div>
          <p className=" font-sans text-[14px] font-bold text-black pt-[13px]">
            Cyklar
          </p>
        </div>

        <div>
          <div className=" pl-2 pt-8 border-2 border-[#9EBB9D] w-[74px] rounded-full">
            <Image
              src={"/tv.svg"}
              alt={"#"}
              width={"42"}
              height={"37"}
              style={{ display: "inline-block" }}
            ></Image>
          </div>
          <p className="font-sans text-[14px] font-bold text-black pt-[14px]">
            Elektronik
          </p>
        </div>
        <div>
          <div className="pl-4 border-2 border-[#9EBB9D] w-[74px] rounded-full">
            <Image
              src={"/grill.svg"}
              alt={"#"}
              width={"27"}
              height={"60"}
            ></Image>
          </div>
          <p className="font-sans text-[14px] font-bold text-black pt-[16px]">
            Grill
          </p>
        </div>
      </div>
    </div>
  )
}

export default Categories
