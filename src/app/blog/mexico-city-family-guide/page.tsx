import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Moving to Mexico City with Kids: Neighborhoods, Schools & Real Costs 2026",
  description:
    "Family relocation guide for Mexico City. Best neighborhoods (Polanco, Condesa, Coyoacán), international schools, safety reality, and monthly budget for American families.",
  openGraph: {
    title: "Moving to Mexico City with Kids: 2026 Guide",
    description: "Complete relocation guide for American families considering CDMX.",
  },
};

export default function CDMXGuide() {
  return (
    <main className="min-h-screen px-6 py-20">
      <article className="max-w-3xl mx-auto prose prose-invert prose-lg">
        <Link href="/blog" className="text-emerald-400 text-sm no-underline hover:text-emerald-300">
          ← Back to blog
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold mt-8 mb-4 text-white">
          Moving to Mexico City with Kids: Neighborhoods, Schools &amp; Real Costs
        </h1>

        <p className="text-gray-400 text-sm mb-8">Updated March 2026 · 13 min read</p>

        <p className="text-gray-300 leading-relaxed">
          Mexico City is the largest city in North America and — surprisingly to many Americans — one of the best places to raise a family abroad. World-class culture, incredible food, a deep talent pool of English-speaking professionals, and direct flights to most US cities make it uniquely convenient for families who want international living without feeling far from home.
        </p>

        <h2 className="text-2xl font-bold text-white mt-12">Why CDMX Works for American Families</h2>

        <ul className="text-gray-300 space-y-2">
          <li><strong className="text-emerald-400">Proximity:</strong> 3-4 hour flights to Houston, Dallas, LA. Same time zone as Central US. Weekend trips home are easy.</li>
          <li><strong className="text-emerald-400">Cost:</strong> A comfortable family lifestyle costs 40-55% less than comparable US cities.</li>
          <li><strong className="text-emerald-400">Culture:</strong> Museums, parks, weekend markets, and a food scene that rivals any world capital. Kids are genuinely welcome everywhere.</li>
          <li><strong className="text-emerald-400">Infrastructure:</strong> Modern metro, Uber everywhere, fast internet, coworking spaces. CDMX is a functioning global city.</li>
          <li><strong className="text-emerald-400">Expat community:</strong> Massive and established. You&apos;ll find English-speaking parent groups, playgroups, and family-friendly events without trying.</li>
        </ul>

        <h2 className="text-2xl font-bold text-white mt-12">Best Neighborhoods for Families</h2>

        <h3 className="text-xl font-semibold text-emerald-400">Polanco</h3>
        <p className="text-gray-300 leading-relaxed">
          The most upscale neighborhood and home to many international schools. Tree-lined streets, Chapultepec Park access, high-end shopping and dining. Feels like the Upper East Side of CDMX. Rent for a 3-bedroom: $2,000-$3,500/month. Very safe, very walkable. Some of the best pediatricians and hospitals are here.
        </p>

        <h3 className="text-xl font-semibold text-emerald-400">Condesa / Roma</h3>
        <p className="text-gray-300 leading-relaxed">
          Hip, vibrant, and full of young families. Beautiful parks (Parque México, Parque España), excellent restaurants, art deco architecture. More affordable than Polanco at $1,500-$2,500/month. Very walkable and bike-friendly. Popular with creative professionals and entrepreneurs.
        </p>

        <h3 className="text-xl font-semibold text-emerald-400">Coyoacán</h3>
        <p className="text-gray-300 leading-relaxed">
          More residential, more Mexican, less touristy. Home to UNAM (the national university) and the Frida Kahlo Museum. Cobblestone streets, plazas, weekend markets. Rent: $1,200-$2,000/month. Great for families who want cultural immersion and a neighborhood feel. Slightly further from Polanco schools.
        </p>

        <h3 className="text-xl font-semibold text-emerald-400">Santa Fe</h3>
        <p className="text-gray-300 leading-relaxed">
          Modern business district with malls, newer construction, and several international schools. Less charm but more space — you can find houses with yards here. Rent: $1,500-$2,500/month. Traffic to/from Santa Fe is notoriously bad, so living near your kids&apos; school here is essential.
        </p>

        <h2 className="text-2xl font-bold text-white mt-12">International Schools</h2>

        <ul className="text-gray-300 space-y-3">
          <li><strong className="text-emerald-400">American School Foundation (ASF):</strong> The premier American curriculum school. Founded 1888. K-12, fully accredited. Tuition: $15,000-$25,000/year. Located in Las Lomas. Strong college prep with US university placements.</li>
          <li><strong className="text-emerald-400">Greengates School:</strong> British/IB curriculum. Bilingual. Strong arts and sports programs. Tuition: $12,000-$18,000/year. Located south of Polanco.</li>
          <li><strong className="text-emerald-400">Westhill Institute:</strong> American curriculum, IB Diploma. Two campuses (Polanco area and Santa Fe). Tuition: $10,000-$16,000/year. Known for strong community feel.</li>
          <li><strong className="text-emerald-400">Colegio Alemán (German School):</strong> German/Mexican curriculum with strong English component. Rigorous academics. Tuition: $8,000-$14,000/year.</li>
        </ul>

        <h2 className="text-2xl font-bold text-white mt-12">Safety — The Real Picture</h2>

        <p className="text-gray-300 leading-relaxed">
          Safety is the #1 concern for American families considering CDMX, and it deserves an honest answer. The neighborhoods listed above (Polanco, Condesa, Roma, Coyoacán) have crime rates comparable to midsize US cities. Petty crime (phone theft, pickpocketing) is the main concern — violent crime affecting expat families is extremely rare in these areas.
        </p>

        <p className="text-gray-300 leading-relaxed">
          Practical safety tips: Use Uber/DiDi instead of street taxis. Don&apos;t flash expensive electronics on the metro. Stay aware at ATMs. Lock your car doors. These are the same precautions you&apos;d take in any major city. Most long-term expat families report feeling safe in their daily routines.
        </p>

        <h2 className="text-2xl font-bold text-white mt-12">Monthly Budget</h2>

        <div className="bg-white/5 rounded-xl p-6 my-6 border border-white/10">
          <h3 className="text-lg font-semibold text-white mb-4">Family of 4, Comfortable Lifestyle (Condesa/Roma)</h3>
          <div className="space-y-2 text-gray-300 text-sm">
            <div className="flex justify-between"><span>🏠 Rent (3BR apartment)</span><span>$1,500 - $2,500</span></div>
            <div className="flex justify-between"><span>🛒 Groceries</span><span>$400 - $600</span></div>
            <div className="flex justify-between"><span>🏫 School tuition (2 kids)</span><span>$1,500 - $3,000</span></div>
            <div className="flex justify-between"><span>🏥 Private health insurance</span><span>$200 - $400</span></div>
            <div className="flex justify-between"><span>🚗 Transportation (Uber + metro)</span><span>$200 - $400</span></div>
            <div className="flex justify-between"><span>🍽️ Dining out</span><span>$300 - $500</span></div>
            <div className="flex justify-between"><span>🧹 Domestic help (3x/week)</span><span>$200 - $350</span></div>
            <div className="flex justify-between"><span>⚡ Utilities + internet</span><span>$100 - $200</span></div>
            <div className="flex justify-between"><span>🎭 Entertainment + activities</span><span>$200 - $400</span></div>
            <div className="flex justify-between border-t border-white/10 pt-2 font-semibold text-white"><span>Total</span><span>$4,600 - $8,350</span></div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mt-12">Visa Situation</h2>

        <p className="text-gray-300 leading-relaxed">
          Mexico is unusually easy for Americans. You can enter on a tourist visa (FMM) and stay up to 180 days with no application needed. For longer stays:
        </p>

        <ul className="text-gray-300 space-y-2">
          <li><strong className="text-emerald-400">Temporary Resident Visa:</strong> Requires ~$2,500/month income proof (or $42,000 in savings). Valid 1-4 years. Apply at Mexican consulate in the US before traveling.</li>
          <li><strong className="text-emerald-400">Permanent Resident Visa:</strong> Higher income threshold (~$4,200/month) but no renewal needed. Can also be obtained after 4 years of temporary residency.</li>
        </ul>

        <h2 className="text-2xl font-bold text-white mt-12">The Honest Downsides</h2>

        <ul className="text-gray-300 space-y-2">
          <li><strong>Air quality:</strong> CDMX has pollution issues, particularly in winter. Check AQI daily. Consider an air purifier for your apartment.</li>
          <li><strong>Altitude:</strong> At 7,300 feet — higher than Denver. Expect a longer adjustment, especially for active kids.</li>
          <li><strong>Traffic:</strong> Legendary. A 5-mile commute can take 45+ minutes during rush hour. Live near your kids&apos; school.</li>
          <li><strong>Water:</strong> Don&apos;t drink tap water. Budget for filtered/bottled water delivery (garrafón service, ~$8/month).</li>
          <li><strong>Earthquakes:</strong> CDMX is seismically active. Newer buildings have better codes. Practice earthquake drills with your kids.</li>
        </ul>

        <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-6 my-12 text-center">
          <h3 className="text-xl font-bold text-white mb-2">Ready to explore CDMX?</h3>
          <p className="text-gray-300 mb-4">
            Get a personalized report with school recommendations, neighborhood picks for your budget, visa guidance, and vetted local contacts.
          </p>
          <Link href="/#order" className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 transition-all no-underline text-white">
            Get Your CDMX Report — $149 →
          </Link>
        </div>
      </article>
    </main>
  );
}
