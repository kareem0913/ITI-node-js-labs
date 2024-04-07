const { MongoClient } = require("mongodb");

async function main() {
  const client = new MongoClient();
  // url
  try {
    await client.connect();
    return await client;
  } catch (error) {
    console.error("Error connecting to the database:", error);
    throw error;
  }
}

module.exports = { main };
