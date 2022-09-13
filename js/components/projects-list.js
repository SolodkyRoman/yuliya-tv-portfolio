import { PROJECTS } from '../projects-data.js';

class ProjectsList extends HTMLElement {
    constructor() {
        super();
    }

    getProjectLabels(labels) {
        return labels.map(label => `<span class="category">${label}</span>`).join('');
    }

    getProjectTemplate(project) {
        return `
            <div class="project">
                <div class="meta">
                    <div class="name">${project.name}</div>
                    <div class="divider"></div>
                    <div class="categories">
                        ${this.getProjectLabels(project.labels)}
                    </div>
                </div>
                <a href="project.html?name=${project.id}" class="project-link">
                    <img src="${project.thumbnailBig}" alt="Utopia Project" class="thumbnail">
                </a>
            </div>
        `
    }

    getProjectsList() {
        return PROJECTS.map((project) => this.getProjectTemplate(project)).join('');
    }

    connectedCallback() {
        this.innerHTML = `
            <div class="works" id="projects">
                ${this.getProjectsList()}
            </div>
        `;
    }
}

customElements.define('projects-list-component', ProjectsList);
