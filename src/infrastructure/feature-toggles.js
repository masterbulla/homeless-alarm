const featureToggles = require('feature-toggles');
const toggles = require('../../toggles');
featureToggles.load(toggles);

module.exports = featureToggles;