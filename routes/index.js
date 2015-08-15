var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var client = req.db;

  client.open(function (err) {
    if (err) throw err;
    client.collection('jarvis', function (err, collection) {
      if (err) throw err;
      collection.find({ type: 'Prerolls' }).toArray(function (err, results) {
        if (err) throw err;
        console.log(results[0].data);
        res.render('index', {
          title: 'Jarvis',
          prerolls: results[0].data
        });
      });
    });
  });
});

module.exports = router;
