"use client";

import { useState } from "react";
import Link from "next/link";

interface CityData {
  city: string;
  country: string;
  flag: string;
  costRange: string;
  costLow: number;
  rentRange: string;
  schoolCostRange: string;
  safety: string;
  safetyScore: number;
  visaEase: string;
  visaScore: number;
  flightHours: string;
  englishLevel: string;
  climate: string;
  topSchool: string;
  bestFor: string;
}

const CITIES: CityData[] = [
  {
    city: "Medellín", country: "Colombia", flag: "🇨🇴",
    costRange: "$3,400 - $6,400", costLow: 3400,
    rentRange: "$1,000 - $2,200", schoolCostRange: "$5K - $14K/yr",
    safety: "Good (neighborhood dependent)", safetyScore: 3,
    visaEase: "Easy", visaScore: 4,
    flightHours: "4-5h", englishLevel: "Moderate",
    climate: "70-80°F year-round", topSchool: "Columbus School (IB)",
    bestFor: "Best overall value",
  },
  {
    city: "Lisbon", country: "Portugal", flag: "🇵🇹",
    costRange: "$5,600 - $10,200", costLow: 5600,
    rentRange: "€2,000 - €3,500", schoolCostRange: "$12K - $22K/yr",
    safety: "Excellent (top 10 globally)", safetyScore: 5,
    visaEase: "Moderate", visaScore: 3,
    flightHours: "7-8h", englishLevel: "High",
    climate: "50-85°F, 300 sunny days", topSchool: "St. Julian's (British/IB)",
    bestFor: "EU citizenship pathway",
  },
  {
    city: "Mexico City", country: "Mexico", flag: "🇲🇽",
    costRange: "$4,600 - $8,350", costLow: 4600,
    rentRange: "$1,500 - $2,500", schoolCostRange: "$10K - $25K/yr",
    safety: "Good (in right areas)", safetyScore: 3,
    visaEase: "Very Easy", visaScore: 5,
    flightHours: "2-4h", englishLevel: "Moderate",
    climate: "55-80°F, rainy season May-Nov", topSchool: "ASF (American)",
    bestFor: "Closest to US",
  },
  {
    city: "Barcelona", country: "Spain", flag: "🇪🇸",
    costRange: "$6,300 - $10,700", costLow: 6300,
    rentRange: "€2,500 - €3,800", schoolCostRange: "$10K - $22K/yr",
    safety: "Very Good", safetyScore: 4,
    visaEase: "Moderate", visaScore: 3,
    flightHours: "8-9h", englishLevel: "Moderate",
    climate: "45-85°F, Mediterranean", topSchool: "ASB (American/IB)",
    bestFor: "Best lifestyle + EU",
  },
  {
    city: "Valencia", country: "Spain", flag: "🇪🇸",
    costRange: "$4,200 - $7,200", costLow: 4200,
    rentRange: "€1,200 - €2,200", schoolCostRange: "$8K - $14K/yr",
    safety: "Very Good", safetyScore: 4,
    visaEase: "Moderate", visaScore: 3,
    flightHours: "9h", englishLevel: "Moderate",
    climate: "45-90°F, Mediterranean", topSchool: "American School of Valencia",
    bestFor: "Barcelona lifestyle, 40% less",
  },
  {
    city: "Escazú", country: "Costa Rica", flag: "🇨🇷",
    costRange: "$5,050 - $8,900", costLow: 5050,
    rentRange: "$1,800 - $3,000", schoolCostRange: "$8K - $18K/yr",
    safety: "Good", safetyScore: 4,
    visaEase: "Moderate", visaScore: 3,
    flightHours: "3-5h", englishLevel: "Good",
    climate: "65-80°F, tropical", topSchool: "Country Day School (American/IB)",
    bestFor: "Nature + outdoor lifestyle",
  },
  {
    city: "Cuenca", country: "Ecuador", flag: "🇪🇨",
    costRange: "$1,980 - $4,100", costLow: 1980,
    rentRange: "$600 - $1,200", schoolCostRange: "$3K - $6K/yr",
    safety: "Moderate", safetyScore: 3,
    visaEase: "Easy", visaScore: 4,
    flightHours: "5-6h", englishLevel: "Low",
    climate: "55-70°F year-round", topSchool: "CEDFI (Bilingual)",
    bestFor: "Lowest cost (uses USD)",
  },
  {
    city: "Cascais", country: "Portugal", flag: "🇵🇹",
    costRange: "$5,200 - $9,000", costLow: 5200,
    rentRange: "€1,800 - €3,200", schoolCostRange: "$12K - $18K/yr",
    safety: "Excellent", safetyScore: 5,
    visaEase: "Moderate", visaScore: 3,
    flightHours: "7-8h", englishLevel: "High",
    climate: "50-80°F, coastal", topSchool: "St. Julian's (British/IB)",
    bestFor: "Beach town + EU access",
  },
];

