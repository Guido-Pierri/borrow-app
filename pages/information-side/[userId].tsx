import CloseIcon from '@/p-components/closeIcon'
import Header from '@/p-components/header'
import HeaderWithCloseIcon from '@/p-components/headerWithCloseIcon'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

interface Props {}

const Index: NextPage<Props> = () => {
  const router = useRouter()

  const { userId } = router.query
  console.log(userId)

  return (
    <div className="h-screen bg-[#FFFFFF] max-w-sm">
      <HeaderWithCloseIcon userId={userId} />
      <div className="font-sans">
        <div className="ml-[11.8%] ">
          <h1 className="font-bold text-xl pt-4 text-black">
            Så fungerar Borrow
          </h1>
        </div>
        <div className="mx-[11.8%] mt-[3.9%] text-black">
          <p>
            Borrow är en tjänst som ger möjligheten för dig som student att
            dryga ut kassan genom att låna och låna ut saker inom din
            studentförening.
          </p>
          <p className="mt-[3.9%]">
            Utöver detta bidrar du också till en mer hållbar framtid och ökad
            gemenskap i ditt grannskap.
          </p>
        </div>
        <div className="mt-[8%]">
          <h2 className="font-bold text-base mx-[11.8%]  text-black">
            För att använda Borrow behöver du:
          </h2>
          <div className="mx-[11.8%] ">
            <p className=" text-black mt-[8%]">
              1. Först registrera sig som medlem på hemsidan och ansluta sig
              till sin studentförening
            </p>
            <p className=" text-black mt-[3.9%]">
              2. Därefter kan man lägga upp saker som man vill låna ut eller
              söka efter saker som man vill låna. Det kan vara allt från böcker
              och kursmaterial till verktyg och sportutrustning.
            </p>
            <p className=" text-black mt-[3.9%]">
              3. När man har hittat en sak som man vill låna eller låna ut så
              kontaktar man personen genom Borrow och bestämmer tid och plats
              för utlåning/lån.
            </p>
          </div>
        </div>
      </div>
      <div>
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
