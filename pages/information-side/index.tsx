import Header from "@/p-components/header"
import { NextPage } from "next"

interface Props {}

const Index: NextPage<Props> = ({}) => {
  return (
    <div className="h-screen bg-[#F5F5F5] max-w-sm">
      <Header></Header>
      <div className="font-sans">
        <div className="px-4 ">
          <h1 className="font-bold text-xl pt-4 text-black">
            Så fungerar Borrow
          </h1>
        </div>
        <div>
          <p className="py-4 px-4 text-black">
            Borrow är en tjänst som ger möjligheten för dig som student att
            dryga ut kassan genom att låna och låna ut saker inom din
            studentförening. Utöver detta bidrar du också till en mer hållbar
            framtid och ökad gemenskap i ditt grannskap.
          </p>
        </div>
        <div>
          <h2 className="font-bold text-base pt-4 px-4 text-black">
            För att använda Borrow behöver du:
          </h2>
          <div className="pt-1">
            <p className="pt-3 px-6 text-black">
              1. Först registrera sig som medlem på hemsidan och ansluta sig
              till sin studentförening
            </p>
            <p className="pt-3 px-6 text-black">
              2. Därefter kan man lägga upp saker som man vill låna ut eller
              söka efter saker som man vill låna. Det kan vara allt från böcker
              och kursmaterial till verktyg och sportutrustning.
            </p>
            <p className="px-6 pt-3 text-black">
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
