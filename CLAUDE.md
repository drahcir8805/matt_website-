@AGENTS.md

# Package manager: npm ONLY

Use **npm** for everything — install, scripts, dependency changes. Never use
yarn, pnpm, or bun. The lockfile is `package-lock.json`; do not introduce
`yarn.lock`, `pnpm-lock.yaml`, or `bun.lockb`.

# Matt's Photography & Videography Booking Site

A portfolio + booking funnel for Matt, a photographer/videographer. The site
showcases his work, then walks a prospective client from "interested" to "paid"
through a guided flow that ends in a Stripe payment.

## The flow (in order)

1. **Portfolio** — landing page showing Matt's photo/video work. Ends with a
   large, prominent **Book Now** button.
2. **Application form** — clicking Book Now opens a form collecting:
   - Full name
   - Email
   - Date of event
3. **Quote chatbot** — after submitting the form, the user lands on a chatbot
   page. The bot knows Matt's pricing and prompts the user to describe what they
   want.
   - Example request: *"2 hours photography coverage, 2 hours video coverage,
     30 edited photos afterward, plus all raw photos."*
   - The bot returns a price quote based on the request.
4. **Matt verification (conditional)** — for requests the bot can't price on its
   own, the quote is held for Matt to confirm or set the price before it's sent
   to the user. This gate applies **only** to unknown/custom scenarios, e.g.:
   - *"Use our own film and digital camera and post-process all the photos."*
   - *"Come before the wedding to shoot BTS."*
   - Standard requests (coverage hours + edits + raw) skip this and quote
     immediately.
5. **Invoice** — once the quote is confirmed, the chatbot generates an invoice
   and sends it to the user.
6. **Payment** — the user pays the invoice through Stripe.

## Pricing logic

- Matt's pricing standards (per-hour rates for photo/video coverage, edit
  pricing, raw delivery, etc.) live in a single source of truth the chatbot
  reads from. Keep them editable in one place — Matt updates rates often.
- The bot prices known line items directly. Anything outside the known catalogue
  triggers the Matt-verification gate (step 4) instead of guessing.

## Open questions (decide before building)

- **AI provider** for the chatbot — default to a current Claude model unless
  decided otherwise.
- **Matt verification channel** — how Matt is notified and confirms (email,
  dashboard, SMS?) and how the user waits in the meantime (live, or "we'll email
  you the quote"?).
- **Invoice mechanism** — Stripe Invoices vs. a custom Checkout session.
- **Data storage** — where applications, quotes, and invoice state are persisted.
