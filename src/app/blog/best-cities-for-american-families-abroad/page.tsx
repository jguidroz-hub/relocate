import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best Cities for American Families Moving Abroad in 2026 — Relocate',
  description: 'Data-driven ranking of the best international cities for American families: Medellín, Lisbon, Barcelona, Mexico City, and more. Schools, safety, cost of living compared.',
  openGraph: {
    title: 'Best Cities for American Families Moving Abroad in 2026',
    description: 'From Medellín to Lisbon: where American families are relocating and why.',
    type: 'article',
  },
};

export default function BestCitiesPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <article className="max-w-3xl mx-auto px-6 py-16">
        <div className="mb-4">
          <Link href="/blog" className="text-amber-400 hover:text-amber-300 text-sm">← All Posts</Link>
        </div>
        <header className="mb-12">
          <div className="flex gap-3 mb-3">
            <span className="text-xs font-medium px-2 py-0.5 rounded bg-amber-500/20 text-amber-300">Research</span>
            <span className="text-xs text-gray-500">February 28, 2026</span>
            <span className="text-xs text-gray-500">· 10 min read</span>
          </div>
          <h1 className="text-4xl font-bold mb-4 leading-tight">
            Best Cities for American Families Moving Abroad in 2026
          </h1>
          <p className="text-xl text-gray-400">
            More American families are relocating internationally than ever. Here are the cities that offer the best combination of schools, safety, affordability, and quality of life.
          </p>
        </header>

        <div className="prose prose-invert prose-lg max-w-none">
          <h2 className="text-2xl font-semibold mt-8 mb-4">Why Families Are Leaving</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            The calculus has shifted. Remote work means location flexibility. US housing costs have doubled in many cities since 2019. Private school tuition averages $30K-50K/year in major metros. Healthcare costs keep rising.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            Meanwhile, cities like Medellín, Lisbon, and Mexico City offer excellent international schools for $8K-15K/year, modern healthcare for a fraction of US costs, and a quality of life that&apos;s hard to match at any price point in the US.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Ranking Criteria</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            We evaluated cities across six dimensions that matter most to relocating families:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
            <li><strong className="text-white">International schools:</strong> IB/American curriculum availability, accreditation, class size</li>
            <li><strong className="text-white">Safety:</strong> Expat-area crime rates, healthcare quality, political stability</li>
            <li><strong className="text-white">Cost of living:</strong> Housing, food, transportation vs US baseline</li>
            <li><strong className="text-white">Visa accessibility:</strong> Digital nomad visas, investment visas, path to residency</li>
            <li><strong className="text-white">Connectivity:</strong> Direct flights to US, internet speed, timezone overlap</li>
            <li><strong className="text-white">Community:</strong> Expat community size, English prevalence, cultural adjustment</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">🇨🇴 1. Medellín, Colombia</h2>
          <div className="bg-gray-900 rounded-lg p-6 mb-4">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div><span className="text-gray-500">Cost vs US:</span> <span className="text-green-400">60-70% cheaper</span></div>
              <div><span className="text-gray-500">Top schools:</span> <span className="text-white">Columbus School, Vermont School</span></div>
              <div><span className="text-gray-500">School cost:</span> <span className="text-white">$8K-15K/year</span></div>
              <div><span className="text-gray-500">Visa:</span> <span className="text-white">Digital Nomad Visa (2 years)</span></div>
              <div><span className="text-gray-500">Timezone:</span> <span className="text-white">EST (same as NYC)</span></div>
              <div><span className="text-gray-500">Flights to US:</span> <span className="text-white">3-5 hours direct</span></div>
            </div>
          </div>
          <p className="text-gray-300 leading-relaxed mb-4">
            Medellín has become the top destination for American families seeking affordable international living without sacrificing quality. The city&apos;s eternal spring climate (70-80°F year-round), modern infrastructure, and growing expat community make it an easy transition.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            The Columbus School and Vermont School both offer IB curricula in English, with class sizes of 15-20 students. Monthly housing in El Poblado or Envigado runs $800-1,500 for a modern 3-bedroom apartment — a fraction of Austin or Miami pricing.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">🇵🇹 2. Lisbon / Cascais, Portugal</h2>
          <div className="bg-gray-900 rounded-lg p-6 mb-4">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div><span className="text-gray-500">Cost vs US:</span> <span className="text-green-400">40-50% cheaper</span></div>
              <div><span className="text-gray-500">Top schools:</span> <span className="text-white">St. Julian&apos;s, CAISL</span></div>
              <div><span className="text-gray-500">School cost:</span> <span className="text-white">€12K-20K/year</span></div>
              <div><span className="text-gray-500">Visa:</span> <span className="text-white">D7 Passive Income / Golden Visa</span></div>
              <div><span className="text-gray-500">Timezone:</span> <span className="text-white">GMT (5h ahead of EST)</span></div>
              <div><span className="text-gray-500">Flights to US:</span> <span className="text-white">7-8 hours direct</span></div>
            </div>
          </div>
          <p className="text-gray-300 leading-relaxed mb-4">
            Portugal is the EU gateway for American families. The D7 visa is straightforward for remote workers, English is widely spoken, and the expat community in Cascais/Lisbon is massive and welcoming.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            Cascais in particular offers a beach-town lifestyle 30 minutes from Lisbon, with excellent international schools and a strong American/British expat community. The NHR (Non-Habitual Resident) tax regime can also provide significant tax advantages for the first 10 years.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">🇪🇸 3. Barcelona, Spain</h2>
          <div className="bg-gray-900 rounded-lg p-6 mb-4">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div><span className="text-gray-500">Cost vs US:</span> <span className="text-green-400">30-40% cheaper</span></div>
              <div><span className="text-gray-500">Top schools:</span> <span className="text-white">ASB, Benjamin Franklin</span></div>
              <div><span className="text-gray-500">School cost:</span> <span className="text-white">€10K-18K/year</span></div>
              <div><span className="text-gray-500">Visa:</span> <span className="text-white">Digital Nomad Visa (3 years)</span></div>
              <div><span className="text-gray-500">Timezone:</span> <span className="text-white">CET (6h ahead of EST)</span></div>
              <div><span className="text-gray-500">Flights to US:</span> <span className="text-white">8-9 hours direct</span></div>
            </div>
          </div>
          <p className="text-gray-300 leading-relaxed mb-6">
            Barcelona offers the best of European living — Mediterranean climate, world-class food, rich culture — with a lower cost than northern Europe. Spain&apos;s digital nomad visa (introduced 2023) makes it accessible for remote workers. The American School of Barcelona is one of the highest-rated international schools in Europe.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">🇲🇽 4. Mexico City, Mexico</h2>
          <div className="bg-gray-900 rounded-lg p-6 mb-4">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div><span className="text-gray-500">Cost vs US:</span> <span className="text-green-400">50-65% cheaper</span></div>
              <div><span className="text-gray-500">Top schools:</span> <span className="text-white">ASF, Greengates</span></div>
              <div><span className="text-gray-500">School cost:</span> <span className="text-white">$10K-22K/year</span></div>
              <div><span className="text-gray-500">Visa:</span> <span className="text-white">Temporary Resident (4 years)</span></div>
              <div><span className="text-gray-500">Timezone:</span> <span className="text-white">CST (same as Chicago)</span></div>
              <div><span className="text-gray-500">Flights to US:</span> <span className="text-white">2-4 hours direct</span></div>
            </div>
          </div>
          <p className="text-gray-300 leading-relaxed mb-6">
            Mexico City is the practical choice: same timezone as central US, 2-hour flights to Texas, world-class food and culture, and a massive expat community in neighborhoods like Condesa, Roma, and Polanco. The American School Foundation is one of the oldest international schools in the Americas (founded 1888).
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">🇨🇷 5. San José / Escazú, Costa Rica</h2>
          <div className="bg-gray-900 rounded-lg p-6 mb-4">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div><span className="text-gray-500">Cost vs US:</span> <span className="text-green-400">30-45% cheaper</span></div>
              <div><span className="text-gray-500">Top schools:</span> <span className="text-white">Country Day School, Lincoln School</span></div>
              <div><span className="text-gray-500">School cost:</span> <span className="text-white">$10K-18K/year</span></div>
              <div><span className="text-gray-500">Visa:</span> <span className="text-white">Rentista / Digital Nomad (2 years)</span></div>
              <div><span className="text-gray-500">Timezone:</span> <span className="text-white">CST (same as Chicago)</span></div>
              <div><span className="text-gray-500">Flights to US:</span> <span className="text-white">3-5 hours direct</span></div>
            </div>
          </div>
          <p className="text-gray-300 leading-relaxed mb-6">
            Costa Rica has been the default &quot;safe&quot; choice for American families abroad for decades — stable democracy, no army, excellent healthcare, and a strong English-speaking community. Escazú is essentially an American suburb with Costa Rican charm. More expensive than Medellín or CDMX but easier culturally.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Making the Decision</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Every family&apos;s situation is different. Your budget, your kids&apos; ages, your work schedule, your risk tolerance — all of it matters. The cities above are starting points for research, not final answers.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            The smartest approach: visit your top 2-3 cities, tour schools, talk to expat families, and live there for 2-4 weeks before committing. What looks perfect on paper might not feel right in person — and vice versa.
          </p>

          <div className="bg-gradient-to-r from-amber-600/20 to-orange-600/20 rounded-lg p-8 my-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-3">Get a personalized relocation report</h3>
            <p className="text-gray-300 mb-6">AI-powered reports covering schools, safety, taxes, cost of living, and local contacts — tailored to your family.</p>
            <Link
              href="/"
              className="inline-block bg-amber-500 hover:bg-amber-600 text-gray-900 px-8 py-3 rounded-lg font-semibold transition"
            >
              Get Your Report — $149/city →
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
