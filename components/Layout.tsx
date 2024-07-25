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
import { Menu } from "components/Menu";
import { Message } from "components/Message";
import { Modal } from "components/Modal";
import { Navbar } from "components/Navbar";
import { Notifications } from "components/Notifications";
import { Pagination } from "components/Pagination";
import { Panel } from "components/Panel";
import { Progress } from "components/Progress";
import { Table } from "components/Table";
import { Tabs } from "components/Tabs";
import { Tag } from "components/Tags";
import { Typography } from "components/Typography";
import type { Theme } from "types";

type Props = {
  theme: Theme;
  currentRoute: string;
};

export const Layout = ({ theme, currentRoute }: Props) => {
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
        <Header currentRoute={currentRoute} />
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
          <Menu />
          <Message />
          <Modal />
          <Navbar />
          <Pagination />
          <Panel />
          <Tabs />
        </div>
      </body>
    </html>
  );
};
