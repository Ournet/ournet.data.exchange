'use strict';

require('./db/models');

var db = require('vogels-helpers');

function Service() {

}

module.exports = Service;

/**
 * GeoPlace put item
 */
Service.prototype.putRate = function(data) {
	return db.control.put('ExchangeRate', data);
};

/**
 * GeoPlace delete item
 */
Service.prototype.deleteRate = function(id) {
	return db.control.destroy('ExchangeRate', id);
};
