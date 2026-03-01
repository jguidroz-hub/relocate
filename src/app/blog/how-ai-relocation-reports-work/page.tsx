import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How AI Relocation Reports Work: Our Research Process Explained",
  description:
    "A look behind the curtain at how we generate personalized relocation reports using AI. What data we use, how we verify it, and why our reports are different.",
};

export default function HowItWorksGuide() {
  return (
    <main className="min-h-screen px-6 py-20">
      <article className="max-w-3xl mx-auto prose prose-invert prose-lg">
        <Link href="/blog" className="text-emerald-400 text-sm no-underline hover:text-emerald-300">← Back to blog</Link>

        <h1 className="text-3xl md:text-4xl font-bold mt-8 mb-4 text-white">
          How AI Relocation Reports Work: Our Research Process
        </h1>
        <p className="text-gray-400 text-sm mb-8">Updated March 2026 · 8 min read</p>

        <p className="text-gray-300 leading-relaxed">
          You might be wondering: how can an AI generate a 50+ page personalized relocation report? Is it just ChatGPT with a fancy PDF wrapper? Fair question. Here&apos;s exactly how our process works and why the output is meaningfully different from what you&apos;d get from a generic AI chat.
        </p>

        <h2 className="text-2xl font-bold text-white mt-12">The Short Version</h2>

        <p className="text-gray-300 leading-relaxed">
          We use AI (GPT-4) as a <strong className="text-white">research engine</strong>, not a content generator. Each section of your report gets a specialized prompt that includes your family&apos;s details — kids&apos; ages, family size, budget constraints — and asks for specific, verifiable information. The AI draws on its training data (which includes immigration law, school directories, real estate data, expat forums, and government sources) to produce detailed, localized answers.
        </p>

        <h2 className="text-2xl font-bold text-white mt-12">What Makes Our Reports Different</h2>

        <h3 className="text-xl font-semibold text-emerald-400">1. Personalization</h3>
        <p className="text-gray-300 leading-relaxed">
          A family with a 3-year-old and a 10-year-old gets completely different school recommendations than a family with two teenagers. A family on a $4,000/month budget sees different neighborhoods than one with $10,000/month. Every section is generated with YOUR family context built into the research prompt.
        </p>

        <h3 className="text-xl font-semibold text-emerald-400">2. Nine Specialized Sections</h3>
        <p className="text-gray-300 leading-relaxed">
          Instead of asking one AI prompt to &quot;tell me about moving to Medellín,&quot; we break the research into nine expert domains. Each section gets a specialized prompt written by relocation experts. This produces deeper, more accurate content than any single prompt could achieve:
        </p>
        <ul className="text-gray-300 space-y-1">
          <li>Executive Summary — honest pros/cons overview</li>
          <li>Schools &amp; Education — specific schools with tuition, curricula, application timelines</li>
          <li>Safety &amp; Neighborhoods — area-by-area analysis with rent ranges</li>
          <li>Cost of Living — detailed monthly budget breakdown</li>
          <li>Taxes &amp; Legal — visa options, tax implications, residency pathways</li>
          <li>Healthcare — hospitals, insurance, pediatric care</li>
          <li>Daily Life &amp; Culture — practical adjustments, language, food, weather</li>
          <li>Logistics &amp; Moving — timeline, shipping, what to bring</li>
          <li>Vetted Local Contacts — lawyers, agents, communities</li>
        </ul>

        <h3 className="text-xl font-semibold text-emerald-400">3. Honest Assessment</h3>
        <p className="text-gray-300 leading-relaxed">
          Our prompts explicitly ask for honest downsides and gotchas. We don&apos;t want tourism marketing — we want the truth about what will surprise you after you move. Every section includes potential issues and how to mitigate them.
        </p>

        <h2 className="text-2xl font-bold text-white mt-12">Limitations We&apos;re Transparent About</h2>

        <ul className="text-gray-300 space-y-3">
          <li>
            <strong className="text-emerald-400">Data freshness:</strong> AI training data has a cutoff. Visa requirements and school tuition can change. We recommend verifying critical details with local professionals before making final decisions.
          </li>
          <li>
            <strong className="text-emerald-400">Local contacts:</strong> We recommend types of professionals and where to find them, rather than specific individuals we&apos;ve personally vetted. We&apos;re building a verified contact network — this will improve over time.
          </li>
          <li>
            <strong className="text-emerald-400">Real estate specifics:</strong> Rental prices are estimates based on market data. Actual availability and pricing change weekly. Our reports give you ranges and neighborhoods, not specific listings.
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-white mt-12">Why $149?</h2>

        <p className="text-gray-300 leading-relaxed">
          A traditional relocation consultant charges $2,000-$5,000 for a similar scope of research. We&apos;re not replacing consultants entirely — for complex moves, you&apos;ll still want boots-on-the-ground support. But for the initial research phase, when you&apos;re trying to narrow down countries and cities, our reports give you 80% of the value at 3% of the cost.
        </p>

        <p className="text-gray-300 leading-relaxed">
          Think of it as a $149 insurance policy against spending $5,000 on a scouting trip to the wrong city.
        </p>

        <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-6 my-12 text-center">
          <h3 className="text-xl font-bold text-white mb-2">Ready to try it?</h3>
          <p className="text-gray-300 mb-4">
            Pick your city, tell us about your family, and get a comprehensive report in 24 hours.
          </p>
          <Link href="/#order" className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 transition-all no-underline text-white">
            Order Your Report — $149 →
          </Link>
        </div>
      </article>
    </main>
  );
}
