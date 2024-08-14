const express = require("express");
const createAuth = require("./src/Services/auth");
const collect = require("./src/Services/collect");
const app = express();
let bId;
app.use(express.json());
app.get("/", async (req, res) => {
  try {
    bId = await createAuth();

    res.send(bId);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get("/collect", async (req, res) => {
  try {
    const resp = await collect(bId);

    res.send(resp);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
