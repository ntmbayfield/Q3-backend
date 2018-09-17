const express = require('express');
const router = express.Router();
const knex = require('../knex');



/* READ ALL USERS FROM THE DEVICES TABLE */
router.get('/', function (req, res, next) {
  knex('devices')
  .then((data) => {
    console.log('data', data)
    res.send(data)
  })
})

// READ A SPECIFIC USER FROM THE DEVICES TABLE
router.get('/:serialNum', (req, res, next) => {
  knex('devices')
  .where('serialNum', req.params.serialNum)
  .then((data) => {
    console.log('the specific device', data)
    res.send(data)
  })
})

// CREATE ONE NEW RECORD IN THE USERS TABLE
//verify that email address isnt already in database, if it promt user to reset password
//if not in databse, then need to has password before creating userInfo obj


router.post('/', (req, res, next) => {

  let deviceInfo = {
    serialNum: req.body.serialNum
  }

  knex('devices')
    .where('serialNum', req.params.serialNum)
    .then(function(device) {
      console.log(device);

    // was the device found?
      knex('devices')
        .insert(deviceInfo)
        .then((data) => {
          console.log('sucessfully created record of device');
          res.statusCode = 200;
          return res.json(deviceInfo);
          console.log('device has an Id of ');
        })
        .catch(function(error) {
          console.error(error);
          res.statusCode = 500;
          return res.json ();
        })
    })
  });

// UPDATE ONE RECORD IN THE USERS TABLE
router.put('/:serialNum', (req, res, next) => {
  knex('devices')
    .where('serialNum', req.params.serialNum)
    .then(function(device) {
      console.log(device);

      // was the user found?
      if(device.length>0) {
        // we are sure that the user exists
        knex('devices')
        .where('serialNum', req.params.serialNum)
        .update({
          serialNum: req.body.serialNum,
        })
        .return('*')
        .then(function(updatedSerialNum) {
          console.log('successfully updated device');
          res.statusCode = 200;
          return res.json('device successfully updated');
        })
      } else {
        throw new Error('Oops, no device with that serialNum')
      }
    })
    .catch((error) => {
      console.error(error);
      res.statusCode = 500;
      return res.json({
        errors: 'Failed to update device'
      })
    })
  })


// DELETE ONE RECORD IN THE USERS TABLE
router.delete('/:serialNum', (req, res, next) => {
  knex('devices')
    .where('serialNum', req.params.serialNum)
    .del()
    .then((data) => {
      console.log('successfully deleted device');
      res.statusCode = 200;
      return res.json('device successfully deleted');
    })
    .catch((error) => {
      console.error(error);
      res.statusCode = 500;
      return res.json({
        errors: 'Failed to delete device'
      })
    })
  });

module.exports = router;
