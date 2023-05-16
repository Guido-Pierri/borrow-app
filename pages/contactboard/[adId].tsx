import Header from "@/p-components/header"
import Link from "next/link"
import clientPromise from "@/lib/mongodb"
import { BoardAd } from "@/types/boardAd"
import Image from "next/image"
import router from "next/router"

interface Props {
  boardAds: BoardAd[]
}

function navigateBack() {
  router.back()
}

const contactBoard = ({ boardAds }: Props) => {
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
                  </div>

                  <p className="bold text-[#0f0e0e] mt-2 text-[20px] font-bold py-4">
                    <b>{boardAd.title}</b>
                  </p>
                  <p className="text-[#0f0e0e] mt-2 text-[14px] font-semibold">
                    Beskrivning
                  </p>
                  <p className="font-normal text-[14px]">
                    {boardAd.description}
                  </p>
                  <div className="">
                    <div className="flex items-center">
                      {boardAd.publisherProfileImage ? (
                        <Image
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
                    <div className="ml-[0%]">
                      <p className="font-bold text-xs">
                        {boardAd.publisherName}
                      </p>
                    </div>
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
                  </div>
                </div>
              </div>
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
