// Poor-man's initial data
module.exports = function importAll(app) {

  console.log(' => Importing cards...');
  console.log('\t => Importing card types...');
  app.models.CardType.create(require('./card-types.json'));

  console.log('\t => Importing card families...');
  app.models.CardFamily.create(require('./card-families.json'));

  console.log('\t => Importing card elements...');
  app.models.CardElement.create(require('./card-elements.json'));

  console.log('\t => Importing card templates...');
  app.models.CardTemplate.create(require('./card-templates.json'));

  console.log('\t => Importing cards...');
  app.models.Card.create(require('./cards.json'));

  console.log(' => Importing everything else...');
  console.log('\t => Importing titles...');
  app.models.Title.create(require('./titles.json'));

  console.log('Import finished.\n');
}