export default function ComparePage() {
  const [selected, setSelected] = useState<string[]>(["Medellín", "Lisbon"]);

  const toggleCity = (city: string) => {
    if (selected.includes(city)) {
      if (selected.length > 1) setSelected(selected.filter((c) => c !== city));
    } else if (selected.length < 4) {
      setSelected([...selected, city]);
    }
  };

  const compared = CITIES.filter((c) => selected.includes(c.city));

  return (
    <main className="min-h-screen px-6 py-20">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <Link href="/" className="text-emerald-400 text-sm hover:text-emerald-300">
            ← Back to Relocate
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold">Compare Cities</h1>
          <p className="text-gray-400">
            Select 2-4 cities to compare side by side
          </p>
        </div>

        {/* City selector */}
        <div className="flex flex-wrap justify-center gap-2">
          {CITIES.map((c) => (
            <button
              key={c.city}
              onClick={() => toggleCity(c.city)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                selected.includes(c.city)
                  ? "bg-emerald-500/20 border border-emerald-500/50 text-emerald-400"
                  : "bg-white/5 border border-white/10 text-gray-400 hover:border-white/30"
              }`}
            >
              {c.flag} {c.city}
            </button>
          ))}
        </div>

        {/* Comparison table */}
        <div className="overflow-x-auto">
          <div className="min-w-[600px]">
            {/* Headers */}
            <div className="grid gap-4" style={{ gridTemplateColumns: `180px repeat(${compared.length}, 1fr)` }}>
              <div />
              {compared.map((c) => (
                <div key={c.city} className="text-center p-4 rounded-t-xl bg-white/[0.03] border border-white/10 border-b-0">
                  <span className="text-3xl">{c.flag}</span>
                  <h3 className="font-bold text-lg mt-2">{c.city}</h3>
                  <p className="text-sm text-gray-500">{c.country}</p>
                  <p className="text-xs text-emerald-400 mt-1">{c.bestFor}</p>
                </div>
              ))}
            </div>

            {/* Rows */}
            {[
              { label: "💰 Monthly Cost", key: "costRange" as const },
              { label: "🏠 Rent (3BR)", key: "rentRange" as const },
              { label: "🏫 School Cost", key: "schoolCostRange" as const },
              { label: "🏫 Top School", key: "topSchool" as const },
              { label: "🛡️ Safety", key: "safety" as const },
              { label: "📋 Visa Ease", key: "visaEase" as const },
              { label: "✈️ Flight from US", key: "flightHours" as const },
              { label: "🗣️ English Level", key: "englishLevel" as const },
              { label: "🌡️ Climate", key: "climate" as const },
            ].map((row, i) => (
              <div
                key={row.label}
                className="grid gap-4"
                style={{ gridTemplateColumns: `180px repeat(${compared.length}, 1fr)` }}
              >
                <div className={`flex items-center px-4 py-3 text-sm font-medium text-gray-400 ${i % 2 === 0 ? "bg-white/[0.02]" : ""}`}>
                  {row.label}
                </div>
                {compared.map((c) => (
                  <div
                    key={c.city}
                    className={`flex items-center justify-center px-4 py-3 text-sm text-center border-x border-white/10 ${i % 2 === 0 ? "bg-white/[0.02]" : ""} ${
                      row.key === "costRange" && c.costLow === Math.min(...compared.map((x) => x.costLow))
                        ? "text-emerald-400 font-semibold"
                        : "text-gray-300"
                    }`}
                  >
                    {c[row.key]}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center pt-8 space-y-4">
          <p className="text-gray-400">
            Want the full picture? Get a personalized report for any city.
          </p>
          <Link
            href="/#order"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-lg text-lg font-semibold bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 transition-all"
          >
            Get Your Report — $149 per city →
          </Link>
        </div>
      </div>
    </main>
  );
}
