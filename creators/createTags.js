export function createTags() {
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
