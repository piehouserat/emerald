import { createRouter } from "@/lib/create-app";
import jsonContent from "@/lib/json-content";
import { createRoute } from "@hono/zod-openapi";
import z from "zod";
import * as HttpStatusCodes from "@/lib/http-status-codes";

const tags = ["Index"];

const router = createRouter().openapi(
  createRoute({
    method: "get",
    path: "/",
    tags,
    responses: {
      [HttpStatusCodes.OK]: jsonContent(
        z.object({ message: z.string() }),
        "API Index",
      ),
    },
  }),
  (c) => {
    return c.json({ message: "Emerald API" }, HttpStatusCodes.OK);
  },
);

export default router;
