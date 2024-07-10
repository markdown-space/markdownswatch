const components = ["header", "typography", "buttons"].forEach((component) => {
  fetch(`/components/${component}.html`)
    .then((response) => response.text())
    .then((data) => {
      const headerPlaceholder = document.getElementById(
        `${component}-placeholder`
      );

      if (headerPlaceholder) {
        headerPlaceholder.innerHTML = data;
      }
    })
    .catch((error) => console.error(`Error loading ${component}:`, error));
});
