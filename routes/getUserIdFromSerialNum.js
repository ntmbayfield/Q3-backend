const express = require('express');
const router = express.Router();
const knex = require('../knex')

// READ A SPECIFIC ENTRY FROM THE DEVICES TABLE
router.get('/:serialNum', (req, res, next) => {
  knex('devices_users')
  .select('user_id')
  .where('serialNum', req.params.serialNum)
  .then((data) => {
    console.log('data', data)
    res.send(data)
  })
})

module.exports = router;
