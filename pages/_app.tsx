import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { Righteous } from "@next/font/google"

const righteous = Righteous({
  subsets: ["latin"],
  weight: "400",
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <h1 className={righteous.className}>
      <Component {...pageProps} />
    </h1>
  )
}
