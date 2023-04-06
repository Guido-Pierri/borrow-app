/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/

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
  if (!data.length) return <p>No product data</p>

  {
  }

  return (
    <div className="bg-[#F5F5F5]">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only text-gray-900">Products</h2>

        <div className="flex-column">
          {data.map((product) => (
            <a key={product.id} className="group">
              <div className="grid grid-cols-3 py-4">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={product.imgSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 px-4 text-sm text-gray-700">
                  {product.name}
                </h3>
                <p className="mt-4 px-4 text-sm font-medium text-gray-900">
                  {product.price}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
