import Image from 'next/image'
import router from 'next/router'

export default function closeIcon() {
  return (
    <>
      <Image
        src={'/kryss_annons.svg'}
        height={25}
        width={25}
        alt={'Kryss'}
        onClick={() => router.back()}
      ></Image>
    </>
  )
}
