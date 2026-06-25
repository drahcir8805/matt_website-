import { createAuthClient } from "better-auth/react";

// Same-origin: baseURL defaults to the current window origin.
export const authClient = createAuthClient({
  baseURL: process.env.BETTER_AUTH_URL,
});
