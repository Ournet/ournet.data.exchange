'use strict';

var utils = require('./utils');
var _ = utils._;
var Promise = utils.Promise;
var cache = require('memory-cache');
var AccessService = require('./access');
var util = require('util');
var internal = {};

function Service() {
	AccessService.call(this);
}

util.inherits(Service, AccessService);

module.exports = Service;

Service.instance = new Service();

Service.prototype.getRates = function(params, options) {
	var key = ['rates', JSON.stringify(params.keys)].join('-');
	var result = cache.get(key);
	if (result) {
		return Promise.resolve(result);
	}

	var defaults = {
		ttl: 60,
		cache: true
	};

	options = options && _.defaults(options, defaults) || defaults;

	return internal.call(this, 'getRates', key, params, options);
};

Service.prototype.getFirstDateRates = function(params, options) {
	var key = ['rates-date', JSON.stringify(params)].join('-');
	var result = cache.get(key);
	if (result) {
		return Promise.resolve(result);
	}

	var defaults = {
		ttl: 60 * 10,
		cache: true
	};

	options = options && _.defaults(options, defaults) || defaults;

	return internal.call(this, 'getFirstDateRates', key, params, options);
};

Service.prototype.getRatesBySource = function(params, options) {
	var key = ['rates-source', JSON.stringify(params)].join('-');
	var result = cache.get(key);
	if (result) {
		return Promise.resolve(result);
	}

	var defaults = {
		ttl: 60 * 10,
		cache: true
	};

	options = options && _.defaults(options, defaults) || defaults;

	return internal.call(this, 'getRatesBySource', key, params, options);
};


internal.call = function(self, name, key, params, options) {
	//console.log('calling', name, params, key);
	return AccessService.prototype[name].call(self, params)
		.then(function(result) {
			if (result && options.cache) {
				cache.put(key, result, options.ttl * 1000);
			}
			return result;
		});
};
