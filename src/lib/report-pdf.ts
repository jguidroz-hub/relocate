// Server-side HTML-to-PDF using a simple HTML template
// We'll generate an HTML report and convert to PDF

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

function markdownToHtml(md: string): string {
  let html = md
    // Headers
    .replace(/^#### (.+)$/gm, "<h4>$1</h4>")
    .replace(/^### (.+)$/gm, "<h3>$1</h3>")
    .replace(/^## (.+)$/gm, "<h2>$1</h2>")
    // Bold
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    // Italic
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    // Unordered lists
    .replace(/^- (.+)$/gm, "<li>$1</li>")
    // Numbered lists
    .replace(/^\d+\. (.+)$/gm, "<li>$1</li>")
    // Wrap consecutive <li> in <ul>
    .replace(/((?:<li>.*<\/li>\n?)+)/g, "<ul>$1</ul>")
    // Tables (basic)
    .replace(/\|(.+)\|/g, (match) => {
      const cells = match
        .split("|")
        .filter((c) => c.trim())
        .map((c) => c.trim());
      if (cells.every((c) => /^[-:]+$/.test(c))) return ""; // separator row
      return `<tr>${cells.map((c) => `<td>${c}</td>`).join("")}</tr>`;
    })
    // Wrap consecutive <tr> in <table>
    .replace(/((?:<tr>.*<\/tr>\n?)+)/g, '<table border="1" cellpadding="8" cellspacing="0" style="border-collapse:collapse;width:100%;margin:12px 0">$1</table>')
    // Paragraphs (lines that aren't already HTML)
    .replace(/^(?!<[a-z])((?!^\s*$).+)$/gm, "<p>$1</p>");

  return html;
}

export function generateReportHtml(data: ReportData): string {
  const date = new Date(data.generatedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const sectionsHtml = data.sections
    .map(
      (s, i) => `
      <div class="section" ${i > 0 ? 'style="page-break-before:always"' : ""}>
        <div class="section-header">
          <div class="section-number">${i + 1}</div>
          <h2 class="section-title">${s.title}</h2>
        </div>
        <div class="section-content">
          ${markdownToHtml(s.content)}
        </div>
      </div>`
    )
    .join("\n");

  return `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  @page { margin: 1in; size: letter; }
  body {
    font-family: 'Georgia', 'Times New Roman', serif;
    color: #1a1a1a;
    line-height: 1.7;
    font-size: 11pt;
    max-width: 7in;
    margin: 0 auto;
    padding: 0;
  }
  .cover {
    text-align: center;
    padding: 120px 0 80px;
    page-break-after: always;
  }
  .cover h1 {
    font-size: 32pt;
    color: #059669;
    margin: 0;
    line-height: 1.2;
  }
  .cover .subtitle {
    font-size: 14pt;
    color: #6b7280;
    margin-top: 16px;
  }
  .cover .meta {
    margin-top: 60px;
    font-size: 10pt;
    color: #9ca3af;
  }
  .cover .meta p { margin: 4px 0; }
  .cover .brand {
    margin-top: 80px;
    font-size: 10pt;
    color: #059669;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
  .toc {
    page-break-after: always;
    padding: 40px 0;
  }
  .toc h2 {
    font-size: 20pt;
    color: #059669;
    border-bottom: 2px solid #059669;
    padding-bottom: 8px;
  }
  .toc ul { list-style: none; padding: 0; }
  .toc li {
    padding: 10px 0;
    border-bottom: 1px solid #e5e7eb;
    font-size: 12pt;
  }
  .toc li span.num {
    color: #059669;
    font-weight: bold;
    margin-right: 12px;
  }
  .section-header {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 24px;
    border-bottom: 2px solid #059669;
    padding-bottom: 12px;
  }
  .section-number {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #059669;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16pt;
    font-weight: bold;
    flex-shrink: 0;
  }
  .section-title {
    font-size: 20pt;
    color: #059669;
    margin: 0;
  }
  .section-content h2 { font-size: 14pt; color: #374151; margin: 20px 0 8px; }
  .section-content h3 { font-size: 12pt; color: #059669; margin: 16px 0 8px; }
  .section-content h4 { font-size: 11pt; color: #4b5563; margin: 12px 0 6px; }
  .section-content p { margin: 8px 0; }
  .section-content ul { padding-left: 20px; }
  .section-content li { margin: 4px 0; }
  .section-content table {
    font-size: 10pt;
    border-color: #d1d5db;
  }
  .section-content td {
    padding: 6px 10px;
    border: 1px solid #d1d5db;
  }
  .section-content tr:first-child td {
    background: #f3f4f6;
    font-weight: bold;
  }
  .section-content strong { color: #059669; }
  .disclaimer {
    margin-top: 60px;
    padding-top: 20px;
    border-top: 1px solid #d1d5db;
    font-size: 9pt;
    color: #9ca3af;
    page-break-before: always;
  }
</style>
</head>
<body>

<div class="cover">
  <h1>Relocation Report</h1>
  <h1 style="color:#1a1a1a;font-size:28pt;margin-top:8px">${data.city}, ${data.country}</h1>
  <p class="subtitle">Personalized Family Relocation Intelligence</p>
  <div class="meta">
    <p>Prepared: ${date}</p>
    <p>Family Size: ${data.familySize}</p>
    <p>Children's Ages: ${data.childAges}</p>
  </div>
  <p class="brand">Relocate by Greenbelt</p>
</div>

<div class="toc">
  <h2>Table of Contents</h2>
  <ul>
    ${data.sections.map((s, i) => `<li><span class="num">${i + 1}.</span> ${s.title}</li>`).join("\n    ")}
  </ul>
</div>

${sectionsHtml}

<div class="disclaimer">
  <h3>Disclaimer</h3>
  <p>This report was generated using AI-assisted research and is intended as a starting point for your relocation planning. While we strive for accuracy, information about costs, visa requirements, schools, and local regulations changes frequently. We recommend verifying critical details with local professionals before making decisions.</p>
  <p>© ${new Date().getFullYear()} Relocate by Greenbelt — projectgreenbelt.com</p>
</div>

</body>
</html>`;
}
