const moment = require('moment-timezone');

function getCurrentTimeInTimezone(timezone = 'UTC') {
    return moment().tz(timezone).format();
}

module.exports = getCurrentTimeInTimezone;
