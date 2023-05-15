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
    </div>
  )
}

export default Index
