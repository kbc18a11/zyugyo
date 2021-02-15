'use strict';
const chai = require('chai');
const assert = chai.assert;
const request = require('request');
const cheerio = require('cheerio');

// テスト本体
describe('Web システムテスト', async function () {
    it('Access with GET Method return 200', async function () {
        request.get({ url: 'http://localhost:3000' }, function (err, response, body) {
            assert.equal(response.statusCode, 200);
        });
    });

    it('/ testing input opr1:2 opr2:3', async function () {
        request.post({ url: 'http://localhost:3000', form: { opr1: 2, opr2: 3 } }, function (err, response, body) {
            const $ = cheerio.load(body);
            const result = $('#result1').text();
            assert.equal(result, 6);
        });
    });

    it('/primenumber testing input num:7', async function () {
        request.post({ url: 'http://localhost:3000/primenumber', form: { num: 7 } }, function (err, response, body) {
            const $ = cheerio.load(body);
            const result = $('#result2').text();
            assert.equal(result, '7は素数やんけ！！');
        });
    });
});
