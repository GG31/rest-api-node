var express = require('express');
var router = express.Router();

router.route('/')
   .get(function(req, res) {
      res.send("plop");
   });

module.exports = router;
