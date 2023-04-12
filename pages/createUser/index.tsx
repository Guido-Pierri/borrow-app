// import { MongoClient } from "mongodb"

// async function main() {
//   /**
//    * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
//    * See https://docs.mongodb.com/drivers/node/ for more details
//    */
//   const uri =
//     "mongodb+srv://vercel-admin-user:QtvP40QFgaDPNTMs@cluster0.0kdivnw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

//   /**
//    * The Mongo Client you will use to interact with your database
//    * See https://mongodb.github.io/node-mongodb-native/3.3/api/MongoClient.html for more details
//    */
//   const client = new MongoClient(uri)

//   try {
//     // Connect to the MongoDB cluster
//     await client.connect()

//     // Make the appropriate DB calls

//     // Create a single new listing
//     await createListing(client, {
//       name: "User from VsCode",
//     })

//     // Create 3 new listings
//     // await createMultipleListings(client, [
//     //   {
//     //     name: "Infinite Views",
//     //     summary: "Modern home with infinite views from the infinity pool",
//     //     property_type: "House",
//     //     bedrooms: 5,
//     //     bathrooms: 4.5,
//     //     beds: 5,
//     //   },
//     //   {
//     //     name: "Private room in London",
//     //     property_type: "Apartment",
//     //     bedrooms: 1,
//     //     bathroom: 1,
//     //   },
//     //   {
//     //     name: "Beautiful Beach House",
//     //     summary:
//     //       "Enjoy relaxed beach living in this house with a private beach",
//     //     bedrooms: 4,
//     //     bathrooms: 2.5,
//     //     beds: 7,
//     //     last_review: new Date(),
//     //   },
//     // ])
//   } finally {
//     // Close the connection to the MongoDB cluster
//     await client.close()
//   }
// }

// main().catch(console.error)

// /**
//  * Create a new Airbnb listing
//  * @param {MongoClient} client A MongoClient that is connected to a cluster with the sample_airbnb database
//  * @param {Object} newUser The new listing to be added
//  */
// async function createListing(client: MongoClient, newUser: { name: string }) {
//   // See https://mongodb.github.io/node-mongodb-native/3.3/api/Collection.html#insertOne for the insertOne() docs
//   const result = await client
//     .db("borrow")
//     .collection("users")
//     .insertOne(newUser)
//   console.log(`New listing created with the following id: ${result.insertedId}`)
// }

// // /**
// //  * Create multiple Airbnb listings
// //  * @param {MongoClient} client A MongoClient that is connected to a cluster with the sample_airbnb database
// //  * @param {Object[]} newListings The new listings to be added
// //  */
// // async function createMultipleListings(client, newListings) {
// //   // See https://mongodb.github.io/node-mongodb-native/3.3/api/Collection.html#insertMany for the insertMany() docs
// //   const result = await client
// //     .db("sample_airbnb")
// //     .collection("listingsAndReviews")
// //     .insertMany(newListings)

// //   console.log(
// //     `${result.insertedCount} new listing(s) created with the following id(s):`
// //   )
// //   console.log(result.insertedIds)
// // }
import { useState } from "react"

interface User {
  name: string
}
interface Props {
  users: User[]
}

// const [name, setName] = useState("")
export default function CreateUser(user: User) {
  const [newUser, setNewUser] = useState<string>()
  console.log(newUser)
  console.log(user.name)
  user.name = newUser

  return (
    <div className=" flex items-center justify-center text-center bg-[#F5F5F5] font-sans">
      <h1 className="text-xl font-[500] text-black">Register</h1>
      <form className=" my-12 border-[#7BAEAB]">
        <label>
          <input
            className="rounded py-4 px-7 border w-[265px] border-[#7BAEAB] placeholder-[#000000] bg-[#fff]"
            placeholder="Name..."
            type="text"
            required
            value={newUser}
            onChange={(e) => setNewUser(e.target.value)}
          />
        </label>
      </form>
    </div>
  )
}
