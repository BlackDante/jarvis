var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
  // Get post vars
  var body  = req.body;
  var client = req.db;

  client.open(function (err) {
    if (err) throw err;
    client.collection('jarvis', function (err, collection) {
      if (err) throw err;
      collection.insert({
        type: 'Prerolls',
        data: body.Prerolls
      });
      collection.insert({
        type: 'Postrolls',
        data: body.Postrolls
      });
      collection.insert({
        data: 'Midrolls',
        Midrolls: body.Midrolls
      });
      client.close();
    });
  });

  res.send(body.test + '');
});

module.exports = router;
