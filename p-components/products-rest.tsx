import { useState, useEffect } from "react"

interface Product {
  id: string
  name: string
  price: string
  imgSrc: string
  imageAlt: string
}

export default function Products() {
  const [data, setData] = useState<Product[]>([])
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(
      "https://firestore.googleapis.com/v1/projects/borrow-1fd2b/databases/(default)/documents/products"
    )
      .then((res) => res.json())
      .then((data: { documents: any[] }) => {
        const products = data.documents.map((doc) => {
          const fields = doc.fields
          return {
            id: fields.id.stringValue,
            name: fields.name.stringValue,
            price: fields.price.stringValue,
            imgSrc: fields.imgSrc.stringValue,
            imageAlt: fields.imageAlt.stringValue,
          }
        })
        setData(products)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <div> Loading...</div>
  if (!data.length) return <p>No profile data</p>
  console.log(data)
  return (
    <div>
      {data.map((product) => (
        <div key={product.id}>
          <h1>{product.name}</h1>
          <img src={product.imgSrc} alt={product.imageAlt} />
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  )
}
