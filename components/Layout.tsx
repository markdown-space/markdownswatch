import { Header } from "components/Header";
import type { ReactNode } from "react";
import { Theme } from "types";

type Props = {
  theme: Theme;
  children: ReactNode;
};

export const Layout = ({ theme, children }: Props) => {
  return (
    <html lang="en" data-theme={theme.isDarkMode ? "dark: " : "light"}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{theme.name}</title>
        <link
          href="https://unpkg.com/@fortawesome/fontawesome-free@5.13.0/css/all.css"
          rel="stylesheet"
        />
        <link rel="stylesheet" href={`/css/${theme.cssFile}`} />
      </head>
      <body>
        <Header />
        <section>
          <div className="hero is-primary">
            <div className="hero-body">
              <div className="container">
                <h1 className="title">{theme.name}</h1>
                <h2 className="subtitle">{theme.description}</h2>
              </div>
            </div>
          </div>
        </section>
        {children}
      </body>
    </html>
  );
};
