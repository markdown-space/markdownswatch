export function createHeroSections() {
  const heroContainer = document.getElementById("heroContainer");
  const modifiers = [
    "",
    "primary",
    "link",
    "info",
    "success",
    "warning",
    "danger",
    "light",
    "dark",
  ];

  modifiers.forEach((modifier, index) => {
    const section = document.createElement("section");
    section.innerHTML = `
      <div>
        <nav class="navbar ${modifier ? "is-" + modifier : ""}">
          <div class="container">
            <div class="navbar-brand">
              <a class="navbar-item">
                <img src="/public/markdown-space-logo.svg" alt="Logo">
              </a>
              <span class="navbar-burger burger" data-target="navbarMenuHero${
                index + 1
              }">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
            <div id="navbarMenuHero${index + 1}" class="navbar-menu">
              <div class="navbar-end">
                <a class="navbar-item is-active">Home</a>
                <a class="navbar-item">Examples</a>
                <a class="navbar-item">Documentation</a>
                <div class="navbar-item has-dropdown is-hoverable">
                  <div class="navbar-link">More</div>
                  <div id="moreDropdown" class="navbar-dropdown">
                    <a class="navbar-item" href="#">
                      <div class="level is-mobile">
                        <div class="level-left">
                          <div class="level-item">
                            <p>
                              <strong>Extensions</strong>
                              <br>
                              <small>Side projects to enhance Bulma</small>
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <span class="navbar-item">
                  <a class="button is-primary is-inverted">
                    <span class="icon">
                      <i class="fab fa-github"></i>
                    </span>
                    <span>Download</span>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div class="hero ${modifier ? "is-" + modifier : ""}">
        <div class="hero-body">
          <div class="container has-text-centered">
            <h1 class="title">Title</h1>
            <h2 class="subtitle">Subtitle</h2>
          </div>
        </div>
        <div class="hero-foot">
          <nav class="tabs">
            <div class="container">
              <ul>
                <li class="is-active"><a>Overview</a></li>
                <li><a>Modifiers</a></li>
                <li><a>Grid</a></li>
                <li><a>Elements</a></li>
                <li><a>Components</a></li>
                <li><a>Layout</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    `;
    heroContainer.appendChild(section);

    // Add a line break after each hero section
    const br = document.createElement("br");
    heroContainer.appendChild(br);

    // Add event listener for navbar burger
    const burger = section.querySelector(".navbar-burger");
    const menu = section.querySelector(".navbar-menu");
    burger.addEventListener("click", () => {
      burger.classList.toggle("is-active");
      menu.classList.toggle("is-active");
    });
  });
}
