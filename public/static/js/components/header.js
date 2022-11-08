class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
            <header class="header">
                <a href="/" class="logo">
                    <span class="name">Yulia</span>
                    <span class="surname">Tverdokhlib</span>
                </a>
                <div class="line"></div>
                <ul class="navigation">
                    <li class="navigation-item">
                        <a href="/#projects" class="navigation-link">Projects</a>
                    </li>
                    <li class="navigation-item">
                        <a href="/about" class="navigation-link">About</a>
                    </li>
                </ul>
            </header>
        `;
  }
}

customElements.define('header-component', Header);
