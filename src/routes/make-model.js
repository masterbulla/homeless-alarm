const pkg = require('../../package')
const toggles = require('../infrastructure/feature-toggles').toggles

const makeModel = (user, host) => ({
  isAuthenticated: user !== null,
  title: `${pkg.name}  v${pkg.version}`,
  toggles,
  user,
  host,
})

module.exports = makeModel
