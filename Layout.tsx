import { Header } from "Header";
import type { ReactNode } from "react";

export type Theme = {
  id: string;
  name: string;
  cssFile: string;
  route: string;
};

type Props = {
  theme: Theme;
  children: ReactNode;
};

export const Layout = ({ theme, children }: Props) => {
  return (
    <html lang="en" data-theme="light">
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
        <div className="container">
          <h1 className="title">Current Theme: {theme.name}</h1>
          {children}
        </div>
      </body>
    </html>
  );
};
