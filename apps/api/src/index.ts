import app from "./app";
import env from "./env";

const port = env.PORT;

export default {
  port: port,
  fetch: app.fetch,
};
