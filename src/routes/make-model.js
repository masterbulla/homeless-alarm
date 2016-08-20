const pkg = require('../../package')
const toggles = require('../infrastructure/feature-toggles').toggles

const makeModel = (user) => ({
  isAuthenticated: user !== undefined,
  title: `${pkg.name}  v${pkg.version}`,
  toggles,
  user,
})

module.exports = makeModel
