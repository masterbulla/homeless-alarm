var featureToggles = require('feature-toggles');
var toggles = require('../../toggles');
featureToggles.load(toggles);

module.exports = featureToggles;