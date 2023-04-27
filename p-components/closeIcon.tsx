import { NextPage } from "next"
import Image from "next/image"
import Link from "next/link"
import { Props } from "next/script"

const CloseIcon = ({ adress }: any) => {
  return (
    <div>
      <Link href={`/${adress}`}>
        <Image
          src={"/kryss_annons.svg"}
          height={25}
          width={25}
          alt={"Kryss"}
        ></Image>
      </Link>
    </div>
  )
}

export default CloseIcon
