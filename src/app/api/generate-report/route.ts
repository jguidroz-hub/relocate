import { NextRequest, NextResponse } from "next/server";
import { generateReport } from "@/lib/report-generator";
import { generateReportHtml } from "@/lib/report-pdf";
import { sendEmail, buildReportDeliveryEmail } from "@/lib/email";

export const maxDuration = 300; // 5 minutes for report generation

export async function POST(req: NextRequest) {
  // Simple auth check — only callable from webhook or with secret
  const authHeader = req.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.REPORT_GENERATION_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { city, country, email, familySize, childAges } = await req.json();

    if (!city || !country || !email) {
      return NextResponse.json(
        { error: "Missing required fields: city, country, email" },
        { status: 400 }
      );
    }

    console.log(`[Report] Starting generation for ${city}, ${country} → ${email}`);

    // Generate the report content
    const reportData = await generateReport({
      city,
      country,
      email,
      familySize,
      childAges,
    });

    console.log(`[Report] Generated ${reportData.sections.length} sections`);

    // Generate HTML (serves as both viewable and convertible to PDF)
    const reportHtml = generateReportHtml(reportData);

    // Convert HTML to base64 for attachment
    const htmlBase64 = Buffer.from(reportHtml).toString("base64");

    // Send the report email with HTML attachment
    const delivered = await sendEmail({
      to: email,
      subject: `Your Relocation Report: ${city}, ${country}`,
      html: buildReportDeliveryEmail(city, country),
      attachments: [
        {
          filename: `Relocation-Report-${city}-${country}.html`,
          content: htmlBase64,
          content_type: "text/html",
        },
      ],
    });

    if (delivered) {
      console.log(`[Report] Delivered to ${email}`);
    } else {
      console.error(`[Report] Delivery failed for ${email}`);
    }

    return NextResponse.json({
      success: true,
      delivered,
      sections: reportData.sections.length,
    });
  } catch (error) {
    console.error("[Report] Generation error:", error);
    return NextResponse.json(
      { error: "Report generation failed" },
      { status: 500 }
    );
  }
}
