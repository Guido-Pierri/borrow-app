import ButtonCreateAd from '@/p-components/buttonCreateAd'
import Header from '@/p-components/header'
import Link from 'next/link'
import { useRouter } from 'next/router'
import clientPromise from '@/lib/mongodb'
import { BoardAd } from '@/types/boardAd'
import { useState } from 'react'
import SearchBar from '@/p-components/searchBar'
import Image from 'next/image'
import { signIn, useSession } from 'next-auth/react'
import { UserId } from '@/types/userId'

interface Props {
  boardAds: BoardAd[]
}

const Board = ({ boardAds }: Props) => {
  const [showAdOverlay, setShowAdOverlay] = useState(false)

  const handleInfoElementClick = () => {
    setShowAdOverlay(true)
  }
  const handleCloseInfoOverlay = () => {
    setShowAdOverlay(false)
  }

  const [query, setQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const router = useRouter()
  const { data: session } = useSession()
  const userId = session?.user?.id as UserId
  const filteredBoardAds = boardAds.filter((boardAd) =>
    boardAd.title.includes(
      query

        .charAt(0)

        .toLocaleUpperCase()

        .concat(query.charAt(1).toLocaleLowerCase())
    )
  )

  console.log('selectedCategory:', selectedCategory)
  if (session) {
    return (
      <>
        <div className="mb-4">
          <Header userId={userId} anotherUserId={userId} />
        </div>
        <div className="bg-[#ffffff] text-center max-w-sm h-screen ">
          <SearchBar query={query} setQuery={setQuery}></SearchBar>

          <section className="flex justify-around mt-5 ">
            <Link href={'/ads'}>
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
            <p className="font-semibold">Hittar du inte det du söker?</p>
            <p>Skriv på våran anslagstavla!</p>
            <p>Kanske en snäll granne har det du söker.</p>
          </div>
          <section className="flex text-left mb-9 mt-6 items-center justify-start">
            <button className="ml-[5.5%]  pr-[2%] mr-[2%] underline decoration-[#9EBB9D] underline-offset-8 decoration-2 border-r-[1px] border-black">
              <p className="font-semibold text-base ">Alla inlägg</p>
            </button>

            <button
              className=""
              onClick={() => {
                router.push(`/board/myAdsBoard/${userId}`)
              }}
            >
              <p className="font-normal text-base ">Mina inlägg</p>
            </button>
          </section>
          <section className="mx-[5.8%]">
            <div className="flex flex-col">
              {boardAds.map((boardAd) => (
                <div
                  key={boardAd.id}
                  className=""
                  onClick={handleInfoElementClick}
                >
                  <div>
                    <Image
                      className="ml-[] w-[100%]"
                      src={'/Line.svg'}
                      alt={'#'}
                      width={'100'}
                      height={'100'}
                    ></Image>
                  </div>
                  <div className="flex items-center">
                    <div className=" w-[31.8%] my-[3.9%] ">
                      <div className=" ">
                        {boardAd.publisherProfileImage ? (
                          <Image
                            className="  rounded-full aspect-square object-cover border-[3px] border-[#9EBB9D] w-[100%]"
                            alt={'profile'}
                            src={boardAd.publisherProfileImage}
                            width={'84'}
                            height={'84'}
                          />
                        ) : (
                          <Image
                            className=" mr-[3.5%] mt-[4%] rounded-full"
                            src="/profile.svg"
                            width={'84'}
                            height={'84'}
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
                    <div className="text-left ml-[3.3%] mr-[13.6%] w-[75%] overflow-x-hidden">
                      <p className="text-sm font-semibold ">{boardAd.title}</p>
                      <p className="text-sm font-normal">
                        {boardAd.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </>
    )
  }
  return (
    <>
      Not signed in <br /> <button onClick={() => signIn()}>Sign in</button>{' '}
    </>
  )
}
export async function getServerSideProps() {
  try {
    const client = await clientPromise
    const db = client.db('borrow')

    const boardAds = await db
      .collection('board')
      .find({})
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
