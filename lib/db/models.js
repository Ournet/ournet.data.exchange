'use strict';

var vogels = require('vogels-helpers');
var schemas = require('./schemas');
var ExchangeRateSchema = schemas.ExchangeRateSchema;
// var NAMES = ['ExchangeRate'];

exports.ExchangeRate = vogels.define('ExchangeRate', {
	tableName: 'ExchangeRates',
	hashKey: 'key',
	schema: ExchangeRateSchema
});
