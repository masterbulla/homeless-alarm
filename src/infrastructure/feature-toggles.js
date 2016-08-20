const featureToggles = require('feature-toggles')

const nodeEnv = process.env.NODE_ENV || 'production'
const toggles = require(`../config/toggles.${nodeEnv}.json`)
featureToggles.load(toggles)

module.exports = featureToggles
