const featureToggles = require('feature-toggles');
const toggles = require('../config/toggles.' + process.env.NODE_ENV || 'production' + '.json');
featureToggles.load(toggles);

module.exports = featureToggles;