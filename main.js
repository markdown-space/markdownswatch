// load-header.js
document.addEventListener("DOMContentLoaded", function () {
  fetch("/components/header.html")
    .then((response) => response.text())
    .then((data) => {
      const headerPlaceholder = document.getElementById("header-placeholder");

      if (headerPlaceholder) {
        headerPlaceholder.innerHTML = data;
      }
    })
    .catch((error) => console.error("Error loading header:", error));
});
