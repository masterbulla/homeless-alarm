var package = require('../package');

function model(user) {
  var model = {
    isAuthenticated: user !== undefined,
    title: package.name + ' v' + package.version
  };
  return model;
}

module.exports = model;