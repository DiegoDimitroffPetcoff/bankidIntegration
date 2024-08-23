const express = require("express");
const app = express();

const authRoute = require("../Routes/auth.js");
const collectRoute = require("../Routes/collect.js");
const signRoute = require("../Routes/sign.js");

app.use(express.json());
app.use(authRoute);
app.use(collectRoute);
app.use(signRoute);

module.exports = app;
