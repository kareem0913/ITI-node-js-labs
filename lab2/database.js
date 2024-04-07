// const { MongoClient } = require("mongodb");

// async function main() {
//   try {
//     const client = new MongoClient(
//       "mongodb+srv://kareem345:ig0iFjpXD9NnTCGp@cluster0.llvl7n3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
//     );
//     await client.connect();
//     const db = client.db("sample_mflix");
//     const collection = db.collection("users");
//     return collection;
//   } catch (error) {
//     throw error;
//   }
//   //   await collection.insertOne({
//   //     id: 123,
//   //     createdBy: "kareem",
//   //   });
//   //   const randomMovies = await collection.findOne({ createdBy: "kareem" });
// }

// module.exports = { main };

const { MongoClient } = require("mongodb");

async function main() {
  const client = new MongoClient(
    "mongodb+srv://kareem345:ig0iFjpXD9NnTCGp@cluster0.llvl7n3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
  try {
    await client.connect();
    return await client;
  } catch (error) {
    console.error("Error connecting to the database:", error);
    throw error;
  }
}

module.exports = { main };
