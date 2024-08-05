import { Hono } from "hono";
import { getAssetFromKV, NotFoundError } from "@cloudflare/kv-asset-handler";
import manifestJSON from "__STATIC_CONTENT_MANIFEST";
import { Layout } from "components/Layout";
import { themes } from "themes.json";
import { renderToString } from "react-dom/server";

const assetManifest = JSON.parse(manifestJSON);
const app = new Hono();

// Define your routes
app.get("/*", async (c) => {
  const path = c.req.path;
  const theme = themes.find((theme) => theme.route === path);

  if (!theme) {
    return c.text("Theme not found", 500);
  }

  const content = renderToString(Layout({ theme, currentRoute: path }));

  return c.html(content);
});

app.onError((err, c) => {
  console.error(err);
  return c.text("Internal Server Error", 500);
});

// Export the fetch handler
export default {
  async fetch(request, env, ctx) {
    try {
      // Use getAssetFromKV to handle static asset requests
      return await getAssetFromKV(
        {
          request,
          waitUntil: ctx.waitUntil.bind(ctx),
        },
        {
          ASSET_NAMESPACE: env.MDS_SWATCH_PUBLIC_KV,
          ASSET_MANIFEST: assetManifest,
        }
      );
    } catch (e) {
      if (e instanceof NotFoundError) {
        // If asset is not found, pass the request to the Hono app
        return app.fetch(request, env, ctx);
      } else {
        // If other errors, return a generic 500 error response
        return new Response("Internal Server Error", { status: 500 });
      }
    }
  },
};
