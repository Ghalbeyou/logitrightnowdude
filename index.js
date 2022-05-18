const log = require('./types/log')
const error = require('./types/error')
const custom = require('./types/custom')
const warning = require('./types/warning')
exports.log = function(msg){log.log(msg)}
exports.error = function(msg){error.error(msg)}
exports.warning = function(msg){warning.warning(msg)}
exports.custom = function(type, msg){custom.custom(type, msg)}