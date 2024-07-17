import { Box } from "components/Box";
import { Breadcrumb } from "components/Breadcrumb";
import { Buttons } from "components/Buttons";
import { Cards } from "components/Cards";
import { Content } from "components/Content";
import { Delete } from "components/Delete";
import { Dropdown } from "components/Dropdown";
import { Form } from "components/Form";
import { Header } from "components/Header";
import { Hero } from "components/Hero";
import { Icons } from "components/Icons";
import { Images } from "components/Images";
import { Level } from "components/Level";
import { Media } from "components/Media";
import { Notifications } from "components/Notifications";
import { Progress } from "components/Progress";
import { Table } from "components/Table";
import { Tag } from "components/Tags";
import { Typography } from "components/Typography";
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
        <div className="container">
          <Typography />
          <Box />
          <Buttons />
          <Content />
          <Delete />
          <Form />
          <Icons />
          <Images />
          <Notifications />
          <Progress />
          <Table />
          <Tag />
          <Breadcrumb />
          <Hero />
          <Cards />
          <Dropdown />
          <Level />
          <Media />
        </div>
      </body>
    </html>
  );
};
