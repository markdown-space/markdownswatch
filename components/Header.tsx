import { themes } from "../themes.json";
import { Theme } from "types";

type Props = {
  currentRoute: string;
};

export const Header = ({ currentRoute }: Props) => {
  const chunkArray = (array: Theme[], size: number) => {
    const result = [];

    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }

    return result;
  };

  const themeColumns = chunkArray(themes, 11);

  return (
    <nav className="main-nav navbar is-primary">
      <div className="container">
        <div className="navbar-start">
          <a className="navbar-item" href="/">
            <img
              src="/markdown-space-logo.svg"
              alt="logo"
              className="logo"
              style={{ paddingRight: "0.5rem" }}
            />
            <h1 className="is-5">Markdownswatch</h1>
          </a>
          <a className="navbar-item" href="/">
            Home
          </a>
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link"> Themes </a>
            <div className="navbar-dropdown is-boxed">
              <div className="columns">
                {themeColumns.map((column, columnIndex) => (
                  <div key={columnIndex} className="column">
                    {column.map((theme) => {
                      const isActive =
                        currentRoute === theme.route ? " is-active" : "";
                      return (
                        <a
                          key={theme.id}
                          href={theme.route}
                          className={`navbar-item${isActive}`}
                        >
                          {theme.name}
                        </a>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <span className="navbar-toggle">
          <span></span>
          <span></span>
          <span></span>
        </span>
        <div className="navbar-end navbar-menu"></div>
      </div>
    </nav>
  );
};
