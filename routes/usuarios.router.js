const express = require('express')
const Chance = require('chance');
const router = express.Router()


var chance = new Chance

router.get('/usuarios', (req, res)=> {

  const { limit, offset } = req.query;
  if(limit & offset) {
    res.json({
      limit,
      offset
    })
  }else {
    res.send('no hay parametros');
  }


})

module.exports = router
