import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Moving to Spain with Kids: Barcelona & Beyond — 2026 Family Guide",
  description:
    "Complete guide for American families relocating to Spain. Barcelona schools, non-lucrative visa, cost of living, and why Valencia might be the smarter choice.",
};

export default function SpainGuide() {
  return (
    <main className="min-h-screen px-6 py-20">
      <article className="max-w-3xl mx-auto prose prose-invert prose-lg">
        <Link href="/blog" className="text-emerald-400 text-sm no-underline hover:text-emerald-300">← Back to blog</Link>

        <h1 className="text-3xl md:text-4xl font-bold mt-8 mb-4 text-white">
          Moving to Spain with Kids: Barcelona &amp; Beyond
        </h1>
        <p className="text-gray-400 text-sm mb-8">Updated March 2026 · 14 min read</p>

        <p className="text-gray-300 leading-relaxed">
          Spain is the dream destination for many American families — Mediterranean climate, incredible food, rich culture, and a pace of life that prioritizes family over hustle. But Spain in 2026 isn&apos;t the bargain it was a decade ago, especially Barcelona. Here&apos;s what to actually expect.
        </p>

        <h2 className="text-2xl font-bold text-white mt-12">Barcelona vs Valencia vs Madrid vs Málaga</h2>

        <h3 className="text-xl font-semibold text-emerald-400">Barcelona</h3>
        <p className="text-gray-300 leading-relaxed">
          The most popular choice — and the most expensive. World-class culture, architecture, beaches, and a massive international community. But housing costs have skyrocketed, and the Catalan language adds complexity (schools often teach in Catalan, not Spanish). Rent for a 3-BR: €2,500-€4,000/month.
        </p>

        <h3 className="text-xl font-semibold text-emerald-400">Valencia</h3>
        <p className="text-gray-300 leading-relaxed">
          The insider pick for 2026. Beach city with Barcelona&apos;s lifestyle at 40% less cost. Growing international school options. Smaller expat community but expanding rapidly. City of Arts and Sciences is world-class for kids. Rent: €1,200-€2,200/month. If budget matters, Valencia beats Barcelona hands down.
        </p>

        <h3 className="text-xl font-semibold text-emerald-400">Madrid</h3>
        <p className="text-gray-300 leading-relaxed">
          Spain&apos;s capital has the most international schools and the largest English-speaking professional community. No beach, but world-class parks (Retiro), museums (Prado, Reina Sofía), and a vibrant family-friendly culture. Rent: €1,800-€3,200/month. Pure Castilian Spanish — no regional language complexity.
        </p>

        <h3 className="text-xl font-semibold text-emerald-400">Málaga / Costa del Sol</h3>
        <p className="text-gray-300 leading-relaxed">
          Warmest climate in mainland Europe. Large British expat community means plenty of English-language schools and services. More affordable than Barcelona. Growing tech scene. Rent: €1,200-€2,000/month. Best for families who prioritize weather and beach access.
        </p>

        <h2 className="text-2xl font-bold text-white mt-12">Schools</h2>

        <p className="text-gray-300 leading-relaxed">Spain has an extensive network of international schools:</p>

        <ul className="text-gray-300 space-y-3">
          <li><strong className="text-emerald-400">American School of Barcelona:</strong> American curriculum + IB. Tuition: €14,000-€22,000/year. Strong college prep.</li>
          <li><strong className="text-emerald-400">Benjamin Franklin International School (Barcelona):</strong> American curriculum. Tuition: €10,000-€16,000/year. More intimate community.</li>
          <li><strong className="text-emerald-400">American School of Madrid:</strong> PreK-12, fully accredited by MSA. Tuition: €12,000-€20,000/year.</li>
          <li><strong className="text-emerald-400">American School of Valencia:</strong> IB World School. Growing rapidly. Tuition: €8,000-€14,000/year.</li>
          <li><strong className="text-emerald-400">Aloha College (Málaga):</strong> British curriculum. Tuition: €8,000-€13,000/year.</li>
        </ul>

        <p className="text-gray-300 leading-relaxed mt-4">
          <strong>Important note about Catalonia:</strong> Public and many private schools in Barcelona teach primarily in Catalan, with Spanish as a secondary language. If you want Spanish immersion, Madrid or Valencia are simpler choices. International schools in Barcelona teach in English.
        </p>

        <h2 className="text-2xl font-bold text-white mt-12">Visa Options</h2>

        <h3 className="text-xl font-semibold text-emerald-400">Non-Lucrative Visa</h3>
        <p className="text-gray-300 leading-relaxed">
          The main route for American families not employed by a Spanish company. Requires proof of passive income or savings (~€28,000/year for primary applicant + €7,000 per additional family member). You cannot work for a Spanish employer on this visa, but remote work for US companies is a gray area that many expats navigate. Apply at Spanish consulate in the US.
        </p>

        <h3 className="text-xl font-semibold text-emerald-400">Digital Nomad Visa (Ley de Startups)</h3>
        <p className="text-gray-300 leading-relaxed">
          Launched 2023. For remote workers earning from non-Spanish companies. Requires ~€2,520/month income. 15% flat tax rate for 4 years (vs normal progressive rates up to 47%). Valid for 1 year, renewable to 3. This is the best option for most American remote workers.
        </p>

        <h3 className="text-xl font-semibold text-emerald-400">Beckham Law</h3>
        <p className="text-gray-300 leading-relaxed">
          If employed by a Spanish company, you can opt for a flat 24% tax rate for 6 years on Spanish-source income. Named after David Beckham, who was one of the first to use it. Less relevant for remote workers but powerful for those with Spanish employment.
        </p>

        <h2 className="text-2xl font-bold text-white mt-12">Monthly Budget: Barcelona</h2>

        <div className="bg-white/5 rounded-xl p-6 my-6 border border-white/10">
          <h3 className="text-lg font-semibold text-white mb-4">Family of 4, Comfortable Lifestyle</h3>
          <div className="space-y-2 text-gray-300 text-sm">
            <div className="flex justify-between"><span>🏠 Rent (3BR, Eixample/Sarrià)</span><span>€2,500 - €3,800</span></div>
            <div className="flex justify-between"><span>🛒 Groceries</span><span>€600 - €900</span></div>
            <div className="flex justify-between"><span>🏫 School tuition (2 kids, monthly)</span><span>€1,500 - €3,000</span></div>
            <div className="flex justify-between"><span>🏥 Private health insurance</span><span>€200 - €400</span></div>
            <div className="flex justify-between"><span>🚗 Transportation</span><span>€150 - €300</span></div>
            <div className="flex justify-between"><span>🍽️ Dining out</span><span>€400 - €700</span></div>
            <div className="flex justify-between"><span>⚡ Utilities + internet</span><span>€200 - €300</span></div>
            <div className="flex justify-between"><span>🎭 Entertainment</span><span>€200 - €400</span></div>
            <div className="flex justify-between border-t border-white/10 pt-2 font-semibold text-white"><span>Total</span><span>€5,750 - €9,800</span></div>
          </div>
          <p className="text-gray-500 text-xs mt-3">~$6,300 - $10,700 USD. Valencia would be 35-40% less.</p>
        </div>

        <h2 className="text-2xl font-bold text-white mt-12">The Honest Downsides</h2>

        <ul className="text-gray-300 space-y-2">
          <li><strong>Bureaucracy:</strong> Spanish government offices are notoriously slow. NIE appointments, empadronamiento, opening bank accounts — budget extra time for everything.</li>
          <li><strong>Siesta schedule:</strong> Many shops close 2-5 PM. Dinner starts at 9 PM. Kids&apos; bedtimes will shift. This is cultural, not a bug — but it&apos;s an adjustment.</li>
          <li><strong>Barcelona housing:</strong> The rental market is extremely competitive. Start searching 2-3 months before arrival. Scams are common — never send money without seeing the apartment.</li>
          <li><strong>Spanish job market:</strong> If you need to work locally, salaries are low relative to cost of living. Most expat families maintain US remote income.</li>
          <li><strong>Summer heat:</strong> July-August can be brutal, especially in Madrid (100°F+). Many locals leave for the coast. AC is not standard in older apartments.</li>
        </ul>

        <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-6 my-12 text-center">
          <h3 className="text-xl font-bold text-white mb-2">Get your personalized Spain report</h3>
          <p className="text-gray-300 mb-4">
            We&apos;ll match schools, neighborhoods, and visa paths to your family&apos;s specific situation.
          </p>
          <Link href="/#order" className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 transition-all no-underline text-white">
            Get Your Spain Report — $149 →
          </Link>
        </div>
      </article>
    </main>
  );
}
