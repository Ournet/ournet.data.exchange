'use strict';

var core = require('ournet.core');
var _ = core._;
var models = require('./models');
var internal = {};

function Service() {

}

module.exports = Service;

Service.instance = new Service();

/**
 * GeoPlace put item
 */
Service.prototype.putRate = function(data) {
	return models.ExchangeRate.createAsync(data).then(internal.get);
};

/**
 * GeoPlace delete item
 */
Service.prototype.deleteRate = function(id) {
	return models.ExchangeRate.destroyAsync(id).then(internal.get);
};

internal.get = function(data) {
	if (_.isNull(data) || _.isUndefined(data)) {
		return data;
	}
	if (_.isArray(data)) {
		return data.map(internal.get);
	}
	if (_.isFunction(data.toJSON)) {
		return data.toJSON();
	}
	return data;
};
