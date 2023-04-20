import { useEffect } from "react"

import { useRouter } from "next/router"

import Header from "@/p-components/header"

import { NextPage } from "next"

interface Props {}

const Index: NextPage<Props> = () => {
  const router = useRouter()

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      router.push("/ads")
    }, 1500) // 3 seconds delay

    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <div className="bg-[#F5F5F5] max-w-sm h-screen">
      <Header></Header>
      <section className="flex flex-column justify-center font-sans">
        <h1 className="pt-10 text-gray-900">Välkommen till Borrow</h1>
      </section>
    </div>
  )
}

export default Index
