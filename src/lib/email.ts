interface SendEmailOptions {
  to: string;
  subject: string;
  html: string;
  attachments?: Array<{
    filename: string;
    content: string; // base64
    content_type?: string;
  }>;
}

export async function sendEmail(opts: SendEmailOptions): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[Email] RESEND_API_KEY not set");
    return false;
  }

  try {
    const body: Record<string, unknown> = {
      from: "Relocate by Greenbelt <noreply@projectgreenbelt.com>",
      to: opts.to,
      subject: opts.subject,
      html: opts.html,
    };

    if (opts.attachments?.length) {
      body.attachments = opts.attachments;
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("[Email] Send failed:", res.status, err);
      return false;
    }

    console.log("[Email] Sent successfully to", opts.to);
    return true;
  } catch (err) {
    console.error("[Email] Error:", err);
    return false;
  }
}

export function buildReportDeliveryEmail(city: string, country: string): string {
  return `
    <div style="font-family: -apple-system, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
      <div style="text-align: center; margin-bottom: 32px;">
        <h1 style="color: #059669; margin: 0;">Your Relocation Report is Ready</h1>
        <p style="color: #6b7280; font-size: 18px; margin-top: 8px;">${city}, ${country}</p>
      </div>
      
      <p style="color: #374151; line-height: 1.6;">
        Thank you for choosing Relocate by Greenbelt! Your personalized relocation report is attached to this email as a PDF.
      </p>
      
      <p style="color: #374151; line-height: 1.6;">
        Your report covers:
      </p>
      <ul style="color: #374151; line-height: 1.8;">
        <li>🏫 Schools & Education options</li>
        <li>🛡️ Safety & best neighborhoods</li>
        <li>💰 Detailed cost of living breakdown</li>
        <li>📋 Tax implications & visa options</li>
        <li>🏥 Healthcare system guide</li>
        <li>🏠 Daily life & cultural tips</li>
        <li>📦 Moving logistics checklist</li>
        <li>🤝 Vetted local contacts & resources</li>
      </ul>
      
      <p style="color: #374151; line-height: 1.6;">
        <strong>Have questions?</strong> Reply to this email or reach us at 
        <a href="mailto:jon@projectgreenbelt.com" style="color: #059669;">jon@projectgreenbelt.com</a>.
      </p>
      
      <div style="border-top: 1px solid #e5e7eb; margin-top: 40px; padding-top: 20px; text-align: center;">
        <p style="color: #9ca3af; font-size: 12px;">
          Relocate by Greenbelt · AI-Powered Relocation Intelligence<br/>
          <a href="https://projectgreenbelt.com" style="color: #059669;">projectgreenbelt.com</a>
        </p>
      </div>
    </div>
  `;
}

export function buildOrderNotificationEmail(
  email: string,
  city: string,
  country: string,
  familySize: string,
  childAges: string,
  amount: string,
  sessionId: string
): string {
  return `
    <h2>🎉 New Relocate Order</h2>
    <p><strong>Customer:</strong> ${email}</p>
    <p><strong>City:</strong> ${city}, ${country}</p>
    <p><strong>Family Size:</strong> ${familySize || "Not specified"}</p>
    <p><strong>Child Ages:</strong> ${childAges || "Not specified"}</p>
    <p><strong>Amount:</strong> $${amount}</p>
    <p><strong>Stripe Session:</strong> ${sessionId}</p>
    <hr/>
    <p>Report is being auto-generated and will be emailed to the customer.</p>
  `;
}
