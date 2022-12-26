const Handlebars = require('handlebars');
const fs = require('fs');

const registerPartials = (partialNames) =>
  partialNames.forEach((partialName) => {
    const partial = fs
      .readFileSync(`${__dirname}/../partials/${partialName}.hbs`, 'utf8')
      .toString();

    Handlebars.registerPartial(partialName, partial);
  });

Handlebars.registerHelper('ifeq', function (a, b, options) {
  if (a == b) {
    return options.fn(this);
  }

  return options.inverse(this);
});

Handlebars.registerHelper('ifnoteq', function (a, b, options) {
  if (a != b) {
    return options.fn(this);
  }

  return options.inverse(this);
});

registerPartials([
  'header',
  'homeProjects',
  'projectDetails',
  'projectImages',
  'moreProjects',
  'experimentsProject',
  'smallScreenBanner',
]);

module.exports = { Handlebars };
