import { log } from 'console'
import Image from 'next/image'
import router from 'next/router'

export default function CloseIconStatic() {
  return (
    <>
      <Image
        className={'clickable'}
        src={'/kryss_annons.svg'}
        height={25}
        width={25}
        alt={'Kryss'}
      ></Image>
    </>
  )
}
