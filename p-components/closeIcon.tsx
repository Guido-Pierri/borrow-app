import Image from 'next/image'
import router from 'next/router'

const CloseIcon = () => {
  return (
    <div>
      <Image
        src={'/kryss_annons.svg'}
        height={25}
        width={25}
        alt={'Kryss'}
        onClick={() => router.back()}
      ></Image>
    </div>
  )
}

export default CloseIcon
