/**
 * MODEL — side-effect seam for an approved quote.
 *
 * Single stub for now. A teammate later wires this to Stripe + email, or — if
 * shared state is Supabase — swaps the body for an insert into a `quotes` table
 * that payments/email read from:
 *
 *   await supabase.from("quotes").insert({ ...quote, status: "approved" });
 */
import type { Quote } from "./types";

export async function onQuoteApproved(quote: Quote): Promise<void> {
  console.log("[onQuoteApproved] quote approved:", quote);
}
