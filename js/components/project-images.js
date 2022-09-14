import { getProject, handleAppearanceInViewport } from '../utils.js';

class ProjectImages extends HTMLElement {
  constructor() {
    super();
    this.project = getProject();
  }

  getProjectImages() {
    console.log(this.project.images);

    return this.project.images
      .map(({ alt, id, src }) =>
        Array.isArray(src)
          ? `<div class="project-illustration-split">
                ${src
                  .map(
                    (image) =>
                      `<img class="project-illustration split" src="${image}" alt="${alt}">`,
                  )
                  .join('')}
            </div>`
          : `<img class="project-illustration" src="${src}" alt="${alt}" id="${id}" />`,
      )
      .join('');
  }

  startStickerAnimationOnScroll() {
    if (this.project.id !== 'utopia-haus') return;
    const stickersGif = document.getElementById('stickers-gif');
    stickersGif.style.opacity = 0;

    handleAppearanceInViewport(stickersGif, () => {
      // eslint-disable-next-line no-self-assign
      stickersGif.src = stickersGif.src;
      stickersGif.style.opacity = 1;
    });
  }

  connectedCallback() {
    this.innerHTML = `
            <div class="project-pictures">${this.getProjectImages()}</div>
        `;
    this.startStickerAnimationOnScroll();
  }
}

customElements.define('project-images-component', ProjectImages);
