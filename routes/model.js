var package = require('../package');

function model(user) {
  var model = {
    isAuthenticated: user !== undefined,
    title: package.name + ' v' + package.version
  };
  console.log('model', JSON.stringify(model));
  return model;
}

module.exports = model;