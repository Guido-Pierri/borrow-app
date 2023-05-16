import Image from "next/image"

interface Props {}

const IconAdsEmpty = ({}) => {
  return (
    <div className="py-16">
      <div className="flex justify-center">
        <Image
          src={"/womanIcon.svg"}
          alt={"#"}
          width={"194"}
          height={"194"}
          style={{ alignSelf: "center" }}
        ></Image>
      </div>
      <h1 className="text-[20px] font-bold ">Hoppsan, här var det tomt!</h1>
      <p className="text-[20px] leading-6">
        Klicka på plusset för att skapa en <br /> annons
      </p>
    </div>
  )
}

export default IconAdsEmpty
