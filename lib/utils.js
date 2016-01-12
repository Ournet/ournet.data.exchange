'use strict';

var utils = require('ournet.utils');
var _ = require('lodash');
var Promise = require('bluebird');

module.exports = _.assign({
	_: _,
	Promise: Promise
}, utils);
