const { buildHTML, getOthersProjectsList } = require('./js/utils');

const { PROJECTS } = require('./js/projects-data');

const buildHomePage = () =>
  buildHTML(
    __dirname + '/views/index.hbs',
    __dirname + '/../public/index.html',
    {
      projects: PROJECTS,
      isHomepage: true,
    },
  );

const buildProjectPages = () => {
  PROJECTS.forEach((project) => {
    const otherProjects = getOthersProjectsList(project.id).map((project) => ({
      ...project,
      labels: project.labels.join(' / '),
    }));

    buildHTML(
      `${__dirname}/views/project.hbs`,
      `${__dirname}/../public/${project.id}.html`,
      {
        project,
        otherProjects,
      },
    );
  });
};

const buildAboutPage = () =>
  buildHTML(
    __dirname + '/views/about.hbs',
    __dirname + '/../public/about.html',
  );

buildHomePage();
buildProjectPages();
buildAboutPage();
