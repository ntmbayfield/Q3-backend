var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home Page of the k9-1-1 App' });
});

router.get('/alert/:serialNumber', function(req, res, next) {
  // find the user this device belongs
  // make the call to their emergency contact
  // return status 200 if the call went through, or error code if it didn't
})

module.exports = router;
