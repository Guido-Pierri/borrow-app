import { log } from "console"
import React from "react"
import useSWR from "swr"

const fetcher = (url: RequestInfo | URL) => fetch(url).then((res) => res.json())

export default function App() {
  const { data, error, isLoading } = useSWR(
    "https://firestore.googleapis.com/v1/projects/borrow-1fd2b/databases/(default)/documents/products",
    fetcher
  )

  if (error) return "An error has occurred."
  if (isLoading) return "Loading..."
  console.log(data)

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👁 {data.subscribers_count}</strong>{" "}
      <strong>✨ {data.stargazers_count}</strong>{" "}
      <strong>🍴 {data.forks_count}</strong>
    </div>
  )
}
