import type { AppProps } from 'next/app'
import Image from 'next/image'
export default function MyApp({ imgSrc }: any) {
  return <Image src={imgSrc} alt={''} />
}
