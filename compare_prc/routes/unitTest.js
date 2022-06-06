var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/unitTest', function(req, res, next) {
  res.render('unitTestMain', { title: 'unit test page' });
});

module.exports = router;