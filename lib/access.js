'use strict';

require('./db/models');

var utils = require('./utils');
var data = require('./data');
var _ = utils._;
var db = require('vogels-helpers');
var internal = {};

/**
 * Access class
 */
function Service() {

}

module.exports = Service;

Service.instance = new Service();

/**
 * Rate get item by id
 */
Service.prototype.getRate = function(params) {
	return db.access.getItem('ExchangeRate', params.key, {
			format: 'json'
		})
		.then(function(rate) {
			if (!rate) {
				return rate;
			}
			if (params.fillCurrency) {
				rate.currency = data.getCurrency(rate.currency);
			}
			return rate;
		});
};

/**
 * Rate get items by ids
 */
Service.prototype.getRates = function(params) {
	if (!params.keys || params.keys.length === 0) {
		return Promise.reject(new Error('Invalid params keys', params));
	}

	return db.access.getItems('ExchangeRate', params.keys, {
			format: 'json'
		})
		.then(function(rates) {
			if (!rates) {
				return rates;
			}
			rates = internal.orderRates(rates, params.keys);
			if (params.fillCurrency) {
				rates.forEach(function(rate) {
					var c = rate.currency;
					rate.currency = data.getCurrency(rate.currency);
					if (!rate.currency) {
						throw new Error('Cannot find currency ' + c);
					}
				});
			}
			return rates;
		});
};

/**
 * Rate get items by ids
 */
Service.prototype.getFirstRate = function(params) {
	return this.getRates(params)
		.then(function(rates) {
			if (rates && rates.length > 0) {
				return rates[0];
			}
			return null;
		});
};

/**
 * Rate get items by ids
 */
Service.prototype.getFirstDateRates = function(params) {
	return this.getRates(params)
		.then(function(rates) {
			if (!rates || rates.length === 0) {
				return rates;
			}
			var dates = [];
			rates = _.groupBy(rates, function(rate) {
				var date = rate.key.substr(2, 10);
				dates.push(date);
				return date;
			});

			dates = _.sortBy(dates);

			return rates[dates[dates.length - 1]];
		});
};

/**
 * Rate get items by ids
 */
Service.prototype.getRatesBySource = function(params) {
	var self = this;
	params.date = new Date(params.date);
	params.sources = params.sources || data.getSources(params.country).map(function(source) {
		return source.id;
	});

	params.currencies = params.currencies || data.getCurrencies(params.country).map(function(currency) {
		return currency.code;
	});

	var keys = [];

	params.sources.forEach(function(source) {
		params.currencies.forEach(function(currency) {
			keys.push(data.formatRateKey(params.country, params.date, source, currency));
		});
	});

	if (keys.length === 0) {
		// core.logger.error('No keys', params);
		return Promise.resolve();
	}

	function getCurrency(rate) {
		rate.currency = data.getCurrency(rate.currency);
	}

	return self.getRates({
		keys: keys
	}).then(function(rates) {
		if (!rates) {
			return rates;
		}
		rates = internal.orderRates(rates, keys);
		rates = _.groupBy(rates, 'source');
		var result = [];
		for (var id in rates) {
			id = parseInt(id);
			var source = data.getSource(params.country, id);
			if (!source) {
				continue;
			}
			//console.log('for source', params.country, id, 'got', source);
			var list = rates[id];
			if (list.length === 0) {
				continue;
			}
			result.push({
				source: source,
				rates: list
			});
			list.forEach(getCurrency);
		}

		return result;
	});
};

Service.prototype.getCountries = function() {
	return Promise.resolve(data.getCountries());
};

Service.prototype.getSources = function(params) {
	return Promise.resolve(data.getSources(params.country));
};

internal.makeRate = function(rate) {
	rate.source = data.getSource(rate.country, rate.source);
	rate.currency = data.getCurrency(rate.currency);
};

internal.orderRates = function(rates, keys) {
	return _.sortBy(rates, function(rate) {
		return keys.indexOf(rate.key);
	});
};
