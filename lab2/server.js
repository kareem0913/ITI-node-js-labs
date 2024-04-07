const express = require("express");
const http = require("http");
const { main } = require("./database");
const { Collection } = require("mongodb");
const app = express();

const server = http.createServer(app);
app.use(express.json()); // this is built in middleware in express to convert request to json data

// routes
app.get("/get/:id", async (req, res) => {
  try {
    const userId = Number(req.params.id);
    const client = await main();
    const db = client.db("sample_mflix");
    const collection = db.collection("users");
    const userData = await collection.findOne({ id: userId });
    client.close();
    res.status(200).json({ user: userData });
  } catch (error) {
    res.status(500).json({ error: "Failed to connect to the database" });
  }
});

app.post("/addUser", async (req, res) => {
  try {
    const client = await main();
    const db = client.db("sample_mflix");
    const collection = db.collection("users");
    await collection.insertOne(req.body);
    client.close();
    res.status(201).json({ success: "data is added successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to connect to the database" });
  }
});

app.put("/edit/:id", async (req, res) => {
  try {
    const userId = Number(req.params.id);
    const client = await main();
    const db = client.db("sample_mflix");
    const collection = db.collection("users");
    await collection.updateOne({ id: userId }, { $set: req.body });
    res.status(201).json({ success: "data is added successfully  " + userId });
    client.close();
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

app.delete("/delete/:id", async (req, res) => {
  try {
    const userId = Number(req.params.id);
    const client = await main();
    const db = client.db("sample_mflix");
    const collection = db.collection("users");
    await collection.deleteOne({ id: userId });
    client.close();
    res.status(200).json({ success: "user is successfully deleted" });
  } catch (error) {
    res.status(500).json({ error: "Failed to connect to the database" });
  }
});

const PORT = 3000;
async function startServer() {
  await main();
  server.listen(PORT, () => {
    console.log(`server is listen on prot ${PORT}`);
  });
}
startServer();
