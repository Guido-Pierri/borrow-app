import { Ad } from '@/types/ads'
import { useRouter } from 'next/router'
interface Props {
  ads: Ad
}
export default function Ads({ ads }: Props) {
  const router = useRouter()
  const { userId } = router.query
}
