import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Moving Abroad with Kids: The Complete Family Relocation Checklist — Relocate',
  description: 'Everything you need to do before, during, and after an international family move. Schools, visas, healthcare, finances, and emotional prep for kids.',
  openGraph: {
    title: 'Moving Abroad with Kids: Complete Family Checklist',
    description: 'The practical checklist for families relocating internationally.',
    type: 'article',
  },
};

export default function MovingAbroadChecklistPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <article className="max-w-3xl mx-auto px-6 py-16">
        <div className="mb-4">
          <Link href="/blog" className="text-amber-400 hover:text-amber-300 text-sm">← All Posts</Link>
        </div>
        <header className="mb-12">
          <div className="flex gap-3 mb-3">
            <span className="text-xs font-medium px-2 py-0.5 rounded bg-amber-500/20 text-amber-300">Checklist</span>
            <span className="text-xs text-gray-500">February 28, 2026</span>
            <span className="text-xs text-gray-500">· 12 min read</span>
          </div>
          <h1 className="text-4xl font-bold mb-4 leading-tight">
            Moving Abroad with Kids: The Complete Family Relocation Checklist
          </h1>
          <p className="text-xl text-gray-400">
            International moves with children require 6-12 months of planning. This checklist covers everything you need — in the right order.
          </p>
        </header>

        <div className="prose prose-invert prose-lg max-w-none">
          <h2 className="text-2xl font-semibold mt-8 mb-4">12-6 Months Before: Research &amp; Decide</h2>
          <div className="bg-gray-900 rounded-lg p-6 my-6">
            <ul className="space-y-3 text-gray-300">
              <li>☐ <strong className="text-white">Choose your destination city</strong> — visit 2-3 finalist cities if possible</li>
              <li>☐ <strong className="text-white">Research visa options</strong> — digital nomad visa, investor visa, employment visa, or residency</li>
              <li>☐ <strong className="text-white">Identify 3-5 schools</strong> — check accreditation, curriculum, waitlists, and application deadlines</li>
              <li>☐ <strong className="text-white">Submit school applications</strong> — many have 6-12 month lead times for popular grades</li>
              <li>☐ <strong className="text-white">Get school records</strong> — transcripts, immunization records, standardized test scores</li>
              <li>☐ <strong className="text-white">Research healthcare</strong> — local insurance, international insurance, or travel insurance</li>
              <li>☐ <strong className="text-white">Talk to your kids</strong> — age-appropriate conversations about the move, show them photos and videos</li>
              <li>☐ <strong className="text-white">Join expat groups</strong> — Facebook groups, InterNations, local meetups for your destination</li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold mt-8 mb-4">6-3 Months Before: Legal &amp; Financial</h2>
          <div className="bg-gray-900 rounded-lg p-6 my-6">
            <ul className="space-y-3 text-gray-300">
              <li>☐ <strong className="text-white">Apply for visas</strong> — processing times vary from 2 weeks to 6 months</li>
              <li>☐ <strong className="text-white">Renew passports</strong> — many countries require 6+ months validity beyond entry date</li>
              <li>☐ <strong className="text-white">Get apostilled documents</strong> — birth certificates, marriage certificate, school records, medical records</li>
              <li>☐ <strong className="text-white">Set up international banking</strong> — Wise, Schwab International, or local bank account</li>
              <li>☐ <strong className="text-white">Review tax implications</strong> — US citizens owe taxes regardless of residence; consult an expat CPA</li>
              <li>☐ <strong className="text-white">Get international health insurance</strong> — Cigna Global, Aetna International, or local options</li>
              <li>☐ <strong className="text-white">Research housing</strong> — short-term rental for first 1-3 months while you find permanent housing</li>
              <li>☐ <strong className="text-white">Decide what to do with US property</strong> — sell, rent, or keep</li>
              <li>☐ <strong className="text-white">Create a power of attorney</strong> — for US financial/legal matters while abroad</li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3-1 Month Before: Logistics</h2>
          <div className="bg-gray-900 rounded-lg p-6 my-6">
            <ul className="space-y-3 text-gray-300">
              <li>☐ <strong className="text-white">Book flights</strong> — one-way is fine; don&apos;t need to prove return for most visa types</li>
              <li>☐ <strong className="text-white">Arrange shipping</strong> — decide between sea freight (cheaper, 6-8 weeks) and air freight (faster, expensive)</li>
              <li>☐ <strong className="text-white">Declutter aggressively</strong> — shipping costs $3-8/lb; only bring what&apos;s worth the cost</li>
              <li>☐ <strong className="text-white">Get medical checkups</strong> — dental, vision, immunizations (some countries require specific vaccines)</li>
              <li>☐ <strong className="text-white">Refill prescriptions</strong> — 3-month supply + written prescriptions with generic names</li>
              <li>☐ <strong className="text-white">Set up mail forwarding</strong> — or get a US mailbox service (Earth Class Mail, Traveling Mailbox)</li>
              <li>☐ <strong className="text-white">Notify important parties</strong> — bank, brokerage, insurance, doctor, dentist, school</li>
              <li>☐ <strong className="text-white">Download offline content</strong> — kids&apos; favorite shows, audiobooks, games for the plane + first days</li>
              <li>☐ <strong className="text-white">Create a comfort kit for each kid</strong> — favorite toy, snack, blanket, family photos</li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold mt-8 mb-4">First Week: Landing</h2>
          <div className="bg-gray-900 rounded-lg p-6 my-6">
            <ul className="space-y-3 text-gray-300">
              <li>☐ <strong className="text-white">Settle into temporary housing</strong> — Airbnb or serviced apartment for 2-4 weeks</li>
              <li>☐ <strong className="text-white">Get a local SIM card</strong> — or activate international eSIM (Airalo, Holafly)</li>
              <li>☐ <strong className="text-white">Open a local bank account</strong> — needed for rent, utilities, school payments</li>
              <li>☐ <strong className="text-white">Register with local authorities</strong> — many countries require residency registration</li>
              <li>☐ <strong className="text-white">Visit the school</strong> — meet teachers, get uniforms, understand drop-off/pickup</li>
              <li>☐ <strong className="text-white">Find a pediatrician</strong> — ask school or expat groups for recommendations</li>
              <li>☐ <strong className="text-white">Explore the neighborhood with kids</strong> — parks, ice cream shops, playgrounds — make it fun</li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold mt-8 mb-4">First Month: Settling In</h2>
          <div className="bg-gray-900 rounded-lg p-6 my-6">
            <ul className="space-y-3 text-gray-300">
              <li>☐ <strong className="text-white">Find permanent housing</strong> — now that you know the neighborhoods</li>
              <li>☐ <strong className="text-white">Set up utilities</strong> — internet (critical for remote work), electricity, water</li>
              <li>☐ <strong className="text-white">Enroll in activities for kids</strong> — sports, music, art — fastest way to make local friends</li>
              <li>☐ <strong className="text-white">Find your routine</strong> — grocery store, gym, coffee shop, coworking space</li>
              <li>☐ <strong className="text-white">Connect with expat families</strong> — playdates, school parent groups, neighborhood meetups</li>
              <li>☐ <strong className="text-white">Start language lessons</strong> — for the whole family if in a non-English country</li>
              <li>☐ <strong className="text-white">Check in with kids regularly</strong> — watch for homesickness, adjustment anxiety, school struggles</li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Helping Kids Adjust</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Kids are more resilient than adults give them credit for — but they also have less control over the situation. Tips for smoother adjustment:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
            <li><strong className="text-white">Under 5:</strong> Adapt fastest. Maintain bedtime routine, bring familiar objects</li>
            <li><strong className="text-white">Ages 5-10:</strong> Need social connections most. Prioritize activities where they&apos;ll meet peers</li>
            <li><strong className="text-white">Ages 11-14:</strong> Hardest transition. Leaving established friendships. Set up regular video calls with old friends</li>
            <li><strong className="text-white">Ages 15+:</strong> Involve them in the decision. Give them ownership of choosing activities and exploring</li>
          </ul>
          <p className="text-gray-300 leading-relaxed mb-6">
            The #1 predictor of kid adjustment success: <strong className="text-white">parent attitude</strong>. If you&apos;re excited and confident, they will be too. If you&apos;re anxious and second-guessing, they&apos;ll absorb that.
          </p>

          <div className="bg-gradient-to-r from-amber-600/20 to-orange-600/20 rounded-lg p-8 my-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-3">Get your city-specific relocation report</h3>
            <p className="text-gray-300 mb-6">Schools, neighborhoods, healthcare, costs, visa details — personalized for your family&apos;s situation.</p>
            <Link href="/" className="inline-block bg-amber-500 hover:bg-amber-600 text-gray-900 px-8 py-3 rounded-lg font-semibold transition">
              Get Your Report — $149/city →
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
