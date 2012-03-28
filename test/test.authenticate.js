var assert = require('assert');
var auth = require('../lib/authenticate');
var nock = require('nock');
var express = require('express');
var configurations = module.exports;
var app = express.createServer();
var settings = require('../settings')(app, configurations, express);

var authUrl = settings.options.authUrl + '/verify';
var siteUrl = settings.options.domain + ':' + settings.options.authPort;
var qs = { assertion: '1a2b3c', audience: siteUrl };

suite('login', function() {
  test('user should successfully log in', function() {
    var scope = nock(authUrl)
                .post('', qs)
                .reply(200, { status: 'okay', email: 'bela@test.org' });

    var params = {
      body: { bid_assertion: qs.assertion }
    }

    var authResp = auth.verify(params, settings, function(error, email) { });
    assert.notEqual(authResp, true);
  });

  test('user should fail log in', function() {
    var scope = nock(authUrl)
                .post('', qs)
                .reply(500, { status: 'invalid' });

    var params = {
      body: { }
    }

    var authResp = auth.verify(params, settings, function(error, email) { });
    assert.equal(authResp, false);
  });
});
