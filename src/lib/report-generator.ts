import OpenAI from "openai";

interface ReportInput {
  city: string;
  country: string;
  email: string;
  familySize?: string;
  childAges?: string;
}

interface ReportSection {
  title: string;
  content: string;
}

interface ReportData {
  city: string;
  country: string;
  familySize: string;
  childAges: string;
  generatedAt: string;
  sections: ReportSection[];
}

const SECTION_PROMPTS = [
  {
    title: "Executive Summary",
    prompt: `Write a 2-3 paragraph executive summary for a family considering relocating to {city}, {country}. Cover the key highlights: quality of life, safety, cost relative to US cities, education quality, and overall recommendation. Family context: {familyContext}. Be honest about both pros and cons.`,
  },
  {
    title: "Schools & Education",
    prompt: `Provide a comprehensive guide to international and bilingual schools in {city}, {country} for a family with {childAges}. Include:
- Top 5-8 international schools with curriculum type (IB, American, British, local), approximate tuition ranges, language of instruction
- Enrollment timeline and application process
- Public vs private school comparison
- After-school activities and extracurricular availability
- Special needs support availability
- University pathway considerations
Be specific with school names and realistic with costs.`,
  },
  {
    title: "Safety & Neighborhoods",
    prompt: `Provide a detailed safety and neighborhood guide for {city}, {country} for an expat family with children. Include:
- Overall safety rating and context (compared to US cities)
- Top 5-7 family-friendly neighborhoods with descriptions, typical rent ranges, walkability, proximity to schools
- Areas to avoid
- Common safety concerns and how to mitigate them
- Emergency services quality and accessibility
- Community feel and expat density by neighborhood
Be honest and practical, not promotional.`,
  },
  {
    title: "Cost of Living",
    prompt: `Create a detailed monthly budget breakdown for a family of {familySize} living in {city}, {country}. Include:
- Housing (rent for 2-3 bedroom apartment/house in good neighborhoods)
- Groceries and dining out
- Utilities (electricity, water, internet, phone)
- Transportation (car ownership vs public transit)
- Healthcare/insurance
- Childcare/school tuition
- Entertainment and activities
- Domestic help (if common in the area)
- Total monthly estimate in USD
Compare to typical US city costs. Use realistic 2025-2026 numbers.`,
  },
  {
    title: "Taxes & Legal",
    prompt: `Provide a comprehensive tax and legal guide for a US family relocating to {city}, {country}. Include:
- Visa options (investor, digital nomad, retirement, employment) with requirements and timelines
- Tax obligations (local taxes, US tax obligations while abroad, FBAR/FATCA)
- Path to residency/citizenship
- Banking and financial considerations
- Property ownership rules for foreigners
- Business formation options if applicable
- Key legal differences from the US
Be specific about visa types, costs, and processing times.`,
  },
  {
    title: "Healthcare",
    prompt: `Provide a healthcare guide for {city}, {country} for an expat family with children ({childAges}). Include:
- Public vs private healthcare system overview
- Top hospitals and clinics (especially with English-speaking staff)
- Health insurance options and typical costs
- Pediatric care quality and availability
- Dental and vision care
- Emergency services
- Vaccination and preventive care
- Mental health services availability
- Pharmacy access and prescription medication
Be practical and include approximate costs.`,
  },
  {
    title: "Daily Life & Culture",
    prompt: `Describe daily life for an American family in {city}, {country}. Include:
- Typical daily routine adjustments
- Language requirements (how much local language is needed day-to-day)
- Food and grocery shopping (familiar brands availability, local markets)
- Weather and climate throughout the year
- Social life and making friends (expat communities, local integration)
- Internet and connectivity quality
- Entertainment, parks, and family activities
- Pet relocation considerations
- Cultural adjustments and potential challenges
- Work-life balance compared to the US`,
  },
  {
    title: "Logistics & Moving",
    prompt: `Provide a practical moving logistics guide for relocating from the US to {city}, {country}. Include:
- Timeline and checklist (3-6 months before move)
- Shipping household goods (costs, companies, timeline)
- What to bring vs buy locally
- Setting up utilities and internet
- Getting a local phone number
- Opening a bank account
- Driver's license conversion
- Enrolling kids in school (timeline)
- Finding housing remotely vs on arrival
- Recommended relocation agents and services
Be practical and action-oriented.`,
  },
  {
    title: "Vetted Local Contacts & Resources",
    prompt: `Provide a curated list of contacts and resources for a family relocating to {city}, {country}. Include:
- Immigration lawyers (2-3 recommendations with specialties)
- Relocation agencies
- Real estate agents specializing in expat rentals
- Expat community groups (Facebook groups, meetups, organizations)
- International school admission contacts
- English-speaking doctors/pediatricians
- Useful apps and websites for daily life
- Emergency numbers
Note: recommend types of professionals to look for and where to find them. Include real organizations and communities where possible.`,
  },
];

function buildFamilyContext(input: ReportInput): string {
  const parts: string[] = [];
  if (input.familySize) parts.push(`Family size: ${input.familySize}`);
  if (input.childAges) parts.push(`Children's ages: ${input.childAges}`);
  if (parts.length === 0) parts.push("Family details not specified");
  return parts.join(". ");
}

export async function generateReport(input: ReportInput): Promise<ReportData> {
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  const familyContext = buildFamilyContext(input);

  const sections: ReportSection[] = [];

  // Generate each section (sequentially to manage rate limits)
  for (const sectionDef of SECTION_PROMPTS) {
    const prompt = sectionDef.prompt
      .replace(/{city}/g, input.city)
      .replace(/{country}/g, input.country)
      .replace(/{familyContext}/g, familyContext)
      .replace(/{familySize}/g, input.familySize || "4")
      .replace(/{childAges}/g, input.childAges || "school-age children");

    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
          {
            role: "system",
            content: `You are an expert relocation consultant who has helped hundreds of families move abroad. Write detailed, actionable, honest content. Use specific names, numbers, and real-world data. Format with markdown headers (##, ###), bullet points, and tables where appropriate. Do NOT use the section title as an opening header — just dive into the content. Aim for 800-1200 words per section.`,
          },
          { role: "user", content: prompt },
        ],
        temperature: 0.7,
        max_tokens: 2000,
      });

      sections.push({
        title: sectionDef.title,
        content: completion.choices[0]?.message?.content || "Content generation failed.",
      });
    } catch (err) {
      console.error(`[Report] Failed to generate section "${sectionDef.title}":`, err);
      sections.push({
        title: sectionDef.title,
        content: `This section could not be generated. Please contact support at jon@projectgreenbelt.com for assistance.`,
      });
    }
  }

  return {
    city: input.city,
    country: input.country,
    familySize: input.familySize || "Not specified",
    childAges: input.childAges || "Not specified",
    generatedAt: new Date().toISOString(),
    sections,
  };
}
