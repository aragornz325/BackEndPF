const express = require('express')
const Chance = require('chance');
const router = express.Router()


var chance = new Chance

router.get('/camas', (req, res)=>{

  res.json({
    name: 'cama single',
    habitacion: 4,
  })

});

router.get('/camas/:camasId', (req, res) => {
  const {camasId} = req.params;

  res.json(
    {
      id: camasId,
      name: 'cama single',
      habitacion: 4,
    },
  )

});

module.exports = router
