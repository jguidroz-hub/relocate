import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Moving to Costa Rica with Kids: Escazú, Schools & Real Costs 2026",
  description:
    "Family relocation guide for Costa Rica. Escazú vs Santa Ana, bilingual schools, residency options, and why it costs more than you think.",
};

export default function CostaRicaGuide() {
  return (
    <main className="min-h-screen px-6 py-20">
      <article className="max-w-3xl mx-auto prose prose-invert prose-lg">
        <Link href="/blog" className="text-emerald-400 text-sm no-underline hover:text-emerald-300">← Back to blog</Link>

        <h1 className="text-3xl md:text-4xl font-bold mt-8 mb-4 text-white">
          Moving to Costa Rica with Kids: The Honest 2026 Guide
        </h1>
        <p className="text-gray-400 text-sm mb-8">Updated March 2026 · 12 min read</p>

        <p className="text-gray-300 leading-relaxed">
          Costa Rica sells itself: tropical paradise, pura vida lifestyle, biodiversity, and safety. For families, it&apos;s one of the most appealing Latin American destinations. But there&apos;s a gap between the tourism marketing and the reality of raising kids here. This guide bridges that gap.
        </p>

        <h2 className="text-2xl font-bold text-white mt-12">Why Families Choose Costa Rica</h2>

        <ul className="text-gray-300 space-y-2">
          <li><strong className="text-emerald-400">Safety:</strong> One of the safest countries in Latin America. No military since 1948. Stable democracy.</li>
          <li><strong className="text-emerald-400">Nature:</strong> Volcanoes, rainforests, two coastlines, incredible wildlife. Kids grow up outdoors.</li>
          <li><strong className="text-emerald-400">Bilingual education:</strong> Strong network of bilingual schools. Many families achieve genuine bilingualism for their kids.</li>
          <li><strong className="text-emerald-400">US proximity:</strong> 3-5 hour flights from most US cities. Direct flights from Houston, Dallas, Miami, LA, Atlanta, NYC.</li>
          <li><strong className="text-emerald-400">Expat infrastructure:</strong> Well-established American/Canadian community. English widely spoken in expat areas.</li>
        </ul>

        <h2 className="text-2xl font-bold text-white mt-12">Where to Live with Kids</h2>

        <h3 className="text-xl font-semibold text-emerald-400">Escazú</h3>
        <p className="text-gray-300 leading-relaxed">
          The #1 choice for American families. Upscale suburb west of San José with shopping malls, international restaurants, and the highest concentration of expats. Home to Country Day School and several other international schools. Feels like an affluent US suburb with mountains. Rent: $1,800-$3,000/month for a house with yard.
        </p>

        <h3 className="text-xl font-semibold text-emerald-400">Santa Ana</h3>
        <p className="text-gray-300 leading-relaxed">
          Adjacent to Escazú, slightly more affordable and with a more local feel. Growing rapidly with new developments. Several bilingual schools nearby. Rent: $1,400-$2,500/month. Popular with families who want Escazú-level convenience at lower cost.
        </p>

        <h3 className="text-xl font-semibold text-emerald-400">Guanacaste (Tamarindo / Nosara)</h3>
        <p className="text-gray-300 leading-relaxed">
          Beach lifestyle. Smaller expat communities, surf culture, outdoor living. Limited school options but some excellent small international schools. Less infrastructure than the Central Valley. Rent: $1,500-$3,000/month (seasonal variation). Best for families who prioritize nature and don&apos;t need city amenities.
        </p>

        <h3 className="text-xl font-semibold text-emerald-400">Heredia / San Pedro</h3>
        <p className="text-gray-300 leading-relaxed">
          University towns near San José. More affordable, more Costa Rican, less expat-bubble. Lincoln School (one of the top international schools) is in Heredia. Rent: $1,000-$1,800/month. Good for families who want immersion.
        </p>

        <h2 className="text-2xl font-bold text-white mt-12">International Schools</h2>

        <ul className="text-gray-300 space-y-3">
          <li><strong className="text-emerald-400">Country Day School (Escazú):</strong> American curriculum, IB Diploma. The premier expat school. Tuition: $12,000-$18,000/year. Strong arts, sports, and college prep.</li>
          <li><strong className="text-emerald-400">Lincoln School (Heredia):</strong> American curriculum. One of the oldest in Central America. Tuition: $10,000-$16,000/year.</li>
          <li><strong className="text-emerald-400">Blue Valley School (Escazú):</strong> IB World School. Bilingual. Tuition: $8,000-$14,000/year. Known for strong community.</li>
          <li><strong className="text-emerald-400">CRIA (Grecia):</strong> Small, progressive school in the Central Valley. Project-based learning. Tuition: $6,000-$10,000/year.</li>
        </ul>

        <h2 className="text-2xl font-bold text-white mt-12">The Cost Surprise</h2>

        <p className="text-gray-300 leading-relaxed">
          Here&apos;s what catches most American families off guard: <strong className="text-white">Costa Rica is not cheap.</strong> It&apos;s the most expensive country in Central America and approaches US costs in many categories. Imported goods (electronics, cars, many groceries) carry heavy import taxes.
        </p>

        <div className="bg-white/5 rounded-xl p-6 my-6 border border-white/10">
          <h3 className="text-lg font-semibold text-white mb-4">Family of 4, Comfortable Lifestyle (Escazú Area)</h3>
          <div className="space-y-2 text-gray-300 text-sm">
            <div className="flex justify-between"><span>🏠 Rent (3BR house with yard)</span><span>$1,800 - $3,000</span></div>
            <div className="flex justify-between"><span>🛒 Groceries</span><span>$600 - $900</span></div>
            <div className="flex justify-between"><span>🏫 School tuition (2 kids)</span><span>$1,200 - $2,500</span></div>
            <div className="flex justify-between"><span>🏥 Private health insurance (CIMA)</span><span>$300 - $500</span></div>
            <div className="flex justify-between"><span>🚗 Car + gas (essential outside SJ)</span><span>$300 - $500</span></div>
            <div className="flex justify-between"><span>🍽️ Dining out</span><span>$300 - $500</span></div>
            <div className="flex justify-between"><span>🧹 Domestic help</span><span>$200 - $350</span></div>
            <div className="flex justify-between"><span>⚡ Utilities + internet</span><span>$150 - $250</span></div>
            <div className="flex justify-between"><span>🎭 Activities + entertainment</span><span>$200 - $400</span></div>
            <div className="flex justify-between border-t border-white/10 pt-2 font-semibold text-white"><span>Total</span><span>$5,050 - $8,900</span></div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mt-12">Residency Options</h2>

        <ul className="text-gray-300 space-y-3">
          <li><strong className="text-emerald-400">Rentista Visa:</strong> Prove $2,500/month income for 2 years (or $60,000 deposit). Most common for remote workers. Includes spouse and dependents.</li>
          <li><strong className="text-emerald-400">Investor Visa:</strong> $150,000 investment in Costa Rican business or real estate. Faster processing.</li>
          <li><strong className="text-emerald-400">Pensionado:</strong> $1,000/month pension or retirement income. Best for early retirees.</li>
          <li><strong className="text-emerald-400">Digital Nomad Visa:</strong> Launched 2022. $3,000/month income, 1-year permit. Can&apos;t work for Costa Rican companies.</li>
        </ul>

        <h2 className="text-2xl font-bold text-white mt-12">The Honest Downsides</h2>

        <ul className="text-gray-300 space-y-2">
          <li><strong>Roads:</strong> Outside San José, roads range from mediocre to terrible. A 4WD vehicle is recommended. Pot holes are a way of life.</li>
          <li><strong>Rainy season:</strong> May-November brings daily afternoon downpours. Not a dealbreaker but plan your activities accordingly.</li>
          <li><strong>Bureaucracy:</strong> Government processes (immigration, banking, car registration) are painfully slow. Budget extra time for everything.</li>
          <li><strong>Import costs:</strong> Cars cost 2x US prices due to taxes. Electronics, furniture, and many consumer goods are significantly more expensive.</li>
          <li><strong>Internet:</strong> Improving but still spotty outside major areas. If you work remotely, verify connection quality before signing a lease.</li>
          <li><strong>Petty crime:</strong> Break-ins and theft are common, especially in tourist areas. Most houses have bars on windows and security systems.</li>
        </ul>

        <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-6 my-12 text-center">
          <h3 className="text-xl font-bold text-white mb-2">Planning your Costa Rica move?</h3>
          <p className="text-gray-300 mb-4">
            Get a personalized report with school recommendations, neighborhood picks, and vetted local contacts for your family.
          </p>
          <Link href="/#order" className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 transition-all no-underline text-white">
            Get Your Costa Rica Report — $149 →
          </Link>
        </div>
      </article>
    </main>
  );
}
