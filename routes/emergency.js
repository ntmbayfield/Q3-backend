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
      //console.log('data', data)
      userInfo = data;
      userInfo.from = "+16504851985"; //your bandwidth number
      userInfo.to = "+15109383112"; //my phone number
      console.log('userInfo contains the following data ', userInfo);
      res.send(data)
    })
    .then(() => {
      console.log('user info is: ', userInfo);
      sendMessage(userInfo);
    })
});

  var sendMessage = function(params){
    client.Message.send({
      //returns a promise
      from : params.from, //your bandwidth number
      to   : params.to, //number to send to
      text : `ATTENTION: ${params[0].emergency_contact_name}!!! This is an automated alert message from the k9-1-1 App.  ${params[0].name} requires emergency medical services for the following medical condition/s ${params[0].condition} at GPS coordinates 135.7 and 96.4.`,
      media: "https://s3.amazonaws.com/bwdemos/logo.png"
    })
    //calls back the message id number and catches any errors
    .then(function(message){
      console.log(message);
      return client.Message.get(message.id)
      //access ID from json can also get to and from
    })
    // catches any errors
    .catch(function(err){
      console.log(err)
    })
  }

module.exports = router
