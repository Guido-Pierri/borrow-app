import Header from '@/p-components/header'
import { Ad } from '@/types/ads'
import Image from 'next/image'
import Categories from '@/p-components/categories'
import clientPromise from '@/lib/mongodb'
import { useRouter } from 'next/router'
import { useState } from 'react'
import SearchBar from '@/p-components/searchBar'
import ButtonCreateAd from '@/p-components/buttonCreateAd'
import { UserId } from '@/types/userId'

interface AdId {
  id: string
}

interface Props {
  ads: Ad[]
}
const Ads = ({ ads }: Props) => {
  const router = useRouter()
  const { userId } = router.query as UserId

  const [selectedCategory, setSelectedCategory] = useState('')

  //search through ads using the query in SearchBar
  const [query, setQuery] = useState('')
  const filteredAds = ads
    // .filter((ad) => !selectedCategory || ad?.category.match(selectedCategory))
    .filter((ad) =>
      ad.title.includes(
        query
          .charAt(0)
          .toLocaleUpperCase()
          .concat(query.charAt(1).toLocaleLowerCase())
      )
    )
    .filter((ad) => !selectedCategory || ad.category === selectedCategory)
  console.log('selectedCategory:', selectedCategory)

  // navigate to the ad creation
  const navigateToCreateAd = () => {
    router.push(`/createAd/${userId}`)
  }

  console.log(userId)

  function navigateToAd(id: string) {
    window.location.href = `/ads/view/${id}`
  }
  const handleClick = async (id: string) => {
    console.log('inside handleClick')
    console.log(`${userId}`)
    window.location.href = `/ads/myAds/${id}`
    const response = await fetch(`/api/user/${userId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(`${userId}`),
    })

    const dataResponse = await response.json()

    console.log('dataResponse', dataResponse)
    if (dataResponse) {
    }
  }

  const handleClickBoard = async (id: string) => {
    console.log('inside handleClickBoard')
    console.log(`${userId}`)
    window.location.href = `/board/${id}`
    const response = await fetch(`/api/user/${userId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(`${userId}`),
    })

    const dataResponse = await response.json()

    console.log('dataResponse', dataResponse)
    if (dataResponse) {
    }
  }

  console.log('filteredAds', filteredAds)

  return (
    <>
      <div className="mb-4">
        <Header userId={userId} anotherUserId={userId} />
      </div>
      <div className="bg-[#ffffff] text-center max-w-sm h-screen pt-4">
        <SearchBar query={query} setQuery={setQuery}></SearchBar>

        <section className="flex justify-around mt-5 ">
          <button className="rounded-t-md -md mt-4 font-sans font-semibold bg-[#46649D]  px-4 py-1  text-white">
            Låna
          </button>
          <button
            onClick={() => {
              handleClick(`${userId}`)
            }}
            className="rounded-t-md -md mt-4 font-sans font-semibold px-4 py-1  text-black"
          >
            Mina annonser
          </button>
          <button
            className="rounded-t-md -md mt-4 font-sans font-semibold   px-4 py-1  text-black"
            onClick={() => {
              handleClickBoard(`${userId}`)
            }}
          >
            Tavlan
          </button>
        </section>

        <div className="bg-[#46649D] h-2"></div>
        <Categories setSelectedCategory={setSelectedCategory} />

        <div
          onClick={navigateToCreateAd}
          className="flex justify-center mt-[-2] "
        >
          <ButtonCreateAd></ButtonCreateAd>
          {/* <button
            className="flex justify-center p-2 text-gray-900 bg-[#9EBB9D] w-[350px] rounded-sm text-xl font-[500] font-sans"
            onClick={navigateToCreateAd}
          >
            <p className="text-black"> Skapa annons</p>
          </button> */}
        </div>

        <section className="pb-40">
          <div className=" font-sans text-left grid grid-cols-2 gap-y-2 gap-x-4 p-4">
            {filteredAds.map((ad) => (
              <div key={ad.id} className="">
                {/* <p className="p-12 text-xs">{ad.image}</p> */}

                <Image
                  onClick={() => navigateToAd(ad.id)}
                  className="mt-4  w-full aspect-square"
                  alt={ad.description}
                  src={ad.image}
                  width={'1000'}
                  height={'0'}
                  // property={userId}
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
    </>
  )
}
export async function getServerSideProps() {
  try {
    const client = await clientPromise
    const db = client.db('borrow')

    const ads = await db.collection('ads').find({}).sort({ _id: -1 }).toArray()

    console.log(ads)

    return {
      props: { ads: JSON.parse(JSON.stringify(ads)) },
    }
  } catch (e) {
    console.error(e)
  }
}
export default Ads
