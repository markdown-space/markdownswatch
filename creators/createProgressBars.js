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
