"use client";

import { useState } from "react";

const COUNTRIES = [
  {
    name: "Colombia",
    cities: ["Medellín", "Bogotá", "Cartagena", "Santa Marta"],
    flag: "🇨🇴",
  },
  {
    name: "Portugal",
    cities: ["Lisbon", "Porto", "Cascais", "Braga", "Aveiro"],
    flag: "🇵🇹",
  },
  {
    name: "Spain",
    cities: ["Barcelona", "Madrid", "Valencia", "Málaga", "Seville"],
    flag: "🇪🇸",
  },
  {
    name: "Mexico",
    cities: ["Mexico City", "Mérida", "San Miguel de Allende", "Playa del Carmen"],
    flag: "🇲🇽",
  },
  {
    name: "Costa Rica",
    cities: ["San José", "Escazú", "Santa Ana", "Tamarindo"],
    flag: "🇨🇷",
  },
  {
    name: "Ecuador",
    cities: ["Quito", "Cuenca", "Guayaquil"],
    flag: "🇪🇨",
  },
];

const REPORT_SECTIONS = [
  {
    icon: "🏫",
    title: "Schools & Education",
    desc: "Top international/bilingual schools, curriculum types, accreditations, enrollment timelines, tuition ranges",
  },
  {
    icon: "🛡️",
    title: "Safety & Neighborhoods",
    desc: "Neighborhood-level safety data, expat-friendly areas, walkability, family-friendliness scores",
  },
  {
    icon: "💰",
    title: "Cost of Living",
    desc: "Detailed monthly budget breakdown: housing, groceries, utilities, childcare, dining, transportation",
  },
  {
    icon: "📋",
    title: "Taxes & Legal",
    desc: "Tax implications, visa options, residency pathways, healthcare system overview, insurance requirements",
  },
  {
    icon: "🏥",
    title: "Healthcare",
    desc: "Hospital quality, English-speaking doctors, insurance options, emergency services, specialized care",
  },
  {
    icon: "🤝",
    title: "Vetted Local Contacts",
    desc: "Immigration lawyers, relocation agents, real estate contacts, expat community groups",
  },
];

export default function Home() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [email, setEmail] = useState("");
  const [familySize, setFamilySize] = useState("");
  const [childAges, setChildAges] = useState("");
  const [loading, setLoading] = useState(false);

  const country = COUNTRIES.find((c) => c.name === selectedCountry);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!selectedCity || !email) return;
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          city: selectedCity,
          country: selectedCountry,
          email,
          familySize,
          childAges,
        }),
      });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-[600px] h-[600px] rounded-full blur-3xl top-[5%] left-[10%] opacity-30 bg-emerald-500/30" />
          <div className="absolute w-[500px] h-[500px] rounded-full blur-3xl bottom-[10%] right-[5%] opacity-25 bg-cyan-500/25" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-sm font-medium text-emerald-400">
            🌍 AI-Powered Relocation Intelligence
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
            Know before you{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              move
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Personalized AI relocation reports for families moving abroad.
            Schools, safety, taxes, cost of living, vetted local contacts —
            matched to your family&apos;s specific situation. Delivered in 24
            hours.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              ✅ Personalized to your family
            </span>
            <span className="flex items-center gap-2">
              ⚡ Delivered in 24 hours
            </span>
            <span className="flex items-center gap-2">📄 50+ page PDF report</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#order"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-lg text-lg font-semibold bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 transition-all shadow-xl shadow-emerald-500/20"
            >
              Get Your Report — $149
              <span className="text-xl">→</span>
            </a>
            <a
              href="/sample-report"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-lg font-medium border border-white/20 hover:bg-white/5 transition-colors"
            >
              View Sample Report
            </a>
          </div>
        </div>
      </section>

      {/* What's Inside */}
      <section className="px-6 py-20 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Everything you need to make the move
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Each report is personalized to your family — your kids&apos; ages,
              your budget, your priorities.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {REPORT_SECTIONS.map((s) => (
              <div
                key={s.title}
                className="p-6 rounded-xl border border-white/10 bg-white/[0.02] hover:border-emerald-500/30 transition-colors"
              >
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Countries */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Countries we cover
            </h2>
            <p className="text-lg text-gray-400">
              Popular expat destinations with deep local knowledge
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {COUNTRIES.map((c) => (
              <div
                key={c.name}
                className="p-5 rounded-xl border border-white/10 bg-white/[0.02]"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{c.flag}</span>
                  <h3 className="font-semibold text-lg">{c.name}</h3>
                </div>
                <p className="text-sm text-gray-400">{c.cities.join(" · ")}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 py-20 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold">How it works</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Tell us about your family",
                desc: "Number of kids, their ages, your budget, priorities, and timeline",
              },
              {
                step: "2",
                title: "We research your city",
                desc: "Our AI analyzes schools, neighborhoods, costs, and legal requirements specific to your situation",
              },
              {
                step: "3",
                title: "Get your report in 24h",
                desc: "A comprehensive 50+ page PDF with everything you need to make an informed decision",
              },
            ].map((s) => (
              <div key={s.step} className="text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-xl flex items-center justify-center mx-auto">
                  {s.step}
                </div>
                <h3 className="font-semibold text-lg">{s.title}</h3>
                <p className="text-sm text-gray-400">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Form */}
      <section id="order" className="px-6 py-20">
        <div className="max-w-2xl mx-auto">
          <div className="text-center space-y-4 mb-10">
            <h2 className="text-3xl md:text-4xl font-bold">
              Order your report
            </h2>
            <p className="text-lg text-gray-400">
              $149 per city · Delivered in 24 hours · 50+ pages
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-6 p-8 rounded-2xl border border-white/10 bg-white/[0.02]"
          >
            <div>
              <label className="block text-sm font-medium mb-2">Country</label>
              <select
                value={selectedCountry}
                onChange={(e) => {
                  setSelectedCountry(e.target.value);
                  setSelectedCity("");
                }}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-emerald-500 focus:outline-none"
                required
              >
                <option value="">Select a country</option>
                {COUNTRIES.map((c) => (
                  <option key={c.name} value={c.name}>
                    {c.flag} {c.name}
                  </option>
                ))}
              </select>
            </div>

            {country && (
              <div>
                <label className="block text-sm font-medium mb-2">City</label>
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-emerald-500 focus:outline-none"
                  required
                >
                  <option value="">Select a city</option>
                  {country.cities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-emerald-500 focus:outline-none"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Family size
                </label>
                <input
                  type="text"
                  value={familySize}
                  onChange={(e) => setFamilySize(e.target.value)}
                  placeholder="e.g., 2 adults, 2 kids"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-emerald-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Children&apos;s ages
                </label>
                <input
                  type="text"
                  value={childAges}
                  onChange={(e) => setChildAges(e.target.value)}
                  placeholder="e.g., 9, 7"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-emerald-500 focus:outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading || !selectedCity || !email}
              className="w-full py-4 rounded-lg text-lg font-semibold bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Redirecting to checkout..." : "Pay $149 → Get Report in 24h"}
            </button>

            <p className="text-xs text-gray-500 text-center">
              Secure payment via Stripe. Report delivered to your email within 24 hours.
              <br />
              Not satisfied? Full refund within 7 days.
            </p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-white/10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold">Relocate</span>
            <span className="text-gray-500">by</span>
            <a
              href="https://projectgreenbelt.com"
              className="text-emerald-400 hover:text-emerald-300"
            >
              Greenbelt
            </a>
          </div>
          <p className="text-sm text-gray-500">
            © 2026 Project Greenbelt · AI Venture Studio
          </p>
        </div>
      </footer>
    </main>
  );
}
