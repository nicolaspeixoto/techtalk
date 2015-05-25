var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send("list all users");
  next();
});

router.post('/', function(req, res, next){
  res.send("create user");
  next();
});

router.delete('/:id', function(req, res, next){
  res.send("delete user id:"  + req.params.id);
  next();
});

router.get('/:id', function(req, res, next){
  res.send("get user id:" + req.params.id);
  next();
});

module.exports = router;
