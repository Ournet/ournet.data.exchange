'use strict';

require('../models');

var db = require('vogels-helpers');

function Service() {

}

module.exports = Service;

Service.instance = new Service();

/**
 * GeoPlace put item
 */
Service.prototype.putRate = function(data) {
	return db.control.put('ExchangeRate', data, {
		format: 'json'
	});
};

/**
 * GeoPlace delete item
 */
Service.prototype.deleteRate = function(id) {
	return db.control.destroy('ExchangeRate', id, {
		format: 'json'
	});
};
