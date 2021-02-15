'use strict';
const chai = require('chai');
const assert = chai.assert;
const cheerio = require('cheerio');
const multiplication = require('../modules/multiplication');
const judgmentPrimeNumber = require('../modules/judgmentPrimeNumber');


// テスト本体
describe('モジュールテスト', async function () {
    it('Multiplication testing input opr1:2 opr2:3', async function () {
        const opr1 = 2;
        const opr2 = 3;
        const result = multiplication(opr1, opr2);

        assert.equal(result, 6);
    });

    it('judgmentPrimeNumber testing input num:7', async function () {
        const num = 7;
        const result = judgmentPrimeNumber(num);

        assert.equal(result, true);
    });
});
