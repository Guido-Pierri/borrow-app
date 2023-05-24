import Image from 'next/image'
export default function ImagePencil() {
  return (
    <>
      <Image
        src={'/pencilImage.svg'}
        alt={'pencil icon'}
        width={83}
        height={83}
      />
    </>
  )
}
