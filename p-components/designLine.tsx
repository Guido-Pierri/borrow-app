import Image from "next/image"

interface Props {}

const DesignLine = ({ style }: any) => {
  return (
    <div>
      <div className="flex justify-center mt-2 h-4 w-96 pr-12">
        <Image src={"/Line.svg"} alt={"#"} width={"347"} height={"280"}></Image>
      </div>
    </div>
  )
}

export default DesignLine
