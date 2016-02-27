var initialData = require('../initial-data');

// Poor-man's initial data
module.exports = function(app) {
  console.log('Importing sample data...');

  initialData(app);
}
