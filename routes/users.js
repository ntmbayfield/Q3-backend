const express = require('express');
const router = express.Router();
const knex = require('../knex')


/* READ ALL USERS FROM THE USER TABLE */
router.get('/', function(req, res, next) {
  knex('users')
  .then((data) => {
    console.log('data', data)
    res.send(data)
  })
})

// READ A SPECIFIC USER FROM THE USER TABLE
router.get('/:userid', (req, res, next) => {
  knex('users')
  .where('id', req.params.userid)
  .then((data) => {
    console.log('the specific user', data)
    res.send(data)
  })
})

// CREATE ONE NEW RECORD IN THE USERS TABLE
router.post('/', (req, res, next) => {
  let userInfo = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    condition: req.body.condition,
    emergency_contact: req.body.emergency_contact
      // hashpassword: "todo"
  };
  knex('users')
    .insert(userInfo)
    .then((data) => {
      console.log('sucessfully created user account');
      res.statusCode = 200;
      return res.json(userInfo);
      console.log('user has an Id of ');
    })
    .catch(function(error) {
      console.error(error);
      res.statusCode = 500;
      return res.json({
        errors: ['Failed to create user account']
      })
    });
})

// UPDATE ONE RECORD IN THE USERS TABLE
router.put('/:userid', (req, res, next) => {
  knex('users')
    .where('id', req.params.userid)
    .then(function(user) {
      console.log(user);

      // was the user found?
      if(user.length>0) {
        // we are sure that the user exists
        knex('users')
        .where('id', req.params.userid)
        .update({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
          condition: req.body.condition,
          emergency_contact: req.body.emergency_contact
        })
        .return('*')
        .then(function(updatedUser) {
          console.log('successfully updated a user\'s account');
          res.statusCode = 200;
          return res.json('user successfully updated');
        })
      } else {
        throw new Error('Oops, no user with that id')
      }
    })
    .catch((error) => {
      console.error(error);
      res.statusCode = 500;
      return res.json({
        errors: 'Failed to update user\'s account'
    })
  })
})


// DELETE ONE RECORD IN THE USERS TABLE
router.delete('/:userid', (req, res, next) => {
  knex('users')
    .where('id', req.params.userid)
    .del()
    .then((data) => {
      console.log('successfully deleted a user\'s account');
      res.statusCode = 200;
      return res.json('user successfully deleted');
    })
    .catch((error) => {
      console.error(error);
      res.statusCode = 500;
      return res.json({
        errors: 'Failed to delete user\'s account'
      })
    })
  });

module.exports = router;
