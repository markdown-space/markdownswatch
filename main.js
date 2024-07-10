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

      notifications();
      createProgressBars();
    })
    .catch((error) => console.error(`Error loading ${component}:`, error));
});

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

export function createProgressBars() {
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
