const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "BanK Id Inplementation with Node Js",
      version: "1.0.0",
    },
  },
  apis: ["./server.js"], // files containing annotations as above
};

const swaggerSpec = swaggerJsdoc(options);

const swaggerDocs = (app, port) => {
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.get("/docs", (req, res) => {
    res.setHeader("Content-type", "application/json");
    res.send(swaggerSpec);
  });

  console.log(`Version 1 Docs Are Available at http://localhost:${port}/docs`);
  
};
module.exports = {swaggerDocs}