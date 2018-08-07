const express = require('express');
const router = express.Router();
const knex = require('../knex')

router.get('/', (req, res, next) => {
  knex('medications')
  .then((data) => {
    console.log('data', data)
    res.send(data)
  })
})
// READ ONE record for this table
router.get('/:medicationid   ', (req, res, next) => {
  knex('medications')
  .where('id', req.params.medicationid)
  .then((data) => {
    console.log('data', data)
    res.send(data)
  })
})
// UPDATE ONE record for this table
router.put('/medicationid', (req, res, next) => {
  knex('medications')
  .where('id', req.params.medicationid)
  .then((data) => {
    knex('medications')
    .where('id', req.params.medicationid)
    .update({
      "drug_name": req.body.name,
    })
    .returning ('*')
    .then(function(updatedMedicationInfo) {
      console.log('successfully updated a medication');
      res.statusCode = 200;
      return res.json('medication was successfully updated');
    })

    .returning('*')
    .then(function(updatedUser) {
      console.log('successfully updated a user\'s account');
      res.statusCode = 200;
      return res.json('user successfully updated');
    }) } else {
      throw new Error('Oops, no user with that id')
    }
  })
      re, req.params.medicationsid)
      then(function(servicetype) {
        console.log(servicetype)

        if (servicetype.length>0) {
          knex('servicetypes')
          .where('id', req.params.servicetypeid)
          .update({
            name_of_service: req.body.name_of_service
          })
          .return('*')
          .then(function(updatedServicetype) {
            console.log('successfully updated entry in medications tabes');
            res.statusCode = 200;
            return res.json('medication was successfully updated');
          })
        } else {
          throw new Error('Oops, no medication with that id')
        }
      })
      .catch((error) => {
        console.error(error);
        res.statusCode = 500;
        return res.json({
        errors: 'Failed to update medication with that id'
    })
  })
})


// DELETE ONE record for this table
router.delete('/:medicationid', (req, res, next) => {
  knex('medications')
    .where('id', req.params.medicationid)
    .del()
    .then((data) => {
      console.log('successfully deleted servicetype with provided id');
      res.statusCode = 200;
      return res.json('that entry in the medications table was successfully deleted');
    })
    .catch((error) => {
      console.error(error);
      res.statusCode = 500;
      return res.json({
        errors: 'Failed to delete that entry in the medications table'
      })
    })
  });


module.exports = router;
