import { NextPage } from "next"

interface Props {}

import { useState, useEffect } from "react"

function MyComponent() {
  const [documents, setDocuments] = useState([])

  useEffect(() => {
    fetch(
      "https://firestore.googleapis.com/v1/projects/borrow-1fd2b/databases/(default)/documents/products"
    )
      .then((response) => response.json())
      .then((data) => setDocuments(data.documents))
  }, [])

  return (
    <div>
      {documents.map((document, index) => (
        <div key={index}>
          console.log(document.index);
          <h2>{document}</h2>
        </div>
      ))}
    </div>
  )
}

const Index: NextPage<Props> = ({}) => {
  return (
    <div>
      <MyComponent></MyComponent>
    </div>
  )
}

export default Index
