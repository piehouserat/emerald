import type { AppOpenAPI } from "./types";
import packageJSON from "../../package.json";
import { apiReference } from "@scalar/hono-api-reference";

export default function configureOpenAPI(app: AppOpenAPI) {
  app.doc("/doc", {
    openapi: "3.0.0",
    info: {
      version: packageJSON.version,
      title: "Emerald API",
    },
  });

  app.get(
    "/reference",
    apiReference({
      url: "/doc",
      theme: "kepler",
      defaultHttpClient: { targetKey: "js", clientKey: "fetch" },
    }),
  );
}
