const express = require('express');
const router = express.Router();
const knex = require('../knex')

//add call to hasj and salt password , then use bcrypt to compare that hash to the one stord in the database (knex call)

module.exports = router;
