const pkg = require('../../package')

const makeModel = (user) => ({
  isAuthenticated: user !== undefined,
  title: `${pkg.name}  v${pkg.version}`,
  user,
})

module.exports = makeModel
