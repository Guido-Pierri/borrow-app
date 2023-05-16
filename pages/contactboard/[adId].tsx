import ButtonCreateAd from "@/p-components/buttonCreateAd"
import Categories from "@/p-components/categories"
import Header from "@/p-components/header"
import { NextPage } from "next"
import Link from "next/link"

import { GoSearch } from "react-icons/go"
import { MongoClient, Db } from "mongodb"
import clientPromise from "@/lib/mongodb"
import { BoardAd } from "@/types/boardAd"

import Image from "next/image"

import router, { useRouter } from "next/router"

interface Props {
  boardAds: BoardAd[]
}

function navigateBack() {
  router.back()
}

const contactBoard = ({ boardAds }: Props) => {
  //   const [query, setQuery] = useState("")
  //   const [selectedCategory, setSelectedCategory] = useState("")
  // const router = useRouter()
  // const { adId } = router.query

  //   boardAds.filter((boardAd) => boardAd)
  //   ;('console.log("selectedCategory:", selectedCategory)')

  //   return (
  return (
    <div>
      <section className="pb-40">
        <div className="flex flex-col">
          {boardAds.map((boardAd) => (
            <div key={boardAd.id} className="">
              <div className="bg-[#FFFFFF] text-center max-w-sm h-screen">
                <Header></Header>

                <div className="mt-6 rounded-md border-[#9EBB9D] border-2 text-left flex-column font-sans px-5 pb-20 shadow-md">
                  <div className="flex justify-end mt-5 mb-5">
                    {/* <Link href={}> */}
                    <Image
                      src={"/kryss_annons.svg"}
                      height={25}
                      width={25}
                      alt={"Kryss"}
                      onClick={() => {
                        navigateBack()
                      }}
                      className="clickable"
                    ></Image>
                    {/* </Link> */}
                  </div>
                  {/* <div className="flex justify-center">
                    <Image
                      src={boardAd.image}
                      alt={"#"}
                      width={250}
                      height={250}
                      className="aspect-auto w-full rounded-[4px]"
                    ></Image>
                  </div> */}
                  <p className="bold text-[#0f0e0e] mt-2 text-[20px] font-bold py-4">
                    <b>{boardAd.title}</b>
                  </p>
                  <p className="text-[#0f0e0e] mt-2 text-[14px] font-semibold">
                    Beskrivning
                  </p>
                  <p className="font-normal text-[14px]">
                    {boardAd.description}
                  </p>
                  <div className=" py-4">
                    {boardAd.publisherProfileImage ? (
                      <Image
                        // onClick={() => navigateToAd(ad.id)}
                        className="  rounded-full aspect-square object-cover border-[3px] border-[#9EBB9D] w-[25%]"
                        alt={"profile"}
                        src={boardAd.publisherProfileImage}
                        width={"84"}
                        height={"84"}
                      />
                    ) : (
                      <Image
                        className=" mr-[3.5%] mt-[4%] rounded-full"
                        src="/profile.svg"
                        width={"84"}
                        height={"84"}
                        alt=""
                      />
                    )}
                  </div>
                  <div className="w-full text-[#0f0e0e] mt-8  flex justify-center">
                    <button className="w-full bg-[#9EBB9D] font-normal text-base  h-[40px] rounded-sm">
                      <div className="flex row justify-center">
                        <Image
                          src={"/mail.svg"}
                          height={20}
                          width={20}
                          alt={"Kryss"}
                          className="mr-[15px]"
                        ></Image>
                        <Link href={"mailto:" + `${boardAd.email}`}>
                          Skicka meddelande
                        </Link>
                      </div>
                    </button>
                    {/* <Link href={'mailto:' + `${ads.email}`}>{ads.email}</Link> */}
                  </div>
                </div>
              </div>
              {/* <div className="flex items-center">
                <Image
                  // onClick={() => navigateToAd(ad.id)}
                  className="ml-[7%] mr-[3.5%] mt-[4%]"
                  alt={boardAd.description}
                  src={"/Profil.svg"}
                  width={"75"}
                  height={"98"}
                />
                <div>
                  <p className="text-sm font-semibold mr-[7%]">
                    {boardAd.title}
                  </p>
                  <p className="text-sm font-normal mr-[7%] ">
                    {boardAd.description}
                  </p>
                  <button className="w-full bg-[#9EBB9D] font-normal text-base  h-[40px] rounded-sm">
                    <div className="flex row justify-center">
                      <Image
                        src={"/mail.svg"}
                        height={20}
                        width={20}
                        alt={"Kryss"}
                        className="mr-[15px]"
                      ></Image>
                      <Link href={"mailto:" + `${boardAd.email}`}>
                        Skicka meddelande
                      </Link>
                    </div>
                  </button>
                </div>
              </div> */}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
export async function getServerSideProps(context: any) {
  try {
    const { adId } = context.query
    //  '   console.log("userid: " + userId)'

    const client = await clientPromise
    const db = client.db("borrow")

    const boardAd = await db.collection("board").findOne({ id: adId })

    return {
      props: { boardAds: [JSON.parse(JSON.stringify(boardAd))] },
    }
  } catch (e) {
    console.error(e)
  }
}

export default contactBoard
