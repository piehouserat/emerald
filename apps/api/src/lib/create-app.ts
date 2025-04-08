import { OpenAPIHono } from "@hono/zod-openapi";
import { logger } from "@/middleware/logger";
import { auth } from "@/middleware/auth";
import type { AppBindings } from "./types";
import defaultHook from "./default-hook";

export function createRouter() {
  const app = new OpenAPIHono<AppBindings>({
    strict: false,
    defaultHook: defaultHook,
  });

  return app;
}

export function createProtectedRouter() {
  const app = new OpenAPIHono<AppBindings>({
    strict: false,
    defaultHook: defaultHook,
  });

  app.use(auth);

  return app;
}

export function createApp() {
  const app = createRouter();

  app.use(logger);

  app.notFound((c) => {
    return c.json("Not found", 404);
  });

  // app.onError((err, c) => {
  //   return c.json("Error", 500);
  // });

  return app;
}
