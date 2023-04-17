import Header from "@/p-components/header";
import { NextPage } from "next";

interface Props {}

const Index: NextPage<Props> = ({}) => {
  return (
    <div className="font-sans h-screen bg-[#F5F5F5]">
      <Header></Header>
      <h1>Välkommen till Info sidan!</h1>
    </div>
  );
};

export default Index;
