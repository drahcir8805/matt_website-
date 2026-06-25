import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

// Reuse one pool across dev HMR reloads so we don't exhaust Postgres
// connections. ponytail: globalThis cache is the standard Next.js fix.
const g = globalThis as unknown as { _pgPool?: Pool };
const pool = g._pgPool ?? new Pool({ connectionString: process.env.DATABASE_URL });
if (process.env.NODE_ENV !== "production") g._pgPool = pool;

export const db = drizzle(pool);
