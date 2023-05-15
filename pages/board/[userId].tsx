import ButtonCreateAd from "@/p-components/buttonCreateAd";
import Header from "@/p-components/header";
import Link from "next/link";
import router, { useRouter } from "next/router";
import clientPromise from "@/lib/mongodb";
import { BoardAd } from "@/types/boardAd";
import { useState } from "react";
import SearchBar from "@/p-components/searchBar";
import Image from "next/image";

interface Props {
  boardAds: BoardAd[];
}

// function navigateToAd(id: string) {
//   window.location.href = `/ads/view/${id}`
// }

const Board = ({ boardAds }: Props) => {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const router = useRouter();
  const { userId } = router.query;
  const filteredBoardAds = boardAds.filter((boardAd) =>
    boardAd.title.includes(
      query

        .charAt(0)

        .toLocaleUpperCase()

        .concat(query.charAt(1).toLocaleLowerCase())
    )
  );

  // .filter(
  //   (ad) => !selectedCategory
  //   //  ||
  //   //  ad.category === selectedCategory
  // );

  console.log("selectedCategory:", selectedCategory);

  return (
    <>
      <div className="mb-4">
        <Header userId={userId} anotherUserId={userId} />
      </div>
      <div className="bg-[#ffffff] text-center max-w-sm h-screen ">
        <SearchBar query={query} setQuery={setQuery}></SearchBar>

        <section className="flex justify-around mt-5 ">
          <Link href={`/ads/` + `${userId}`}>
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
          {/* <button className="flex justify-center p-2 text-gray-900 bg-[#9EBB9D] w-[350px] rounded-sm text-xl font-[500] font-sans">
            <p className="text-black"> Skapa inlägg</p>
          </button> */}
          <ButtonCreateAd userId={userId} />
        </div>
        <div className="text-left px-4">
          <p className="font-medium">Hittar du inte det du söker?</p>
          <p>Skriv på våran anslagstavla!</p>
          <p>Kanske en snäll granne har det du söker.</p>
        </div>
        <section className="flex text-left mb-9 mt-6 items-center justify-start">
          <button className="ml-[5.5%]  pr-[2%] mr-[2%] border-b-[1px] border-b-[#9EBB9D]">
            <p className="font-normal text-base">Alla inlägg</p>
          </button>
          <div>
            <Image src={"/Vector 88.svg"} width={1} height={"12"} alt={""} />
          </div>
          {/* <Link href={`/board/myAdsBoard/${userId}`}> Detta skapade problem och "mina inlägg" visades
          som två rader ist för en*/}
          <button
            className="ml-[2%]"
            onClick={() => {
              router.push(`/board/myAdsBoard/${userId}`);
            }}
          >
            <p className="font-normal text-base ">Mina inlägg</p>
          </button>
          {/* </Link> */}
        </section>
        <section className="pb-40">
          <div className="flex flex-col">
            {filteredBoardAds.map((boardAd) => (
              <div key={boardAd.id} className="">
                <div>
                  <Image
                    className="ml-[5.6%]"
                    src={"/Line.svg"}
                    alt={"#"}
                    width={"347"}
                    height={"280"}
                  ></Image>
                </div>
                <div className="flex items-center">
                  <Image
                    // onClick={() => navigateToAd(ad.id)}
                    className="ml-[7%] mr-[3.5%] mt-[4%]"
                    alt={boardAd.description}
                    src={"/Profil.svg"}
                    width={"75"}
                    height={"98"}
                  />
                  <div>
                    <p className="text-sm font-semibold mr-[7%]">
                      {boardAd.title}
                    </p>
                    <p className="text-sm font-normal mr-[7%]">
                      {boardAd.description}
                    </p>
                  </div>
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
  );
};
export async function getServerSideProps() {
  try {
    const client = await clientPromise;
    const db = client.db("borrow");

    const boardAds = await db
      .collection("board")
      .find({})
      .sort({ _id: -1 })
      .toArray();

    console.log(boardAds);

    return {
      props: { boardAds: JSON.parse(JSON.stringify(boardAds)) },
    };
  } catch (e) {
    console.error(e);
  }
}

export default Board;
