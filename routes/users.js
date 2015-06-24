var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.send("list all users");
});

router.post('/', function(req, res){
  res.send("create user");
});

router.delete('/:id', function(req, res){
  res.send("delete user id:"  + req.params.id);
});

router.get('/:id', function(req, res){
  res.send("get user id:" + req.params.id);
});

module.exports = router;
