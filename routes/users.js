var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send("list all users");
  next();
});

router.post('/', function(req, res, next){
	res.send("create user");
});

router.delete('/:id', function(req, res, next){
	res.send("delete user id:"  + req.params.id);
});

router.get('/:id', function(req, res, next){
	res.send("get user id:" + req.params.id);
});

module.exports = router;
