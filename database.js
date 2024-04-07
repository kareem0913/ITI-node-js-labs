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
