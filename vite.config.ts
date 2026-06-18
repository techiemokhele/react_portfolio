import { defineConfig, loadEnv } from "vite";
import type { ViteDevServer } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

/**
 * Adds the Vercel-compatible methods (res.status, res.json, res.send,
 * req.query) that the Vercel handler calls but that raw Node.js
 * IncomingMessage / ServerResponse don't have.
 */
function shimVercelApi(req: any, res: any): void {
  // ── Response shims ──────────────────────────────────────────────────────
  res.status = function (code: number) {
    res.statusCode = code;
    return res; // enable chaining: res.status(404).json({})
  };

  res.json = function (data: unknown) {
    if (!res.headersSent) {
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(data));
    }
    return res;
  };

  res.send = function (data: unknown) {
    if (!res.headersSent) {
      if (typeof data === "object" && data !== null) {
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(data));
      } else {
        res.end(String(data));
      }
    }
    return res;
  };

  // ── Request shims ───────────────────────────────────────────────────────
  try {
    const urlObj = new URL(req.url ?? "/", "http://localhost");
    req.query = Object.fromEntries(urlObj.searchParams.entries());
  } catch {
    req.query = {};
  }
}

function devApiPlugin() {
  return {
    name: "dev-api-routes",
    apply: "serve" as const,
    configureServer(server: ViteDevServer) {
      server.middlewares.use(async (req: any, res: any, next: () => void) => {
        if (!req.url?.startsWith("/api/")) return next();

        // Collect the JSON request body
        const chunks: Buffer[] = [];
        await new Promise<void>((resolve, reject) => {
          req.on("data", (chunk: Buffer) => chunks.push(chunk));
          req.on("end", resolve);
          req.on("error", reject);
        });

        try {
          const raw = Buffer.concat(chunks).toString();
          req.body = raw ? JSON.parse(raw) : {};

          // Shim Vercel-specific API onto the raw Node.js objects
          shimVercelApi(req, res);

          // Resolve handler path: "/api/send-email" → "/api/send-email.ts"
          const handlerPath = req.url.split("?")[0].slice(1); // strip leading /
          const mod = await server.ssrLoadModule(`/${handlerPath}.ts`);
          await mod.default(req, res);
        } catch (err) {
          if (!res.headersSent) {
            res.setHeader("Content-Type", "application/json");
            res.statusCode = 500;
            res.end(
              JSON.stringify({ error: "Dev API error", details: String(err) })
            );
          }
        }
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  Object.assign(process.env, env);

  return {
    plugins: [react(), devApiPlugin()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    server: {
      port: 3000,
      open: true,
    },
  };
});
