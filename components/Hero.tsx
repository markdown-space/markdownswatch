export const Hero = () => {
  const modifiers = ["primary", "info", "success"];

  return (
    <section className="section" id="hero">
      <h1 className="title">Hero</h1>
      <hr />
      {modifiers.map((m, index) => (
        <section key={index}>
          <div>
            <nav className={`navbar ${m !== "" ? `is-${m}` : ""}`}>
              <div className="container">
                <div className="navbar-brand">
                  <a className="navbar-item">
                    <img
                      src="https://bulma.io/images/bulma-type-white.png"
                      alt="Logo"
                    />
                  </a>
                  <span
                    className="navbar-burger burger"
                    data-target={`navbarMenuHero${index + 1}`}
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                </div>
                <div id={`navbarMenuHero${index + 1}`} className="navbar-menu">
                  <div className="navbar-end">
                    <a className="navbar-item is-active">Home</a>
                    <a className="navbar-item">Examples</a>
                    <a className="navbar-item">Documentation</a>
                    <div className="navbar-item has-dropdown is-hoverable">
                      <div className="navbar-link">More</div>
                      <div id="moreDropdown" className="navbar-dropdown">
                        <a className="navbar-item" href="#">
                          <div className="level is-mobile">
                            <div className="level-left">
                              <div className="level-item">
                                <p>
                                  <strong>Extensions</strong>
                                  <br />
                                  <small>Side projects to enhance Bulma</small>
                                </p>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <span className="navbar-item">
                      <a className="button is-primary is-inverted">
                        <span className="icon">
                          <i className="fab fa-github"></i>
                        </span>
                        <span>Download</span>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </nav>
          </div>
          <div className={`hero ${m !== "" ? `is-${m}` : ""}`}>
            <div className="hero-body">
              <div className="container has-text-centered">
                <h1 className="title">Title</h1>
                <h2 className="subtitle">Subtitle</h2>
              </div>
            </div>
            <div className="hero-foot">
              <nav className="tabs">
                <div className="container">
                  <ul>
                    <li className="is-active">
                      <a>Overview</a>
                    </li>
                    <li>
                      <a>Modifiers</a>
                    </li>
                    <li>
                      <a>Grid</a>
                    </li>
                    <li>
                      <a>Elements</a>
                    </li>
                    <li>
                      <a>Components</a>
                    </li>
                    <li>
                      <a>Layout</a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </section>
      ))}
    </section>
  );
};
