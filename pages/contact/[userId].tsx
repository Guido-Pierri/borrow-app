import Header from '@/p-components/header'
import HeaderWithCloseIcon from '@/p-components/headerWithCloseIcon'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

interface Props {
  userId: string
}

const Index: NextPage<Props> = () => {
  const router = useRouter()

  const { userId } = router.query
  console.log(userId)
  return (
    <div className="h-screen bg-[#FFFFFF] max-w-sm">
      <HeaderWithCloseIcon userId={userId} />
      <div className="font-sans">
        <div className="mx-[11.8%]">
          <h1 className="font-bold text-xl pt-4 text-black">Kontakta</h1>
        </div>
        <div>
          <p className="py-4 mx-[11.8%] text-black">
            Vi är alltid glada över att höra från våra användare och att besvara
            eventuella frågor eller funderingar som ni kan ha. Om du behöver
            hjälp eller vill ge oss feedback, finns det flera sätt att kontakta
            oss:
          </p>
        </div>
        <div>
          <div className="pt-1">
            <p className="pt-1 mx-[11.8%] text-black">
              1. Skicka ett mail till vår supportadress på support@appnamn.com
              och beskriv ditt problem eller din fråga. Vi försöker att svara så
              snabbt som möjligt.
            </p>
            <p className="pt-3 mx-[11.8%] text-black">
              2. Följ oss på sociala medier (Instagram, Twitter, Facebook) för
              att ta del av våra senaste nyheter och uppdateringar. Du kan också
              skicka oss ett direktmeddelande på någon av våra plattformar om du
              har en fråga.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-[10%]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#46649D"
            fill-opacity="1"
            d="M0,288L30,288C60,288,120,288,180,250.7C240,213,300,139,360,138.7C420,139,480,213,540,202.7C600,192,660,96,720,53.3C780,11,840,21,900,32C960,43,1020,53,1080,64C1140,75,1200,85,1260,80C1320,75,1380,53,1410,42.7L1440,32L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  )
}

export default Index
