var express = require('express');
var router = express.Router();
const multiplication = require('../modules/multiplication');
const judgmentPrimeNumber = require('../modules/judgmentPrimeNumber');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function (req, res, next) {
  let opr1 = req.body.opr1;
  let opr2 = req.body.opr2;

  let outstr = opr1 + " X " + opr2 + " = ";
  let result = multiplication(opr1, opr2);

  res.render('index', { title: '結果', output1: outstr, output2: result });
});

/**
 * 素数
 * URIパラメータ num で数値を指定します
 */
router.post('/primenumber', function (req, res, next) {
  const num = Number(req.body.num);
  const result = judgmentPrimeNumber(num) ? `${num}は素数やんけ！！` : `${num}は素数じゃないやんけ！！`;

  return res.render('index', { title: '結果', answer: result });
});


module.exports = router;
