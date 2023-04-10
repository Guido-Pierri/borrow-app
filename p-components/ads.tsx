import clientPromise from "@/lib/mongodb"
import { ObjectId } from "mongodb"

interface Ad {
  name: string
  description: string
}
interface Props {
  ads: Ad[]
}
export default function Ads({ ads }: Props) {
  return (
    <div className="bg-[#F5F5F5] text-center ">
      {/* <h1 className="font-sans">Annonser</h1>

      <ul>
        {ads.map((ad: any) => (
          <li>
            <h2>Namn: {ad.name}</h2>
            <h3>Beskrivning: {ad.description}</h3>
          </li>
        ))}
      </ul> */}
      <p className="font-sans text-4xl ">Annonser</p>
      <div className=" font-sans">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only text-gray-900">Products</h2>

          <div className="flex-column">
            {ads.map((ad) => (
              <a className="group">
                <div className="grid grid-cols-2 py-4 ">
                  <h3 className="mt-4 px-4 text-sm text-gray-700 bg-slate-400">
                    {ad.name}
                    <br />
                    {ad.description}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  try {
    const client = await clientPromise
    const db = client.db("borrow")

    const ads = await db.collection("ads").find({}).toArray()

    return {
      props: { ads: JSON.parse(JSON.stringify(ads)) },
    }
  } catch (e) {
    console.error(e)
  }
}
