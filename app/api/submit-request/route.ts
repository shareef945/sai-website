import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    
    // Prepare data for submission
    const submissionData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      emailAddress: formData.emailAddress,
      phoneNumber: formData.phoneNumber,
      leadSource: "Website",
      service: formData.service || "Not specified",
      budgetRange: formData.budgetRange || "$1000-$5000"
    };

    // Forward the request to your external API
    const response = await fetch("https://n8n.saitechnology.co/webhook/technology/lead", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(submissionData),
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to submit form to external service" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error processing form submission:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}