var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  let opr1 = req.body.opr1;
  let opr2 = req.body.opr2;

  let outstr = opr1 + " X " + opr2 + " = ";
  let result = opr1*opr2;

  res.render('index', { title: '結果', output1: outstr, output2: result });
});

module.exports = router;
