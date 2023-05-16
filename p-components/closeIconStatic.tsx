import Image from "next/image"

export default function CloseIconStatic({
  setShowInfo,
  setShowHeader,
  setShowProfile,
}: any) {
  return (
    <>
      <Image
        className={"clickable"}
        src={"/kryss_annons.svg"}
        height={25}
        width={25}
        alt={"Kryss"}
        onClick={() => {
          setShowInfo("hidden")
          setShowHeader("")
          setShowProfile("")
        }}
      ></Image>
    </>
  )
}
