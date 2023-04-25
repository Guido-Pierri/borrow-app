import clientPromise from '@/lib/mongodb'
import Ads from '@/p-components/ads'
import { Ad } from '@/types/ads'
interface Props {
  ads: Ad[]
}
const Index = ({ ads }: Props) => {
  const myProps = { ads }
  return (
    <div className="bg-[ffffff]">
      <Ads ads={ads}></Ads>
    </div>
  )
}

export async function getServerSideProps() {
  try {
    const client = await clientPromise
    const db = client.db('borrow')

    const ads = await db.collection('ads').find({}).limit(1000).toArray()
    console.log(ads)

    return {
      props: { ads: JSON.parse(JSON.stringify(ads)) },
    }
  } catch (e) {
    console.error(e)
  }
}
export default Index
