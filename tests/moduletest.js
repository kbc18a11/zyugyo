'use strict';
const chai = require('chai');
const assert = chai.assert;
const cheerio = require('cheerio');
const multiplication = require('../modules/multiplication');


// テスト本体
describe('モジュールテスト', async function () {
    it('Multiplication testing input opr1:2 opr2:3', async function () {
        const opr1 = 2;
        const opr2 = 3;
        const result = multiplication(2, 3);

        assert.equal(result, 6);
    });
});
