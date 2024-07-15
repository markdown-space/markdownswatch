import { createHeroSections } from "./creators/createHeroSections.js";
import { createNotifications } from "./creators/createNotifications.js";
import { createProgressBars } from "./creators/createProgressBars.js";
import { createTags } from "./creators/createTags.js";

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
];

const componentCreators = {
  hero: createHeroSections,
  notifications: createNotifications,
  progress: createProgressBars,
  tags: createTags,
};

async function loadComponent(component) {
  try {
    const response = await fetch(`/components/${component}.html`);
    const data = await response.text();

    if (component === "header") {
      const header = document.getElementById("header");
      if (header) header.innerHTML = data;
    } else {
      const container = document.getElementById("container");
      if (container) container.innerHTML += data;
    }

    if (componentCreators[component]) {
      componentCreators[component]();
    }
  } catch (error) {
    console.error(`Error loading ${component}:`, error);
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  for (const component of components) {
    await loadComponent(component);
  }
});
