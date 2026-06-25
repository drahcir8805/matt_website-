import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { betterAuth } from "better-auth";
import { db } from "./db";
import { nextCookies } from "better-auth/next-js";

// ponytail: in-memory store — runs with zero DB driver so auth works today,
// but does NOT persist across restarts. The memory adapter does not auto-create
// tables, so the core email/password models are seeded empty. Swap this whole
// `database` for `drizzleAdapter(db, ...)` once the DB + driver is chosen, then
// run `npx @better-auth/cli generate` to emit the schema.

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
  }),
  emailAndPassword: { enabled: true },
  plugins: [nextCookies()],
});
