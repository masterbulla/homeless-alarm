const featureToggles = require('feature-toggles');
const toggles = require('../config/toggles.dev.json');
featureToggles.load(toggles);

module.exports = featureToggles;