# Markdown Swatch

## How to use:

1. install the package

```
 npm i @markdownspace/markdownswatch
```

2. Include the css file of your choice from `node_modules/@markdownspace/markdownswatch/css/{THEME_NAME}.css`

## Example:

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <link
      rel="stylesheet"
      href="node_modules/@markdownspace/markdownswatch/css/minty.css"
    />
  </head>
  <body>
    <!-- Navbar -->
    <nav
      class="navbar is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a class="navbar-item" href="#">
          <strong>Brand</strong>
        </a>
      </div>

      <div class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item" href="#"> Home </a>
          <a class="navbar-item" href="#"> Documentation </a>
          <a class="navbar-item" href="#"> About </a>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero is-link is-medium">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Welcome to the Showcase</h1>
          <h2 class="subtitle">Using Bulma and Custom CSS from NPM Package</h2>
        </div>
      </div>
    </section>

    <!-- Content Section -->
    <section class="section">
      <div class="container">
        <h3 class="title is-3">Content Section</h3>
        <p class="content">
          This section uses <strong>Bulma</strong> components styled with
          <strong>custom CSS</strong> from the NPM package.
        </p>

        <!-- Card Component -->
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">Card Title</p>
          </header>
          <div class="card-content">
            <div class="content">
              This is a card component styled with MDSS.
            </div>
          </div>
          <footer class="card-footer">
            <a href="#" class="card-footer-item">Save</a>
            <a href="#" class="card-footer-item">Edit</a>
            <a href="#" class="card-footer-item">Delete</a>
          </footer>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>Bulma and Custom CSS Showcase</strong> by
          <a href="#">Your Name</a>.
        </p>
      </div>
    </footer>
  </body>
</html>
```
