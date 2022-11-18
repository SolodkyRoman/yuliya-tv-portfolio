import { PROJECTS } from './projects-data.js';

const shuffleArray = (array) => {
  const result = [...array];

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
};

const getProjectId = () => window.location.pathname.split('/').pop();

const getOthersProjectsList = () => {
  const projectId = getProjectId();
  const projects = PROJECTS.filter(({ id }) => id !== projectId);

  return shuffleArray(projects);
};

const getProject = () => {
  const projectId = getProjectId();
  const project = PROJECTS.find(({ id }) => id === projectId);
  console.log(project);
  if (!project) {
    window.location = 'index.html';
  }

  return project;
};

const handleAppearanceInViewport = (element, callback) => {
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        callback();
        observer.disconnect();
      }
    },
    { threshold: 0.3 },
  );
  observer.observe(element);
};

const loadImages = async (images) =>
  new Promise((res) => {
    const loadedImages = [];
    let loadedImagesCounter = 0;
    let failedImagesCounter = 0;

    const checkIfLoadingFinished = () => {
      const allImagesProcessed =
        loadedImagesCounter + failedImagesCounter === images.length;

      if (allImagesProcessed) {
        res(loadedImages);
      }
    };

    images.forEach((src, index) => {
      const image = new Image();
      image.onload = () => {
        loadedImages[index] = src;
        loadedImagesCounter++;
        checkIfLoadingFinished();
      };
      image.onerror = () => {
        failedImagesCounter++;
        checkIfLoadingFinished();
      };
      image.src = src;
    });
  });

const showPreloader = () => {
  document.body.classList.add('block-scroll');
  document.getElementById('preloader').classList.add('active');
};

const hidePreloader = () => {
  document.body.classList.remove('block-scroll');
  document.getElementById('preloader').classList.remove('active');
};

export {
  shuffleArray,
  getProjectId,
  getOthersProjectsList,
  getProject,
  handleAppearanceInViewport,
  loadImages,
  showPreloader,
  hidePreloader,
};
