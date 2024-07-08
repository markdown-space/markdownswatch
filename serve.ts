import { serve } from "bun";

const port = 3000;

serve({
  port: port,
  fetch(req) {
    const url = new URL(req.url);
    let path = url.pathname;

    // Serve index.html for the root path
    if (path === "/") {
      path = "/index.html";
    }

    // Attempt to read the file
    const file = Bun.file(`.${path}`);
    return new Response(file);
  },
});

console.log(`Server running at http://localhost:${port}`);
