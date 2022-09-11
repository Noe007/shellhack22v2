var express = require('express');
var router = express.Router();
const db = require('./db-db');






/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/users', db.getUsers);

module.exports = router;
