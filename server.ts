import { serve } from "bun";
import chalk from "chalk";
import { ThemeLayout } from "components/ThemeLayout";
import { themes } from "consts";
import { renderToString } from "react-dom/server";

const server = serve({
  port: 3000,
  async fetch(req) {
    const url = new URL(req.url);

    let path = url.pathname;

    if (path !== "/" && path.at(-1) === "/") {
      path = url.pathname.slice(0, -1);
    }

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

    const theme = themes.find((theme) => theme.route === path);

    if (!theme) {
      return new Response("Theme not found", { status: 500 });
    }

    const content = renderToString(ThemeLayout({ theme }));

    return new Response(content, {
      headers: { "Content-Type": "text/html" },
    });
  },
});

console.log(chalk.white(`Server running at http://localhost:${server.port}`));
