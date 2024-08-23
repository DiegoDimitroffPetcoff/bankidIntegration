const { swaggerDocs: v1SwaggerDocs } = require("./swagger.js");
const app = require("./src/app/app.js");

const PORT = process.env.PORT || 3000;
app.listen(3000, () => {
  console.log(`Listening on http://localhost:${PORT}`);
  v1SwaggerDocs(app, PORT);
});
