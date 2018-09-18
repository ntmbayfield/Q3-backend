const express = require('express');
const router = express.Router();
const knex = require('../knex');

//required to for bandwidth
var Bandwidth = require("node-bandwidth");
var app = express();
var bodyParser = require("body-parser");
var http = require("http").Server(app);

var client = new Bandwidth({
  userId    : "u-ihgnxw6gs6dsnxw27ez6bvq",  // note, this is not the same as the username you used to login to the portal
  apiToken  : "t-prxgsh3sstdwn4npydm2xhq",
  apiSecret : "iv7dlcseit6j6nvr7mbramieauuipaaqnn7zxei"
});


//retrieve
router.get('/:user_id', function (req, res, next) {
  let userInfo;
  console.log('emergency endpoint hit');
  knex('users')
    .select()
    .where('id', req.params.user_id)
    .then((data) => {
      console.log('data', data)
      userInfo = data;
      res.send(data)
    })
    .then(() => {
      console.log('user info is: ', userInfo);
    })
})

module.exports = router
