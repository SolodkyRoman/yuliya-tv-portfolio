import { getProject } from '../utils.js';

class ProjectDetails extends HTMLElement {
  constructor() {
    super();
    this.project = getProject();
  }

  getProjectLabels() {
    return this.project.labels.map((label) => `<span>${label}</span>`).join('');
  }

  getProjectDescription() {
    return this.project.descriptionBlocks
      .map((text) => `<p class="paragraph">${text}</p>`)
      .join('');
  }

  getProjectCredentials() {
    return this.project.credentials
      .map(
        ({ key, value }) =>
          `<p class="project-row"><b>${key}</b>: ${value}</p>`,
      )
      .join('');
  }

  connectedCallback() {
    const { name } = this.project;

    this.innerHTML = `
            <div class="project-details">
                <div class="project-info">
                    <h1 class="project-name">${name}</h1>
                    <div class="project-categories">
                        ${this.getProjectLabels()}
                    </div>
                    <div class="project-description">
                        ${this.getProjectDescription()}
                    </div>
                </div>
                <div class="project-credentials">
                    ${this.getProjectCredentials()}
                </div>
            </div>
        `;
  }
}

customElements.define('project-details-component', ProjectDetails);
