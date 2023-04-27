import Link from "next/link"
import Header from "@/p-components/header"
import { GoSearch } from "react-icons/go"
import { Ad } from "@/types/ads"
import { CldImage } from "next-cloudinary"
import Image from "next/image"
import { Suspense } from "react"
import Categories from "@/p-components/categories"
import clientPromise from "@/lib/mongodb"
import { useRouter } from "next/router"
import { ObjectId } from "mongodb"

interface AdId {
  id: string
}

interface Props {
  ads: Ad[]
}
const Ads = ({ ads }: Props) => {
  const router = useRouter()

  const { userId } = router.query
  console.log(userId)

  const navigateToCreateAd = () => {
    router.push(`/createAd/${userId}`)
  }

  function navigateToAd(id: string) {
    window.location.href = `/ads/view/${id}`
  }
  const handleClick = async () => {
    console.log("insede handleClick")
    console.log(`${userId}`)

    const response = await fetch(`/api/user/${userId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(`${userId}`),
    })

    const dataResponse = await response.json()

    console.log("dataResponse", dataResponse)
    if (dataResponse) {
    }
  }

  return (
    <div className="bg-[#ffffff] text-center max-w-sm h-screen ">
      <Header></Header>
      <form>
        <label className="relative">
          <input
            className="bg-[#E6E6E6] font-sans placeholder-black px-6 py-2 rounded-sm w-80"
            type="text"
            placeholder="Sök..."
          />
          <div className="absolute inset-y-0 right-0 flex items-center px-2 text-black">
            <GoSearch />
          </div>
        </label>
      </form>

      <Categories></Categories>

      <style jsx>{`
        input[type="text"] {
          background-repeat: no-repeat;
          background-size: 16px 16px;
          background-position: 8px 50%;
        }
      `}</style>

      <section className="flex justify-around mt-5 ">
        <button className="rounded-t-md -md mt-4 font-sans font-semibold   px-4 py-1  text-black">
          Låna
        </button>
        <button
          onClick={() => {
            handleClick()
          }}
          className="rounded-t-md -md mt-4 font-sans font-semibold px-4 py-1 bg-[#46649D] text-white"
        >
          Mina annonser
        </button>
        <button className="rounded-t-md -md mt-4 font-sans font-semibold   px-4 py-1  text-black">
          Tavlan
        </button>
      </section>

      <div className="bg-[#46649D] h-2"></div>
      <div className="flex justify-center mt-5 ">
        <button
          className="flex justify-center p-2 text-gray-900 bg-[#9EBB9D] w-[350px] rounded-sm text-xl font-[500] font-sans"
          onClick={navigateToCreateAd}
        >
          <p className="text-black"> Skapa annons</p>
        </button>
      </div>

      <section>
        <div className=" font-sans text-left grid grid-cols-2 gap-y-2 gap-x-4 p-4">
          {ads.map((ad) => (
            <div key={ad.id} className="">
              <Image
                onClick={() => navigateToAd(ad.id)}
                className="mt-4  w-full aspect-square"
                alt={ad.description}
                src={ad.image}
                width={"1000"}
                height={"0"}
              />

              {/* <div className=" mt-2">
                        <div className="">
                          <button
                            className="underline rounded-sm bg- mb-1  text-black"
                            value={ad._id}
                            type="submit"
                            onClick={() => updateAd(ad.id)}
                          >
                            Redigera
                          </button>
                        </div>

                        {/* <div className="">
                          <button
                            className="bg-[#9EBB9D] rounded-sm border-2 mb-1 mx-1 px-2 text-black"
                            value={ad._id}
                            type="submit"
                            onClick={() => deleteAd(ad.id)}
                          >
                            Ta bort
                          </button>
                        </div> 
                      </div> */}
              <div>
                <p
                  className="bold text-[#0f0e0e] mt-1 link "
                  onClick={() => navigateToAd(ad.id)}
                >
                  {ad.title}
                </p>
                {/* <p
                          className="text-[#0f0e0e]"
                          onClick={() => navigateToAd(ad.id)}
                        >
                          Beskrivning: {ad.description}
                        </p> */}
              </div>
            </div>
          ))}
        </div>
      </section>
      <style jsx>{`
        .link {
          cursor: pointer;
        }
      `}</style>
    </div>
  )
}
export async function getServerSideProps(context: any) {
  try {
    const { userId } = context.query
    const client = await clientPromise
    const db = client.db("borrow")

    const ads = await db
      .collection("ads")
      .find({ publisher: userId })
      .limit(1000)
      .toArray()
    // console.log(ads1)

    // const ads2 = await db.collection("ads").find({
    //   publisher: new ObjectId(ads.id),
    // })

    return {
      props: { ads: JSON.parse(JSON.stringify(ads)) },
    }
  } catch (e) {
    console.error(e)
  }
}
export default Ads
