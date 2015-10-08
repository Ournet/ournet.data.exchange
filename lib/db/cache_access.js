'use strict';

var core = require('ournet.core');
var _ = core._;
var Promise = core.Promise;
var cache = new core.MemoryCache();
var AccessService = require('./access.js');
var internal = {};

function Service() {
	AccessService.call(this);
}

Service.prototype = new AccessService();

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

	return internal.call('getRates', key, params, options);
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

	return internal.call('getFirstDateRates', key, params, options);
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

	return internal.call('getRatesBySource', key, params, options);
};


internal.call = function(name, key, params, options) {
	//console.log('calling', name, params, key);
	return AccessService.prototype[name].call(this, params).then(function(result) {
		if (result && options.cache) {
			cache.set(key, result, options.ttl);
		}
		return result;
	});
};
