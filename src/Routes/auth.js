const { Router } = require("express");
const authController = require("../Controllers/authController");

const route = Router();

route.get("/", async (req, res) => {
  const userIP = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  try {
    bId = await authController(userIP);

    res.send(bId);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = route;
