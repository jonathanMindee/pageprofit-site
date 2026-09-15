const STRIPE_LINK = "https://buy.stripe.com/test_placeholder";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* ── NAV ── */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="font-extrabold text-xl tracking-tight">
            Page<span className="text-orange-500">Profit</span>
          </span>
          <a
            href={STRIPE_LINK}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-2 rounded-lg text-sm transition-colors"
          >
            Get My Rewrite — $497
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="bg-gray-950 text-white px-6 py-28 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block bg-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-8">
            AI-Powered · 48-Hour Turnaround
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Your Landing Page Is Losing You Money.{" "}
            <span className="text-orange-400">We Fix It in 48 Hours.</span>
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            We audit your page, pinpoint exactly what&apos;s costing you signups, and
            rewrite every high-impact section — headline, CTAs, benefits, FAQ —
            delivered in a ready-to-paste doc in 48 hours flat.
          </p>
          <a
            href={STRIPE_LINK}
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg px-12 py-5 rounded-xl transition-colors shadow-lg shadow-orange-500/20"
          >
            Fix My Landing Page — $497
          </a>
          <p className="text-gray-500 text-sm mt-4">
            One-time payment · 48h delivery guaranteed · money back if we miss it
          </p>
        </div>
      </section>

      {/* ── PAIN ── */}
      <section className="bg-white px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
            Sound familiar?
          </h2>
          <p className="text-center text-gray-500 mb-14 text-lg">
            You&apos;re getting traffic. Visitors aren&apos;t converting.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                emoji: "😩",
                title: "Visitors leave without signing up",
                body: "Traffic is coming in, but your conversion rate is painfully low. Something's wrong — you just can't tell what.",
              },
              {
                emoji: "💸",
                title: "Your headline doesn't land",
                body: "You've rewritten it ten times. It still feels generic. Visitors don't immediately get what you do or why it matters to them.",
              },
              {
                emoji: "🔇",
                title: "No one trusts you (yet)",
                body: "Weak social proof, vague benefits, no urgency. Visitors hit your page and bounce because nothing makes them confident enough to act.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-7"
              >
                <div className="text-4xl mb-4">{card.emoji}</div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="bg-gray-950 text-white px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            How PageProfit Works
          </h2>
          <p className="text-gray-400 mb-16 text-lg">
            Three steps. Zero effort on your end.
          </p>
          <div className="grid md:grid-cols-3 gap-10 text-left">
            {[
              {
                n: "01",
                title: "Pay & send your URL",
                body: "Complete checkout and drop your landing page URL in the confirmation email. That's the only thing we need from you.",
              },
              {
                n: "02",
                title: "We audit & rewrite",
                body: "Our AI + copywriter team scores every section, identifies your top 3 conversion killers, and rewrites your entire page.",
              },
              {
                n: "03",
                title: "Get your doc in 48h",
                body: "You receive a fully formatted Notion doc with every section rewritten and implementation notes. Paste it in and go live.",
              },
            ].map((step) => (
              <div key={step.n}>
                <span className="text-7xl font-black text-orange-500/20 leading-none block mb-4">
                  {step.n}
                </span>
                <h3 className="font-bold text-xl mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DELIVERABLES ── */}
      <section className="bg-white px-6 py-24">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
            What You Get
          </h2>
          <p className="text-center text-gray-500 mb-12 text-lg">
            A complete, ready-to-implement conversion overhaul.
          </p>
          <div className="bg-gray-950 text-white rounded-3xl p-8 md:p-12">
            <ul className="space-y-5">
              {[
                ["📊", "Full 6-point audit scorecard — every section scored with specific findings"],
                ["✍️", "3 headline options (pain-led, outcome-led, contrast-led) — A/B test ready"],
                ["🎯", "Rewritten primary CTA with friction-removing microcopy"],
                ["💡", "Every feature bullet rewritten as a concrete customer outcome"],
                ["🤝", "Social proof section with a testimonial-request email template"],
                ["❓", "5-question FAQ that kills your top conversion objections"],
                ["🔁", "Secondary CTA section for visitors who skipped the hero"],
                ["🔍", "SEO meta title + description (60 & 155 chars, ready to paste)"],
                ["📋", "Implementation notes — what to change first and why"],
              ].map(([icon, text]) => (
                <li key={text} className="flex items-start gap-4 text-sm md:text-base">
                  <span className="text-xl flex-shrink-0">{icon}</span>
                  <span className="text-gray-200 leading-relaxed">{text}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 pt-8 border-t border-gray-700 text-center">
              <p className="text-gray-500 text-sm">
                Delivered as a formatted Notion doc (PDF on request) ·
                Hand it to your dev in 5 minutes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="bg-orange-50 px-6 py-24" id="pricing">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            One price. Everything included.
          </h2>
          <p className="text-gray-600 mb-12 text-lg">
            No retainer. No surprises. Pay once, get your rewrite.
          </p>
          <div className="bg-white rounded-3xl p-10 shadow-2xl border border-orange-100">
            <div className="text-7xl font-black text-gray-900 mb-1">$497</div>
            <p className="text-gray-400 text-sm mb-8 uppercase tracking-wider font-semibold">
              one-time · no subscription
            </p>
            <ul className="text-left space-y-4 mb-10">
              {[
                "Full landing page audit",
                "Complete page rewrite (all sections)",
                "48-hour delivery guarantee",
                "1 revision round included",
                "Money back if we miss the deadline",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm">
                  <span className="text-orange-500 text-lg">✓</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <a
              href={STRIPE_LINK}
              className="block w-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg py-4 rounded-xl transition-colors text-center"
            >
              Fix My Landing Page — $497
            </a>
            <p className="text-gray-400 text-xs mt-4">
              Secure checkout via Stripe · Instant confirmation
            </p>
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF ── */}
      <section className="bg-white px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Be One of Our First 10 Clients
          </h2>
          <p className="text-gray-500 mb-16 text-lg max-w-xl mx-auto">
            We&apos;re launching PageProfit this week. The first 10 clients get a
            dedicated review from our senior copywriter — not just AI output.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: "Our hero headline was embarrassingly vague. The rewrite made it instantly clear what we do — signups jumped within a week.",
                name: "Alex M.",
                role: "Founder, B2B SaaS",
              },
              {
                quote: "I'd been staring at the same landing page for 6 months. A fresh set of eyes + AI rewrites cracked it open. Worth every dollar.",
                name: "Sarah K.",
                role: "Indie Hacker",
              },
              {
                quote: "The audit alone was eye-opening. I had no idea my CTA was the problem. Fixed in one afternoon.",
                name: "Marcus T.",
                role: "E-commerce Founder",
              },
            ].map((t) => (
              <div
                key={t.name}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-7 text-left"
              >
                <p className="text-gray-700 text-sm leading-relaxed mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="font-bold text-sm text-gray-900">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-400 text-xs mt-8">
            * Testimonials are illustrative examples of expected results. Real client results posted as they come in.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-gray-50 px-6 py-24">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Common Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "Is this just AI-generated copy, or is a human involved?",
                a: "Both. We use AI to audit and draft, then a senior copywriter reviews and sharpens every line. You're not getting a ChatGPT paste — you're getting a reviewed, refined rewrite.",
              },
              {
                q: "What if I don't like the rewrite?",
                a: "Every order includes one revision round. Tell us what doesn't feel right and we'll update it within 24 hours. If we miss your 48h deadline, you get a full refund — no questions asked.",
              },
              {
                q: "What do you actually need from me?",
                a: "Just your landing page URL. Send it in the confirmation email after checkout. We handle everything else. No calls, no questionnaires, no homework.",
              },
              {
                q: "What format is the deliverable?",
                a: "A formatted Notion doc with every section clearly labeled. You can also request a PDF. Hand the Notion link to your developer and they can implement it in under an hour.",
              },
              {
                q: "Will this work for my type of product?",
                a: "We specialize in SaaS, indie products, and e-commerce landing pages. If you have a single-product landing page with a clear CTA, this works for you. Not sure? Drop us an email at hello@pageprofit.io before buying.",
              },
            ].map((item) => (
              <details
                key={item.q}
                className="group bg-white border border-gray-200 rounded-2xl overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer font-semibold text-gray-900 text-sm md:text-base">
                  {item.q}
                  <span className="text-orange-500 text-xl flex-shrink-0 group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER CTA ── */}
      <section className="bg-gray-950 text-white px-6 py-24 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to stop leaving money on the table?
          </h2>
          <p className="text-gray-400 mb-10 text-lg">
            Your rewrite is 48 hours away.
          </p>
          <a
            href={STRIPE_LINK}
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg px-12 py-5 rounded-xl transition-colors"
          >
            Fix My Landing Page — $497
          </a>
          <p className="text-gray-600 text-sm mt-6">
            Questions? Email us at{" "}
            <a href="mailto:hello@pageprofit.io" className="text-gray-400 underline">
              hello@pageprofit.io
            </a>
          </p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-gray-950 border-t border-gray-800 px-6 py-8 text-center text-gray-600 text-xs">
        <p>
          © {new Date().getFullYear()} PageProfit · All rights reserved ·{" "}
          <a href="mailto:hello@pageprofit.io" className="hover:text-gray-400 transition-colors">
            hello@pageprofit.io
          </a>
        </p>
      </footer>
    </main>
  );
}
