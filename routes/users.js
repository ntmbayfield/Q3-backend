const express = require('express');
const router = express.Router();
const knex = require('../knex')


/* READ ALL USERS FROM THE USER TABLE */
router.get('/', function(req, res, next) {
    res.send('ALL RECORDS')
})

// READ A SPECIFIC USER FROM THE USER TABLE
router.get('/:userid', (req, res, next) => {
  res.send('ONE RECORD')
})

// CREATE ONE NEW RECORD IN THE USERS TABLE
router.post('/', (req, res, next) => {
  res.send('CREATED RECORD')
})
// UPDATE ONE RECORD IN THE USERS TABLE
router.put('/:userid', (req, res, next) => {
  res.send('UPDATED RECORD')
})
// DELETE ONE RECORD IN THE USERS TABLE
router.delete('/:userid', (req, res, next) => {
  res.send('DELETED RECORD')
})

module.exports = router;
