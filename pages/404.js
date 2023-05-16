import IconCrossReturn from '@/p-components/iconCrossReturn'
import Image404 from '@/p-components/image404'
import { useRouter } from 'next/router'
export default function Custom404() {
  const router = useRouter()
  return (
    <>
      <div
        className="absolute top-[4.5%] right-[8.2%] clickable"
        onClick={() => router.back()}
      >
        <IconCrossReturn />
      </div>
      <div className="ml-[16.5%] mt-[34.2%]">
        <Image404 />
      </div>
    </>
  )
}
