import Header from '@/p-components/header'
import HeaderWithCloseIcon from '@/p-components/headerWithCloseIcon'
import { NextPage } from 'next'

interface Props {}

const Index: NextPage<Props> = ({}) => {
  return (
    <div className="h-screen bg-[#FFFFFF] max-w-sm">
      <HeaderWithCloseIcon />
      <div className="font-sans">
        <div className="px-4 ">
          <h1 className="font-bold text-xl pt-4 text-black">Kontakta</h1>
        </div>
        <div>
          <p className="py-4 px-4 text-black">
            Vi är alltid glada över att höra från våra användare och att besvara
            eventuella frågor eller funderingar som ni kan ha. Om du behöver
            hjälp eller vill ge oss feedback, finns det flera sätt att kontakta
            oss:
          </p>
        </div>
        <div>
          <div className="pt-1">
            <p className="pt-1 px-7 text-black">
              1. Skicka ett mail till vår supportadress på support@appnamn.com
              och beskriv ditt problem eller din fråga. Vi försöker att svara så
              snabbt som möjligt.
            </p>
            <p className="pt-3 px-7 text-black">
              2. Följ oss på sociala medier (Instagram, Twitter, Facebook) för
              att ta del av våra senaste nyheter och uppdateringar. Du kan också
              skicka oss ett direktmeddelande på någon av våra plattformar om du
              har en fråga.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
