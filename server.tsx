import { serve } from "bun";
import { Layout, Theme } from "Layout";
import { renderToString } from "react-dom/server";

export const themes: Theme[] = [
  {
    id: "bulma",
    name: "Bulma",
    description: "It's the default",
    cssFile: "./css/bulma.css",
    route: "/",
  },
  {
    id: "cerulean",
    name: "Cerulean",
    description: "A calm blue sky",
    cssFile: "./css/cerulean.css",
    route: "/cerulean",
  },
  {
    id: "Lux",
    name: "Lux",
    description: "A touch of class",
    cssFile: "./css/lux.css",
    route: "/lux",
  },
];

const server = serve({
  port: 3000,
  async fetch(req) {
    const url = new URL(req.url);
    let path = url.pathname;

    if (path !== "/" && path.at(-1) === "/") {
      path = url.pathname.slice(0, -1);
    }

    console.log("PATH: ", path);

    if (path.startsWith("/public/") || path === "/favicon.ico") {
      const filePath = `.${path}`; // Use the full path
      const file = Bun.file(filePath);
      const mimeType = file.type; // Bun can determine the MIME type

      return new Response(file, {
        headers: { "Content-Type": mimeType },
      });
    }

    if (path.startsWith("/css/")) {
      const cssFile = path.split("/").pop();
      return new Response(Bun.file(`./css/${cssFile}`), {
        headers: { "Content-Type": "text/css" },
      });
    }

    const theme = themes.find((t) => t.route === path);

    console.log("THEME: ", theme);
    if (!theme) {
      return new Response("Theme not found", { status: 500 });
    }

    const content = renderToString(
      <Layout theme={theme}>
        <></>
      </Layout>
    );

    return new Response(content, {
      headers: { "Content-Type": "text/html" },
    });
  },
});

console.log(`Server running at http://localhost:${server.port}`);
