'use strict';

var core = require('ournet.core');
var Promise = core.Promise;
var Query = require('../../node_modules/vogels/lib/query.js');

Query.prototype.execAsync = Promise.promisify(Query.prototype.exec);

var vogels = require('vogels');
var Joi = require('joi');
var models = module.exports;

models.ExchangeRate = vogels.define('ExchangeRate', {
	tableName: 'ExchangeRates',
	hashKey: 'key',
	schema: {
		key: Joi.string().required(),
		source: Joi.number().integer().required(),
		country: Joi.string().length(2).required(),
		date: Joi.string().length(10).required(),
		currency: Joi.string().length(3).required(),
		multiplier: Joi.number().integer().required(),

		buy: Joi.number().precision(5).required(),
		sale: Joi.number().precision(5).required(),

		buy1d: Joi.number().precision(5),
		sale1d: Joi.number().precision(5),

		buy7d: Joi.number().precision(5),
		sale7d: Joi.number().precision(5),

		buy30d: Joi.number().precision(5),
		sale30d: Joi.number().precision(5)
	}
});

Promise.promisifyAll(models.ExchangeRate);
