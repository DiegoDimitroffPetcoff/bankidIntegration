const {Router} = require('express')
const collectController = require('../Controllers/collectController.js')

const route = Router()

route.get("/collect", async (req, res) => {
    try {
      console.log(bId);
      
      const resp = await collectController(bId);
  
      res.send(resp);
    } catch (error) {
      res.status(500).send(error.message);
    }
  });
  module.exports = route