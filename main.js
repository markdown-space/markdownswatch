const components = [
  "header",
  "typography",
  "box",
  "buttons",
  "content",
  "delete",
  "form",
  "icons",
  "images",
  "notifications",
  "progress",
  "table",
  "tags",
  "breadcrumb",
  "hero",
  "cards",
].forEach((component) => {
  fetch(`/components/${component}.html`)
    .then((response) => response.text())
    .then((data) => {
      const headerPlaceholder = document.getElementById(
        `${component}-placeholder`
      );

      if (headerPlaceholder) {
        headerPlaceholder.innerHTML = data;
      }

      if (componentCreators?.[component]) {
        componentCreators?.[component]?.();
      }
    })
    .catch((error) => console.error(`Error loading ${component}:`, error));
});

const componentCreators = {
  notifications: notifications,
  progress: createProgressBars,
  tags: createTags,
  hero: createHeroSections,
};

function notifications() {
  const notificationContainer = document.getElementById(
    "notificationContainer"
  );

  // Array of modifiers (replace with your actual modifiers)
  const modifiers = [
    "",
    "primary",
    "link",
    "info",
    "success",
    "warning",
    "danger",
  ];

  // Function to create a single notification
  function createNotification(modifier) {
    const column = document.createElement("div");
    column.className = "column is-half";

    const notification = document.createElement("div");
    notification.className = `notification ${modifier ? "is-" + modifier : ""}`;

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete";
    deleteButton.addEventListener("click", () => {
      column.remove();
    });

    const content = document.createTextNode("Lorem ipsum dolor sit amet, ");
    const link = document.createElement("a");
    link.href = "#";
    link.textContent = "consectetur";
    const remainingText = document.createTextNode(
      " adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit"
    );

    notification.appendChild(deleteButton);
    notification.appendChild(content);
    notification.appendChild(link);
    notification.appendChild(remainingText);

    column.appendChild(notification);
    return column;
  }

  // Create and append notifications
  modifiers.forEach((modifier) => {
    const notificationElement = createNotification(modifier);

    if (notificationContainer) {
      notificationContainer.appendChild(notificationElement);
    }
  });
}

function createProgressBars() {
  const container = document.getElementById("progressBarsContainer");
  const indeterminateContainer = document.getElementById(
    "indeterminateProgressBarsContainer"
  );

  // Modifiers for the first set of progress bars
  const modifiers = [
    "",
    "primary",
    "link",
    "info",
    "success",
    "warning",
    "danger",
  ];

  // Create progress bars with modifiers
  modifiers.forEach((modifier) => {
    const progress = document.createElement("progress");
    progress.className = `progress ${modifier ? "is-" + modifier : ""}`;
    progress.max = 100;
    progress.value = 15;
    progress.textContent = "15%";

    if (container) {
      container.appendChild(progress);
    }
  });

  // Create progress bars with different sizes
  const sizes = [
    { class: "is-small", value: 15 },
    { class: "", value: 30 },
    { class: "is-medium", value: 45 },
    { class: "is-large", value: 60 },
  ];

  sizes.forEach((size) => {
    const progress = document.createElement("progress");
    progress.className = `progress ${size.class}`;
    progress.max = 100;
    progress.value = size.value;
    progress.textContent = `${size.value}%`;

    if (container) {
      container.appendChild(progress);
    }
  });

  // Create indeterminate progress bars
  const indeterminateBars = [
    { class: "is-small is-primary", text: "15%" },
    { class: "is-danger", text: "30%" },
    { class: "is-medium is-dark", text: "45%" },
    { class: "is-large is-info", text: "60%" },
  ];

  indeterminateBars.forEach((bar) => {
    const progress = document.createElement("progress");
    progress.className = `progress ${bar.class}`;
    progress.max = 100;
    progress.textContent = bar.text;

    if (indeterminateContainer) {
      indeterminateContainer.appendChild(progress);
    }
  });
}

function createTags() {
  const simpleTagsContainer = document.getElementById("simpleTagsContainer");
  const tagGroupsContainer = document.getElementById("tagGroupsContainer");
  const deletableTagsContainer = document.getElementById(
    "deletableTagsContainer"
  );

  // Create simple tags
  const simpleTags = [
    { text: "Primary", class: "is-primary" },
    { text: "Link", class: "is-link" },
    { text: "Info", class: "is-info" },
    { text: "Success", class: "is-success" },
    { text: "Warning", class: "is-warning" },
    { text: "Danger", class: "is-danger" },
    { text: "White", class: "is-white" },
    { text: "Black", class: "is-black" },
    { text: "Light", class: "is-light" },
    { text: "Medium", class: "is-primary is-medium" },
    { text: "Large", class: "is-info is-large" },
    { text: "Bar", class: "is-success", hasDelete: true },
    { text: "Hello", class: "is-warning is-medium", hasDelete: true },
    { text: "World", class: "is-danger is-large", hasDelete: true },
  ];

  simpleTags.forEach((tag) => {
    const span = document.createElement("span");
    span.className = `tag ${tag.class}`;
    span.textContent = tag.text;

    if (tag.hasDelete) {
      const button = document.createElement("button");
      button.className = "delete is-small";
      span.appendChild(button);
    }

    simpleTagsContainer.appendChild(span);
  });

  // Create tag groups
  const tagGroups = [
    { dark: "npm", colored: "0.5.0", colorClass: "is-info" },
    { dark: "build", colored: "passing", colorClass: "is-success" },
    { dark: "chat", colored: "on gitter", colorClass: "is-primary" },
  ];

  tagGroups.forEach((group) => {
    const control = document.createElement("div");
    control.className = "control";

    const tags = document.createElement("div");
    tags.className = "tags has-addons";

    const darkTag = document.createElement("span");
    darkTag.className = "tag is-dark";
    darkTag.textContent = group.dark;

    const coloredTag = document.createElement("span");
    coloredTag.className = `tag ${group.colorClass}`;
    coloredTag.textContent = group.colored;

    tags.appendChild(darkTag);
    tags.appendChild(coloredTag);
    control.appendChild(tags);
    tagGroupsContainer.appendChild(control);
  });

  // Create deletable tags
  const deletableTags = [
    "Technology",
    "CSS",
    "Flexbox",
    "Web Design",
    "Open Source",
    "Community",
    "Documentation",
  ];

  deletableTags.forEach((tagText) => {
    const control = document.createElement("div");
    control.className = "control";

    const tags = document.createElement("div");
    tags.className = "tags has-addons";

    const tag = document.createElement("a");
    tag.className = "tag is-link";
    tag.textContent = tagText;

    const deleteTag = document.createElement("a");
    deleteTag.className = "tag is-delete";

    tags.appendChild(tag);
    tags.appendChild(deleteTag);
    control.appendChild(tags);
    deletableTagsContainer.appendChild(control);
  });
}

function createHeroSections() {
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
