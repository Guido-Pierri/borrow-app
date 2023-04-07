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
const products = [
  {
    id: 1,
    name: "Bike",
    href: "#",
    price: "$48",
    imageSrc:
      "https://i5.walmartimages.com/asr/3237dca1-47e1-42d3-9ff2-a0f7dccae087_1.8954232623d2ec2baae206fc64132e25.jpeg",
    imageAlt:
      "Mongoose 26 Bedlam 21 Speed Shimano Full Suspension Mens Mountain Bike.",
  },
  {
    id: 2,
    name: "Screw Driver",
    href: "#",
    price: "$35",
    imageSrc:
      "https://images-na.ssl-images-amazon.com/images/I/916YJyJGfdL.jpg",
    imageAlt: "",
  },
  {
    id: 3,
    name: "Office Chair",
    href: "#",
    price: "$89",
    imageSrc:
      "https://i5.walmartimages.com/asr/88c4906f-0c30-40c7-aef6-b67ec3fbbdf0.85f44ef61cc777e88292ab6faaa7c402.jpeg",
    imageAlt: "",
  },
  {
    id: 4,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 5,
    name: "Thermos",
    href: "#",
    price: "$15",
    imageSrc:
      "https://cdnimg.webstaurantstore.com/images/products/xxl/540645/1978166.jpg",
    imageAlt: "",
  },
  {
    id: 6,
    name: "Waffle Maker",
    href: "#",
    price: "$15",
    imageSrc:
      "https://i5.walmartimages.com/asr/200b2856-a500-494d-9903-4d3f894fca0b.792b3b384eb97a8c51d55df8b4ac5e3c.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff",
    imageAlt: "Waffle maker",
  },
  // More products...
]

export default function Products() {
  return (
    <div className="bg-[#DBE3DF] font-sans">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only text-gray-900">Products</h2>

        <div className="flex-column">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="grid grid-cols-3 py-4">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={product.imageSrc}
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
