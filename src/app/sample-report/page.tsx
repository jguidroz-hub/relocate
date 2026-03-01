import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sample Report — Relocate by Greenbelt",
  description:
    "Preview what a personalized relocation report looks like. See the depth of research we provide for families moving abroad.",
};

const SAMPLE_SECTIONS = [
  {
    num: 1,
    title: "Executive Summary",
    preview: `Medellín has emerged as one of the top relocation destinations for American families, and for good reason. The city offers an exceptional quality of life at roughly 40-60% of the cost of major US cities, with year-round spring-like weather (65-80°F), a modern metro system, and a growing international community.

For families with school-age children, the education landscape is strong — several internationally accredited schools offer IB and American curricula in English, with tuition ranging from $5,000-$15,000/year (compared to $25,000-$40,000 at comparable US private schools).

**Key considerations:** While safety has improved dramatically, neighborhood selection matters significantly. The city's elevation (5,000 ft) means mild weather but an adjustment period. Spanish proficiency will meaningfully impact your daily experience — plan for family language classes.`,
  },
  {
    num: 2,
    title: "Schools & Education",
    preview: `### Top International Schools

**The Columbus School** — Fully accredited IB World School (PYP, MYP, DP). Founded 1947. Bilingual English-Spanish. Tuition: ~$10,000-$14,000/year. Located in Envigado. Application deadline: February for August enrollment. Strong STEM program and college placement (95%+ university acceptance).

**The Vermont School** — American curriculum with Colombian validation. English-dominant instruction. Tuition: ~$8,000-$12,000/year. Smaller class sizes (avg 18 students). El Poblado campus with modern facilities.

**Colegio Montessori** — Montessori through elementary, transitioning to IB in secondary. Bilingual. Strong arts and environmental education programs. Tuition: ~$6,000-$9,000/year.

### Enrollment Timeline
- **October-December:** Research and campus visits
- **January-February:** Application submissions
- **March:** Entrance assessments and interviews
- **April-May:** Admission decisions
- **August:** School year begins`,
  },
  {
    num: 3,
    title: "Cost of Living Breakdown",
    preview: `### Monthly Budget for Family of 4 (USD)

| Category | Budget Range | US Equivalent |
|----------|-------------|---------------|
| Housing (3BR, El Poblado) | $1,200-$2,000 | $3,000-$5,000 |
| Groceries | $400-$600 | $800-$1,200 |
| Utilities | $100-$150 | $250-$400 |
| School tuition (2 kids) | $800-$2,000 | $2,000-$6,000 |
| Healthcare/insurance | $200-$400 | $1,500-$2,500 |
| Transportation | $150-$300 | $500-$1,000 |
| Dining out | $200-$400 | $500-$1,000 |
| Domestic help (2x/week) | $150-$250 | $600-$1,000 |
| Entertainment | $200-$300 | $400-$800 |
| **Total** | **$3,400-$6,400** | **$9,550-$18,900** |

**Bottom line:** A comfortable family lifestyle in Medellín costs roughly 35-50% of what you'd spend in Austin, Denver, or Atlanta.`,
  },
  {
    num: 4,
    title: "Safety & Neighborhoods",
    preview: `### Top Family Neighborhoods

**El Poblado (Estrato 6)** — The most popular expat area. Walkable, safe, abundant restaurants and parks. 10-min walk to schools. Average rent: $1,500-$2,200/3BR. Cons: higher prices, can feel "bubble-like."

**Envigado** — Adjacent to Medellín, quieter and more Colombian. Excellent schools nearby (Columbus School). Safer crime stats than El Poblado. Rent: $1,000-$1,600/3BR. Strong local community feel.

**Laureles/Estadio** — More authentically Colombian, great food scene, flat terrain (unlike hilly Poblado). Growing expat community. Rent: $900-$1,400/3BR. Excellent metro access.

### Safety Context
Medellín's homicide rate has dropped 95% since the 1990s. For context, it's now comparable to cities like Nashville or Indianapolis. Standard precautions apply: avoid displaying expensive items, use registered taxis or apps (InDriver, DiDi), and stay aware of surroundings at night.`,
  },
];

export default function SampleReportPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="px-6 py-20 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-sm font-medium text-emerald-400">
            📄 Sample Report Preview
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">
            Medellín, Colombia
          </h1>
          <p className="text-lg text-gray-400">
            This is a preview of 4 of 9 sections from an actual relocation
            report. Full reports are 50+ pages with personalized data for your
            family.
          </p>
        </div>
      </section>

      {/* Sample Sections */}
      <section className="px-6 pb-20">
        <div className="max-w-4xl mx-auto space-y-12">
          {SAMPLE_SECTIONS.map((s) => (
            <div
              key={s.num}
              className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden"
            >
              <div className="flex items-center gap-4 px-6 py-4 border-b border-white/10 bg-white/[0.02]">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-lg flex items-center justify-center flex-shrink-0">
                  {s.num}
                </div>
                <h2 className="text-xl font-semibold">{s.title}</h2>
              </div>
              <div className="px-6 py-6 prose prose-invert prose-sm max-w-none">
                {s.preview.split("\n").map((line, i) => {
                  if (line.startsWith("###"))
                    return (
                      <h3
                        key={i}
                        className="text-emerald-400 text-lg font-semibold mt-4 mb-2"
                      >
                        {line.replace("### ", "")}
                      </h3>
                    );
                  if (line.startsWith("**") && line.endsWith("**"))
                    return (
                      <p key={i} className="font-semibold text-white">
                        {line.replace(/\*\*/g, "")}
                      </p>
                    );
                  if (line.startsWith("|"))
                    return (
                      <pre
                        key={i}
                        className="text-xs text-gray-300 font-mono overflow-x-auto"
                      >
                        {line}
                      </pre>
                    );
                  if (line.startsWith("- "))
                    return (
                      <li key={i} className="text-gray-300 ml-4">
                        {line.replace("- ", "")}
                      </li>
                    );
                  if (line.trim() === "") return <br key={i} />;
                  return (
                    <p key={i} className="text-gray-300 leading-relaxed">
                      {line}
                    </p>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Remaining sections teaser */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 text-center space-y-4">
            <p className="text-gray-400 text-lg">
              + 5 more sections in the full report:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "📋 Taxes & Legal",
                "🏥 Healthcare",
                "🏠 Daily Life & Culture",
                "📦 Moving Logistics",
                "🤝 Local Contacts",
              ].map((s) => (
                <span
                  key={s}
                  className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-300"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center pt-8">
            <a
              href="/#order"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-lg text-lg font-semibold bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 transition-all shadow-xl shadow-emerald-500/20"
            >
              Get Your Report — $149
              <span className="text-xl">→</span>
            </a>
            <p className="text-sm text-gray-500 mt-4">
              Personalized to your family · Delivered in 24 hours
            </p>
          </div>
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
