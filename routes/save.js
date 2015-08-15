var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var server = new mongodb.Server('127.0.0.1', 27017, {});
var client = new mongodb.Db('jarvis', server, { w:1 });

/* GET home page. */
router.post('/', function(req, res, next) {
  // Get post vars
  var body  = req.body;

  client.open(function (err) {
    if (err) throw err;
    client.collection('jarvis', function (err, collection) {
        if (err) throw err;
        collection.insert({
            dasdad: 'dsadsadadadas'
        });
    });
  });

  res.send(body.test + '');
});

module.exports = router;
