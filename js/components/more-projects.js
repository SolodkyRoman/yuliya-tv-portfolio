import { getOthersProjectsList } from '../utils.js';

class MoreProjects extends HTMLElement {
    constructor() {
        super();
        this.projects = getOthersProjectsList();
    }

    getProjectTemplate(project) {
        return `
            <a href="project.html?name=${project.id}" class="project-link">
                <img src="${project.thumbnailSmall}" alt="gallette-1" class="project-thumbnail">
                <div class="thumbnail-hover">
                    <h3 class="project-name">${project.name}</h3>
                    <span class="project-label">${project.labels.join(' / ')}</span>
                </div>
            </a>
        `
    }

    getProjectsGallery() {
        return `
            <div class="other-projects-gallery">
                ${this.projects.map(project => this.getProjectTemplate(project)).join('')}
            </div>`;
    }

    connectedCallback() {
        this.innerHTML = `
            <div class="more-projects">
                <h2 class="more-heading">More projects</h2>
                ${this.getProjectsGallery()}
            </div>
        `;
    }
}

customElements.define('more-projects-component', MoreProjects);
