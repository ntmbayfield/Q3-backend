const express = require('express');
const router = express.Router();
const knex = require('../knex')

// READ ALL records for this table
router.get('/', (req, res, next) => {
  knex('servicetypes')
  .then((data) => {
    console.log('data', data)
    res.send(data)
  })
})
// READ ONE record for this table
router.get('/:servicetypeid', (req, res, next) => {
  knex('servicetypes')
  .where('id', req.params.servicetypeid)
  .then((data) => {
    console.log('data', data)
    res.send(data)
  })
})
// UPDATE ONE record for this table
router.put('/:servicetypeid', (req, res, next) => {
  knex('servicetypes')
  .where('id', req.params.servicetypeid)
  .then((data) => {
    knex('servicetypes')
    .where('id', req.params.servicetypeid)
    .limit(1)
    .update({
      "name_of_service": req.body.name_of_service
    })
    .returning('*')
    .then((data) => {
      res.json(data[0])
    })
  })
  .catch((err) => {
    next(err)
  })
})

// UPDATE ONE record for this table
router.put('/:servicetypeid', (req, res, next) => {
  knex('servicetypes')
      .where('id', req.params.servicetypeid)
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
          console.log('successfully updated servicetype');
          res.statusCode = 200;
          return res.json('servicetype successfully updated');
        })
      } else {
        throw new Error('Oops, no servicetype with that id')
      }
    })
    .catch((error) => {
      console.error(error);
      res.statusCode = 500;
      return res.json({
        errors: 'Failed to update servicetype with that id'
    })
  })
})


// DELETE ONE record for this table
router.delete('/:servicetypeid', (req, res, next) => {
  knex('servicetypes')
    .where('id', req.params.servicetypeid)
    .del()
    .then((data) => {
      console.log('successfully deleted servicetype with provided id');
      res.statusCode = 200;
      return res.json('servicetype was successfully deleted');
    })
    .catch((error) => {
      console.error(error);
      res.statusCode = 500;
      return res.json({
        errors: 'Failed to delete that servicetype'
      })
    })
  });
module.exports = router
