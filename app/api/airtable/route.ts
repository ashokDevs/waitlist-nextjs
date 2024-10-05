import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    const baseId = process.env.AIRTABLE_BASE_ID as string;
    const tableIdOrName = process.env.AIRTABLE_TABLE_NAME as string;
    const url = `https://api.airtable.com/v0/${baseId}/${tableIdOrName}`;

    const insertData = {
      records: [
        {
          fields: {
            email: data.email.toString(),
          },
        }
      ],
    };

    const airtableResponse = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(insertData),
    });

    if (!airtableResponse.ok) {
      throw new Error(`Error: ${airtableResponse.statusText}`);
    }

    const responseData = await airtableResponse.json();

    return NextResponse.json({
      message: "Data successfully sent to Airtable",
      data: responseData,
    });
  } catch (error: unknown) {
    return NextResponse.json(
      {
        message: "Error sending data to Airtable",
        error: (error as Error).message,
      },
      { status: 500 }
    );
  }
}
