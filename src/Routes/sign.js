const { Router } = require("express");
const signController = require("../Controllers/signController.js");
const { swaggerDocs: v1SwaggerDocs } = require("../../swagger");
const route = Router();

route.get("/sign", async (req, res) => {
  const userIP = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  try {

    const resp = await signController(bId,userIP);

    res.send(resp);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = route;
