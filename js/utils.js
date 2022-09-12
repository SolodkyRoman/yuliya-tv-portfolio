import { PROJECTS } from './projects-data.js';

const shuffleArray = array => {
    const result = [...array];

    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }

    return result;
}

const getPageName = () => window.location.search.split('=').pop();

const getOthersProjectsList = () => {
    const currentProjectId = getPageName();
    console.log(window.location.search);
    const projects = PROJECTS.filter(({ id }) => id !== currentProjectId);

    return shuffleArray(projects);
}

const getProject = () => {
    const currentProjectId = getPageName();
    console.log(currentProjectId);
    const project = PROJECTS.find(({ id }) => id === currentProjectId);

    if (!project) {
        // window.location = 'index.html';
    }

    return project;
}

const handleAppearanceInViewport = (element, callback) => {
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            callback();
            observer.disconnect();
        }
    }, { threshold: 0.3 });
    observer.observe(element);
}

export {
    shuffleArray,
    getPageName,
    getOthersProjectsList,
    getProject,
    handleAppearanceInViewport
};


