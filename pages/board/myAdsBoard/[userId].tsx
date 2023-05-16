import ButtonCreateAd from "@/p-components/buttonCreateAd"
import Header from "@/p-components/header"
import Link from "next/link"
import { useRouter } from "next/router"
import clientPromise from "@/lib/mongodb"
import { BoardAd } from "@/types/boardAd"
import { useState } from "react"
import SearchBar from "@/p-components/searchBar"
import Image from "next/image"

interface Props {
  boardAds: BoardAd[]
}

const Board = ({ boardAds }: Props) => {
  const [query, setQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")
  const router = useRouter()
  const { userId } = router.query

  const filteredBoardAds = boardAds.filter(
    (boardAd) => boardAd.userId === userId
  )

  console.log("selectedCategory:", selectedCategory)

  return (
    <>
      <div className="mb-4">
        <Header userId={userId} anotherUserId={userId} />
      </div>
      <div className="bg-[#ffffff] text-center max-w-sm h-screen ">
        <SearchBar query={query} setQuery={setQuery}></SearchBar>

        <section className="flex justify-around mt-5 ">
          <Link href={`/ads/` + `${userId}`}>
            <button className="rounded-t-md -md mt-4 font-sans font-semibold   px-4 py-1  text-black">
              Låna
            </button>
          </Link>
          <Link href={`/ads/myAds/` + `${userId}`}>
            <button
              className="rounded-t-md -md mt-4 font-sans font-semibold px-4 py-1 text-black"
              onClick={() => {}}
            >
              Mina annonser
            </button>
          </Link>
          <button className="rounded-t-md -md mt-4 font-sans font-semibold   px-4 py-1 bg-[#46649D]  text-white">
            Tavlan
          </button>
        </section>
        <div className="bg-[#46649D] h-2"></div>
        <div className="flex justify-center mt-5 ">
          <ButtonCreateAd userId={userId} />
        </div>
        <div className="text-left px-4">
          <p className="font-medium">Hittar du inte det du söker?</p>
          <p>Skriv på våran anslagstavla!</p>
          <p>Kanske en snäll granne har det du söker.</p>
        </div>
        <section className="flex text-left mb-9 mt-6">
          <button
            onClick={() => {
              router.push(`/board/${userId}`)
            }}
            className="ml-[5.5%] border-r-[1px] pr-[2%] border-black mr-[2%] "
          >
            <p>Alla inlägg</p>
          </button>
          <div></div>
          <button className="underline decoration-[#9EBB9D] decoration-2 ">
            <p>Mina inlägg</p>
          </button>
        </section>
        <section className="pb-40">
          <div className="flex flex-col">
            {boardAds.map((boardAd) => (
              <div key={boardAd.id} className="">
                <div>
                  <Image
                    className="ml-[5.6%]"
                    src={"/Line.svg"}
                    alt={"#"}
                    width={"347"}
                    height={"280"}
                  ></Image>
                </div>
                <div className="flex items-center">
                  <div className=" ml-[3%] w-[22%] ">
                    <div className=" ">
                      {boardAd.publisherProfileImage ? (
                        <Image
                          className="  rounded-full aspect-square object-cover border-[3px] border-[#9EBB9D] w-[100%]"
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
                    <div className="ml-[10%]">
                      <p className="font-bold text-xs">
                        {boardAd.publisherName}
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold mr-[7%]">
                      {boardAd.title}
                    </p>
                    <p className="text-sm font-normal mr-[7%]">
                      {boardAd.description}
                    </p>
                  </div>
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
    </>
  )
}
export async function getServerSideProps(context: any) {
  try {
    const { userId } = context.query
    console.log("userid: " + userId)

    const client = await clientPromise
    const db = client.db("borrow")

    const boardAds = await db
      .collection("board")
      .find({ publisher: userId })
      .sort({ _id: -1 })
      .toArray()

    console.log(boardAds)

    return {
      props: { boardAds: JSON.parse(JSON.stringify(boardAds)) },
    }
  } catch (e) {
    console.error(e)
  }
}

export default Board
