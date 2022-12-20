const fs = require('fs');
const { PROJECTS } = require('./projects-data');
const { Handlebars } = require('./handlebars-setup');
// const Handlebars = require('handlebars');
// const Handlebars = setupHandlebars();

// const registerPartials = (partialNames) =>
//   partialNames.forEach((partialName) => {
//     const partial = fs
//       .readFileSync(`${__dirname}/../partials/${partialName}.hbs`, 'utf8')
//       .toString();

//     Handlebars.registerPartial(partialName, partial);
//   });

const shuffleArray = (array) => {
  const result = [...array];

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
};

const getOthersProjectsList = (projectId) => {
  const projects = PROJECTS.filter(({ id }) => id !== projectId);

  return shuffleArray(projects);
};

const buildHTML = (inputFilePath, outputFilePath, data) => {
  // registerPartials([
  //   'header',
  //   'homeProjects',
  //   'projectDetails',
  //   'projectImages',
  //   'moreProjects',
  //   'experimentsProject',
  // ]);
  const source = fs.readFileSync(inputFilePath, 'utf8').toString();
  const template = Handlebars.compile(source);

  fs.writeFileSync(outputFilePath, template(data), (e) => console.log(e));
};

module.exports = {
  shuffleArray,
  getOthersProjectsList,
  buildHTML,
};
