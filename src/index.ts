import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";

const app = new Hono();

app.get(
  "/",
  zValidator(
    "query",
    z.object({
      url: z.string().url(),
      referer: z.string().optional(),
      origin: z.string().optional(),
    })
  ),
  async (c) => {
    const { url, referer, origin } = c.req.valid("query");

    try {
      const headers = {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36",
      };

      if (referer) {
        headers["Referer"] = referer;
      }

      if (origin) {
        headers["Origin"] = origin;
      }

      const response = await fetch(url, {
        headers,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      return c.json(data);
    } catch (e) {
      if (e instanceof Error) {
        return c.json({ error: e.message }, 500);
      } else {
        return c.json({ error: "An unknown error occurred" }, 500);
      }
    }
  }
);

export default app;
