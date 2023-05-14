import Header from "@/p-components/header";
import { User } from "@/types/user";
import { NextPage } from "next";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import * as React from 'react';

// function navigateTo() {
//   window.location.href = "/ads"
// }

export default function MyPage() {
  
  // const router = useRouter()

  const [formData, setFormData] = useState<User>({
    userId: uuidv4(),
    firstName: "",
    lastName: "",
    adress: "",
    email: "",
    mobileNumber: "",
    password: "",
  });

  console.log(formData);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    function handleClick() {
      console.log("handleClick");

      // router.push('/ads')
    }
    const apiData: User = {
      userId: formData.userId,
      firstName: formData.firstName,
      lastName: formData.lastName,
      adress: formData.adress,
      email: formData.email,
      mobileNumber: formData.mobileNumber,
      password: formData.password,
    };

    const response = await fetch(`/api/registration`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiData),
    });

    const data = await response.json();

    if (data === "New User") {
      handleClick();
    }
    console.log(data);
    // window.location.href = "/ads"
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    console.log(event.target.value);
  };
  return (
    <div className="bg-[#FFFFFF] text-center max-w-sm h-screen ">
      <Header></Header>
      <form className="font-sans bg-[#FFFFFF]" onSubmit={handleSubmit}>
        <h1
          className="text-xl font-[500] text-black flex justify-start"
          style={{ marginBottom: "1rem" }}
        >
          {" "}
          Registrera
        </h1>

        <div>
  <label
    htmlFor="firstName"
    className="block text-sm font-slim text-black mb-2"
    style={{ width: "155px" }}
  >
    För & Efternamn
  </label>
  <input
    id="firstName"
    className="rounded py-4 px-7 mt-1 border w-[335px] border-[#9EBB9D] placeholder-[#000000] bg-[#fdfdfd]"
    type="text"
    name="firstName"
    required
    value={formData.firstName}
    onChange={handleInputChange}
    style={{ color: "#000000", marginTop: "-0.4rem" }}
  />
</div>
<div>
  <label
    htmlFor="adress"
    className="block text-sm font-slim text-black mb-2"
    style={{ width: "135px" }}
  >
  Postnummer
</label>
<input
  id="adress"
  className="rounded py-4 px-7 mt-1 border w-[335px] border-[#9EBB9D] placeholder-[#000000] bg-[#fdfdfd]"
  type="text"
  name="adress"
  required
  value={formData.adress}
  onChange={handleInputChange}
  style={{ color: "#000000", marginTop: "-0.4rem" }}
/>
</div>
<div>
  <label
    htmlFor="Email"
    className="block text-sm font-slimm text-black mb-2"
    style={{ width: "90px" }} 
  >
    Email
</label>
<input
  id="email"
  className="rounded py-4 px-7 mt-1 border w-[335px] border-[#9EBB9D] placeholder-[#000000] bg-[#fdfdfd]"
  type="email"
  name="email"
  required
  value={formData.email}
  onChange={handleInputChange}
  style={{ color: "#000000", marginTop: "-0.4rem" }}
/>
</div>
<div>
  <label
    htmlFor="Lösenord"
    className="block text-sm font-slim text-black mb-2"
    style={{ width: "115px" }}
  >
    Lösenord
</label>
<input
  id="Lösen"
  type="password"
  name="password"
  className="rounded py-4 px-7 mt-1 border w-[335px] border-[#9EBB9D] placeholder-[#000000] bg-[#fdfdfd]"
  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
  title="Måste innehålla minst en siffra och en stor och liten bokstav, och minst 8 eller fler tecken"
  minLength={8}
  required
  value={formData.password}
  onChange={handleInputChange}
  style={{ color: "#000000", marginTop: "-0.4rem" }}
/>
</div>
        {/* <label>
          <input
            className="rounded py-4 px-7 mt-8 border w-[265px] border-[#9EBB9D] placeholder-[#000000] bg-[#fff]"
            placeholder="Bekräfta lösenord..."
            type="password"
            name="samePassword"
            required
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Måste innehålla minst en siffra och en stor och liten bokstav, och minst 8 eller fler tecken"
            minLength={8}
            // value={formData.samePassword}
            onChange={handleInputChange}
            style={{ color: "#000000" }}
          />
        </label> */
        }
        <br />
        <br />
        <label className ="flex flex-row-reverse justify-end ml-9">
          <legend className ="text-medium mt-6 ml-4 text-black">Jag godkänner villkoren</legend>
          <input class="mt-8 border ml-6 mb-8 rounded  accent-[#9EBB9D]" type="checkbox" required title="Du måste godkänna vilkoren!" name=""/>
        </label>
        <div className="bg-[#FFFFFF">
          <button
            className="
           rounded-sm text-[17px] text-black border-[#9EBB9D] bg-[#9EBB9D] border w-[265px]  py-3
    "
            type="submit"
            // onClick={navigateTo}
          >
            Registrera
          </button>
        </div>
      </form>
    </div>
  );
}

