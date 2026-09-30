import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const {
      name,
      email,
      company,
      phone,
      service,
      budget,
      timeline,
      message,
    } = data;

    // Validation
    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { success: false, error: "Required fields missing" },
        { status: 400 }
      );
    }

    const payload = {
      timestamp: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      name: name || "",
      email: email || "",
      company: company || "",
      phone: phone || "",
      service: service || "",
      budget: budget || "",
      timeline: timeline || "",
      message: message || "",
    };

    const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;

    if (webhookUrl) {
      try {
        // Method 1: Send as text/plain POST (Google Apps Script preferred format)
        let response = await fetch(webhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
          },
          body: JSON.stringify(payload),
          redirect: "follow",
        });

        // Method 2: Fallback to GET parameters if POST returned error
        if (!response.ok) {
          const params = new URLSearchParams(payload as Record<string, string>);
          response = await fetch(`${webhookUrl}?${params.toString()}`, {
            method: "GET",
            redirect: "follow",
          });
        }
      } catch (webhookErr) {
        console.error("Webhook forwarding error:", webhookErr);
      }
    } else {
      console.warn(
        "GOOGLE_SHEET_WEBHOOK_URL is not configured in environment variables."
      );
    }

    return NextResponse.json({
      success: true,
      message: "Lead submitted successfully",
    });
  } catch (error: any) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}
