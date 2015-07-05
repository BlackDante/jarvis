var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.set('Content-Type', 'text/xml');
  res.send('<?xml version="1.0" encoding="UTF-8"?>' +
'<note>' +
	'<to>Tove</to>' +
	'<from>Jani</from>' +
	'<heading>Reminder</heading>' +
	'<body>Don\'t forget me this weekend!</body>' +
'</note>');
});

module.exports = router;
