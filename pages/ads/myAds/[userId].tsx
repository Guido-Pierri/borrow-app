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
import DesignLine from "@/p-components/designLine"
import ButtonCreateAd from "@/p-components/buttonCreateAd"
import hashning from "@/lib/functions/hashning"
import IconAdsEmpty from "@/p-components/iconAdsEmpty"

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
    router.push(`/ads/viewMyAds/${id}`)
  }
  function navigateToAllAds(id: string) {
    window.location.href = `/ads/${id}`
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
  // async function updateAd(id: string) {
  //   window.location.href = `/updateAd/${id}`
  //   console.log("updateAd")
  // }

  return (
    <div className="bg-[#ffffff] text-center max-w-sm h-screen ">
      <Header userId={userId} anotherUserId={userId}></Header>
      <form>
        <label className="relative">
          <input
            className="bg-[#E6E6E6] font-sans outline-[#9EBB9D] placeholder-black px-6 py-2 rounded-sm w-80"
            type="text"
            placeholder="Sök..."
          />
          <div className="absolute inset-y-0  right-0 flex items-center px-2 text-black">
            <GoSearch />
          </div>
        </label>
      </form>

      {/* <Categories></Categories> */}

      <style jsx>{`
        input[type="text"] {
          background-repeat: no-repeat;
          background-size: 16px 16px;
          background-position: 8px 50%;
        }
      `}</style>

      <section className="flex justify-around mt-5 ">
        <button
          className="rounded-t-md -md mt-4 font-sans font-semibold   px-4 py-1  text-black "
          onClick={() => {
            navigateToAllAds(`${userId}`)
          }}
        >
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
        <Link href={"/board/" + `${userId}`}>
          <button className="rounded-t-md -md mt-4 font-sans font-semibold   px-4 py-1  text-black">
            Tavlan
          </button>
        </Link>
      </section>

      <div className="bg-[#46649D] h-2"></div>
      {/* <Categories></Categories> */}
      <div onClick={navigateToCreateAd}>
        <ButtonCreateAd userId={userId}></ButtonCreateAd>
        {/* <button
          className="flex justify-center p-2 text-gray-900 bg-[#9EBB9D] w-[350px] rounded-sm text-xl font-[500] font-sans"
          onClick={navigateToCreateAd}
        >
          <p className="text-black"> Skapa annons</p>
        </button> */}
      </div>

      {ads.length === 0 ? <IconAdsEmpty></IconAdsEmpty> : ""}

      <section>
        <div className=" font-sans text-left  mt-8">
          {ads.map((ad) => (
            <div
              key={ad.id}
              onClick={() => navigateToAd(ad.id)}
              className=" grid grid-cols-3 under"
            >
              <div className="pl-6">
                <Image
                  // onClick={() => navigateToAd(ad.id)}
                  className="w-full rounded-md"
                  alt={ad.description}
                  src={ad.image}
                  width={"100"}
                  height={"100"}
                />
                <DesignLine></DesignLine>
                {/* 
                <div className=" mt-2">
                        

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
              </div>
              <div className=" bold text-[#0f0e0e] mt-1 ml-2 link justify-between">
                <p className="" onClick={() => navigateToAd(ad.id)}>
                  {ad.title}
                </p>
                <p>{ad.description}</p>
                {/* <p
                          className="text-[#0f0e0e]"
                          onClick={() => navigateToAd(ad.id)}
                        >
                          Beskrivning: {ad.description}
                        </p> */}
              </div>
              {/* <div className="text-right pr-4">
                <button
                  className="underline rounded-sm bg- mb-1  text-black "
                  value={ad._id}
                  type="submit"
                  onClick={() => updateAd(ad.id)}
                >
                  Redigera
                </button>
              </div> */}
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
      .sort({ _id: -1 })
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
