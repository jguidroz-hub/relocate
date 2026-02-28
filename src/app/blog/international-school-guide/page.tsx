import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'International Schools 101: What American Parents Need to Know — Relocate',
  description: 'IB vs American curriculum, accreditation bodies, tuition ranges, and how to evaluate international schools remotely before your family visits.',
  openGraph: {
    title: 'International Schools 101: What American Parents Need to Know',
    description: 'Everything you need to evaluate international schools before visiting.',
    type: 'article',
  },
};

export default function InternationalSchoolGuidePage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <article className="max-w-3xl mx-auto px-6 py-16">
        <div className="mb-4">
          <Link href="/blog" className="text-amber-400 hover:text-amber-300 text-sm">← All Posts</Link>
        </div>
        <header className="mb-12">
          <div className="flex gap-3 mb-3">
            <span className="text-xs font-medium px-2 py-0.5 rounded bg-amber-500/20 text-amber-300">Guide</span>
            <span className="text-xs text-gray-500">February 28, 2026</span>
            <span className="text-xs text-gray-500">· 8 min read</span>
          </div>
          <h1 className="text-4xl font-bold mb-4 leading-tight">
            International Schools 101: What American Parents Need to Know
          </h1>
          <p className="text-xl text-gray-400">
            Choosing a school abroad is the single biggest factor in your family&apos;s relocation success. Here&apos;s how to evaluate schools before you visit.
          </p>
        </header>

        <div className="prose prose-invert prose-lg max-w-none">
          <h2 className="text-2xl font-semibold mt-8 mb-4">Curriculum Types</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            International schools generally follow one of four curriculum frameworks. Understanding the differences will save you weeks of confusion:
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">International Baccalaureate (IB)</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            The gold standard for international education. IB schools follow a structured, inquiry-based curriculum recognized by universities worldwide. Three programs: PYP (ages 3-12), MYP (ages 11-16), DP (ages 16-19).
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li><strong className="text-white">Pros:</strong> Globally recognized, critical thinking focus, smooth college transitions</li>
            <li><strong className="text-white">Cons:</strong> Can be academically demanding, limited AP equivalency for some US colleges</li>
            <li><strong className="text-white">Cost:</strong> $10K-25K/year depending on location</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">American Curriculum</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            Schools following US standards (Common Core or state-specific), often accredited by US bodies. Familiar structure for American kids, with AP courses available in high school.
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li><strong className="text-white">Pros:</strong> Easiest transition for US kids, AP credits transfer, familiar grading</li>
            <li><strong className="text-white">Cons:</strong> Less globally minded, fewer locations than IB</li>
            <li><strong className="text-white">Cost:</strong> $8K-22K/year depending on location</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">British Curriculum (IGCSE / A-Levels)</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            Follows UK national standards with IGCSE exams at 16 and A-Levels at 18. Common in former British colonies and across Europe.
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li><strong className="text-white">Pros:</strong> Rigorous academics, widely available, strong for sciences</li>
            <li><strong className="text-white">Cons:</strong> Specialization starts early, different year groupings from US</li>
            <li><strong className="text-white">Cost:</strong> $8K-20K/year</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Local Curriculum (Bilingual)</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            Local schools with bilingual programs — instruction split between English and the local language. Best for families planning to stay long-term.
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
            <li><strong className="text-white">Pros:</strong> True bilingualism, cultural immersion, often cheaper</li>
            <li><strong className="text-white">Cons:</strong> Harder adjustment period, may not align with US college prep</li>
            <li><strong className="text-white">Cost:</strong> $3K-12K/year</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Accreditation: What Actually Matters</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Accreditation is your quality guarantee. Look for schools accredited by these bodies:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-3 mb-6">
            <li><strong className="text-white">AdvancED / Cognia:</strong> US-based, the most common accreditor for American international schools</li>
            <li><strong className="text-white">CIS (Council of International Schools):</strong> The premier international accreditor</li>
            <li><strong className="text-white">NEASC (New England Association):</strong> Highly regarded, especially for college-prep schools</li>
            <li><strong className="text-white">IBO:</strong> For IB World Schools specifically</li>
            <li><strong className="text-white">WASC (Western Association):</strong> Common for schools in Asia and Latin America</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mb-6">
            A school with dual accreditation (e.g., CIS + Cognia) is generally a safe bet. No accreditation is a red flag — credits may not transfer and college admissions offices may not recognize the diploma.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">How to Evaluate Schools Remotely</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Before you fly out for tours, narrow your list from home:
          </p>
          <ol className="list-decimal list-inside text-gray-300 space-y-3 mb-6">
            <li><strong className="text-white">Check accreditation</strong> — verify on the accrediting body&apos;s website, not just the school&apos;s claims</li>
            <li><strong className="text-white">Review IB/AP results</strong> — IB schools publish average DP scores; AP schools list pass rates</li>
            <li><strong className="text-white">Read parent reviews</strong> — Google reviews, expat forums (ExpatExchange, InterNations), Facebook groups</li>
            <li><strong className="text-white">Request a virtual tour</strong> — most schools offer Zoom tours for prospective families</li>
            <li><strong className="text-white">Ask about waitlists</strong> — popular schools may have 1-2 year waitlists for certain grades</li>
            <li><strong className="text-white">Check the school calendar</strong> — some schools start in August, others in February (Southern Hemisphere)</li>
            <li><strong className="text-white">Ask about ESL support</strong> — if your kids don&apos;t speak the local language, what support exists?</li>
          </ol>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Timing Your Move Around School Year</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            This is the #1 mistake families make: moving mid-school-year. If possible:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
            <li><strong className="text-white">Best:</strong> Move during summer break, start fresh in August/September</li>
            <li><strong className="text-white">OK:</strong> Move during winter break (January start), especially for younger kids</li>
            <li><strong className="text-white">Avoid:</strong> Mid-semester moves. Social groups are formed, curriculum is mid-stream</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mb-6">
            Application deadlines are typically 6-12 months before the start date. For August 2027 enrollment, you should be applying by October 2026 at the latest.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">The Real Cost Comparison</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            International school tuition looks expensive until you compare it to US private school:
          </p>
          <div className="bg-gray-900 rounded-lg p-6 my-6">
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Austin private school (avg):</span>
                <span className="text-red-400 font-semibold">$22,000-35,000/year</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Medellín international school:</span>
                <span className="text-green-400 font-semibold">$8,000-15,000/year</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Lisbon international school:</span>
                <span className="text-yellow-400 font-semibold">$12,000-20,000/year</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">CDMX international school:</span>
                <span className="text-green-400 font-semibold">$10,000-22,000/year</span>
              </div>
            </div>
          </div>
          <p className="text-gray-300 leading-relaxed mb-6">
            When you add in the overall cost-of-living savings (housing, healthcare, food), many families find that their total annual spend is 40-60% lower abroad — even with private school tuition included.
          </p>

          <div className="bg-gradient-to-r from-amber-600/20 to-orange-600/20 rounded-lg p-8 my-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-3">Get school details for your target city</h3>
            <p className="text-gray-300 mb-6">Our AI relocation reports include school rankings, accreditation details, tuition, and admissions contacts — matched to your kids&apos; ages.</p>
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
