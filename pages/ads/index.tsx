import Header from '@/p-components/header'
import { Ad } from '@/types/ads'
import Image from 'next/image'
import Categories from '@/p-components/categories'
import clientPromise from '@/lib/mongodb'
import router, { useRouter } from 'next/router'
import { useContext, useState } from 'react'
import SearchBar from '@/p-components/searchBar'
import ButtonCreateAd from '@/p-components/buttonCreateAd'
import { UserId } from '@/types/userId'
import { ObjectId } from 'mongodb'
import AdViewOverlay from '@/p-components/adViewOverlay'
import { MyContext } from '@/contexts/my-context-provider'
import { signIn, signOut, useSession } from 'next-auth/react'

interface AdId {
  id: string
}

interface Props {
  ads: Ad[]
}
const Ads = ({ ads }: Props) => {
  const { data: session } = useSession()
  const userId = session?.user?.id as UserId
  const {
    firstAndLastName,
    isLoggedIn,
    _id,
    setFirstAndLastName,
    setIsLoggedIn,
    set_id,
  } = useContext(MyContext)
  const [showAdOverlay, setShowAdOverlay] = useState(false)
  const [selectedAd, setSelectedAd] = useState<Ad | null>(null)
  // console.log('selectedAd:', selectedAd)
  // console.log('username from context:', firstAndLastName)
  // console.log('_id from context', _id)
  // console.log('isLoggedIn from context', isLoggedIn)

  const handleAdViewElementClick = (ad: Ad) => {
    setSelectedAd(ad)

    setShowAdOverlay(true)
  }

  const handleCloseAdViewOverlay = () => {
    setShowAdOverlay(false)
  }

  const [selectedCategory, setSelectedCategory] = useState('')

  //search through ads using the query in SearchBar
  const [query, setQuery] = useState('')
  const filteredAds = ads
    .filter((ad) => ad.publisher !== userId)
    .filter((ad) =>
      ad.title.includes(
        query
          .charAt(0)
          .toLocaleUpperCase()
          .concat(query.charAt(1).toLocaleLowerCase())
      )
    )

    .filter((ad) => !selectedCategory || ad.category === selectedCategory)
  // console.log('selectedCategory:', selectedCategory)

  const getUser = async () => {
    // console.log('inside handleClick')
    const email = session?.user?.email
    // console.log(`${userId}`)
    // window.location.href = `/ads/myAds/${email}`

    const response = await fetch(`/api/user/findUser/${email}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(`${email}`),
    })

    const dataResponse = await response.json()

    // console.log('dataResponse', dataResponse)
    if (dataResponse) {
      return dataResponse
    }
  }

  // const handleClickBoard = async (userId: string) => {
  // console.log('inside handleClickBoard')

  // console.log(`${userId}`)
  // }

  // console.log('filteredAds', filteredAds)
  console.log('session:', session)
  console.log('session?.user?.id:', session?.user?.id)
  console.log(
    'session?.user?.firstAndLastName',
    session?.user?.firstAndLastName
  )
  if (session) {
    return (
      <>
        Signed in as {session.user?.email} <br />{' '}
        <button onClick={() => signOut()}>Sign out</button>
        <div className="mb-4">
          <Header userId={userId} anotherUserId={userId} />
        </div>
        <div className="bg-[#ffffff] text-center max-w-sm h-screen ">
          <SearchBar query={query} setQuery={setQuery}></SearchBar>

          <section className="flex justify-around mt-5 ">
            <button className="rounded-t-md -md mt-4 font-sans font-semibold bg-[#46649D]  px-4 py-1  text-white">
              Låna
            </button>
            <button
              onClick={() => {
                router.push('ads/myAds/' + `${userId}`)
              }}
              className="rounded-t-md -md mt-4 font-sans font-semibold px-4 py-1  text-black"
            >
              Mina annonser
            </button>
            <button
              className="rounded-t-md -md mt-4 font-sans font-semibold   px-4 py-1  text-black"
              onClick={() => {
                router.push('/board')
              }}
            >
              Tavlan
            </button>
          </section>

          <div className="bg-[#46649D] h-2"></div>
          <Categories
            setSelectedCategory={setSelectedCategory}
            selectedCategory={selectedCategory}
          />

          <div
            // onClick={navigateToCreateAd}
            className="flex justify-center mt-[-2] "
          >
            <ButtonCreateAd userId={userId} />
          </div>

          <section className="pb-40">
            <div className=" font-sans text-left grid grid-cols-2 gap-y-2 gap-x-4 p-4">
              {filteredAds.map((ad) => (
                <div key={ad.id} className="">
                  <Image
                    // onClick={() => navigateToAd(ad.id)}
                    className="mt-4  w-full aspect-square rounded-sm object-cover"
                    alt={ad.description}
                    src={ad.image}
                    width={'1000'}
                    height={'1000'}
                    onClick={() => handleAdViewElementClick(ad)}
                  />

                  <div>
                    <p
                      className="bold text-[#0f0e0e] mt-1 link "
                      // onClick={() => navigateToAd(ad.id)}
                    >
                      {ad.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {showAdOverlay && selectedAd && (
              <AdViewOverlay
                onClose={handleCloseAdViewOverlay}
                userId={userId}
                _id={selectedAd._id}
                adImage={selectedAd.image}
                title={selectedAd.title}
                publisher={selectedAd.publisher}
                fullName={selectedAd.fullName}
                publisherProfileImage={selectedAd.publisherProfileImage}
                adEmail={selectedAd.email}
                description={selectedAd.description}
              />
            )}
          </section>
          <style>{`
            .link {
              cursor: pointer;
            }
          `}</style>
        </div>
      </>
    )
  }
  return (
    <>
      {' '}
      Not signed in <br /> <button onClick={() => signIn()}>
        Sign in
      </button>{' '}
    </>
  )
}
export async function getServerSideProps() {
  try {
    // const { userId } = context.query

    // if (!userId || !ObjectId.isValid(userId)) {
    //   return {
    //     redirect: {
    //       destination: '/404',
    //       permanent: false,
    //     },
    //   }
    // }
    const client = await clientPromise
    const db = client.db('borrow')

    const ads = await db.collection('ads').find({}).sort({ _id: -1 }).toArray()

    // console.log(ads)

    return {
      props: { ads: JSON.parse(JSON.stringify(ads)) },
    }
  } catch (e) {
    console.error(e)
  }
}
export default Ads
