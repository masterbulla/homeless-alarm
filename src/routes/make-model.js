const pkg = require('../../package')
const toggles = require('../infrastructure/feature-toggles').toggles
const Chance = require('chance')

const chance = new Chance()

const makeModel = (user, host) => ({
  isAuthenticated: user !== null,
  title: `${pkg.name}  v${pkg.version}`,
  toggles,
  user,
  host,
  hashtag: chance.hashtag(),
})

module.exports = makeModel
