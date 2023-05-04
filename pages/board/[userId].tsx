import Categories from "@/p-components/categories";
import Header from "@/p-components/header";
import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { GoSearch } from "react-icons/go";

interface Props {}

function navigateToCreateAd() {
  window.location.href = "/createAdBoard";
}

const Board = ({}) => {
  const router = useRouter();
  const { userId } = router.query;
  return (
    <div className="bg-[#ffffff] text-center max-w-sm h-screen ">
      <Header></Header>
      <p>{userId}</p>
      <form>
        <label className="relative">
          <input
            className="bg-[#E6E6E6] font-sans placeholder-black px-6 py-2 rounded-sm w-80"
            type="text"
            placeholder="Sök..."
          />
          <div className="absolute inset-y-0 right-0 flex items-center px-2 text-black">
            <GoSearch />
          </div>
        </label>
      </form>

      <style jsx>{`
        input[type="text"] {
          background-repeat: no-repeat;
          background-size: 16px 16px;
          background-position: 8px 50%;
        }
      `}</style>

      <section className="flex justify-around mt-5 ">
        <Link href={"/ads/" + `${userId}`}>
          <button className="rounded-t-md -md mt-4 font-sans font-semibold   px-4 py-1  text-black">
            Låna
          </button>
        </Link>
        <Link href={"/ads/myAds/" + `${userId}`}>
          <button
            className="rounded-t-md -md mt-4 font-sans font-semibold px-4 py-1 text-black"
            onClick={() => {
              alert("Logga in för att se dina annonser");
            }}
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
        <button
          className="flex justify-center p-2 text-gray-900 bg-[#9EBB9D] w-[350px] rounded-sm text-xl font-[500] font-sans"
          onClick={navigateToCreateAd}
        >
          <p className="text-black"> Skapa inlägg</p>
        </button>
      </div>
      <div className="text-left px-4">
        <p className="font-medium">Hittar du inte det du söker?</p>
        <p>Skriv på våran anslagstavla!</p>
      </div>
      <section></section>
    </div>
  );
};

export default Board;
