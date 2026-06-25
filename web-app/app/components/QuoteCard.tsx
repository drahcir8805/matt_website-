"use client";

import { Check, X } from "lucide-react";

/** Shape the AI emits inside the <QUOTE>{...}</QUOTE> block. */
export type Quote = {
  clientName: string;
  clientEmail: string;
  eventSummary: string;
  lineItems: { label: string; amount: number }[];
  subtotal: number;
  total: number;
  deposit: number;
  currency: string;
  status: "pending" | "approved";
};

function money(amount: number, currency: string) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function QuoteCard({
  quote,
  onApprove,
  onDecline,
}: {
  quote: Quote;
  onApprove: (quote: Quote) => void;
  onDecline: (quote: Quote) => void;
}) {
  const approved = quote.status === "approved";

  return (
    <div className="overflow-hidden rounded-2xl border-2 border-border/60 bg-card shadow-lg">
      {/* Header */}
      <div className="flex items-start justify-between border-b border-border/50 bg-primary/5 px-5 py-4">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
            Your quote
          </p>
          <p className="mt-0.5 text-[15px] font-semibold text-foreground">
            {quote.eventSummary}
          </p>
          <p className="text-[13px] text-muted-foreground">
            {quote.clientName} · {quote.clientEmail}
          </p>
        </div>
        {approved && (
          <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-medium text-primary">
            <Check className="h-3 w-3" /> Approved
          </span>
        )}
      </div>

      {/* Line items */}
      <div className="px-5 py-4">
        <div className="space-y-2.5">
          {quote.lineItems.map((item, i) => (
            <div key={i} className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">{item.label}</span>
              <span className="font-medium tabular-nums text-foreground">
                {money(item.amount, quote.currency)}
              </span>
            </div>
          ))}
        </div>

        <div className="my-4 border-t border-dashed border-border/70" />

        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>Subtotal</span>
            <span className="tabular-nums">{money(quote.subtotal, quote.currency)}</span>
          </div>
          <div className="flex items-center justify-between text-base font-semibold text-foreground">
            <span>Total</span>
            <span className="tabular-nums">{money(quote.total, quote.currency)}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Deposit to book</span>
            <span className="font-medium tabular-nums text-accent">
              {money(quote.deposit, quote.currency)}
            </span>
          </div>
        </div>
      </div>

      {/* Actions */}
      {!approved && (
        <div className="flex gap-2 border-t border-border/50 bg-muted/40 px-5 py-3">
          <button
            type="button"
            onClick={() => onApprove(quote)}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Check className="h-4 w-4" />
            Approve
          </button>
          <button
            type="button"
            onClick={() => onDecline(quote)}
            className="flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary"
          >
            <X className="h-4 w-4" />
            Decline
          </button>
        </div>
      )}

      {approved && (
        <div className="border-t border-border/50 bg-primary/5 px-5 py-3 text-center text-[13px] text-muted-foreground">
          Deposit invoice sent to {quote.clientEmail}. Matt will be in touch shortly.
        </div>
      )}
    </div>
  );
}
