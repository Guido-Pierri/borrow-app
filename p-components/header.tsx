import { RxHamburgerMenu } from "react-icons/rx";
import { BsChatLeftText } from "react-icons/bs";
import Link from "next/link";
import { useState } from "react";

const Header = ({}) => {
  const [hide, setHide] = useState(false);

  const hideData = () => {
    console.log("HideData was triggered");
    setHide(!hide);
  };

  return (
    <div className="flex items-top justify-center pt-6 bg-[#F5F5F5]">
      {/*Title does not want to center*/}
      <nav className="w-full">
        <div className="flex space-x-16 p-3 rounded-sm">
          <div className="p-3 mt-3 text-3xl text-[#000000]">
            <div className="btn">
              <button onClick={hideData}>
                <RxHamburgerMenu />
              </button>
              {hide && (
                <div>
                  <div className="border-2 border-black h-full px-10 hamburgare">
                    <ul className="">
                      <li className="py-1">
                        <a href={"/information-side"}>Om oss!</a>
                      </li>
                      <li className="py-1">
                        <a href={"/contact"}>Kontakta oss!</a>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="mt-4 text-[#C7784C] absolute m-auto left-16 right-0">
            <Link href={"/ads"}>
              {" "}
              <b className="text-4xl text-center">Borrow</b>
            </Link>
          </div>
          {/*<a href="/">
            <div className="p-3 mt-3 text-3xl text-[#7BAEAB]">
              <BsChatLeftText />
            </div>
  </a>*/}
        </div>
      </nav>
    </div>
  );
};

export default Header;
