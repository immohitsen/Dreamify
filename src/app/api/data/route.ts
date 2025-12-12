import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import Data from "@/models/dataModel";

connect();

// Helper function to detect device type from user agent
function getDeviceType(userAgent: string): string {
  const ua = userAgent.toLowerCase();

  if (ua.includes('mobile') || ua.includes('android') || ua.includes('iphone')) {
    return 'Mobile';
  } else if (ua.includes('tablet') || ua.includes('ipad')) {
    return 'Tablet';
  } else if (ua.includes('windows') || ua.includes('mac') || ua.includes('linux')) {
    return 'Desktop';
  } else {
    return 'Unknown';
  }
}

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { prompt, response, location } = reqBody;

    console.log("=== API Data Route ===");
    console.log("Received location:", location);
    console.log("Received prompt:", prompt?.substring(0, 50));

    // Get user agent from request headers and parse device type
    const userAgentString = request.headers.get("user-agent") || "Unknown";
    const device = getDeviceType(userAgentString);
    console.log("Device Type:", device);

    // Format current date/time in Indian timezone
    const now = new Date();
    const dateTime = now.toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
      timeZoneName: 'short'
    });

    // Create data object with all fields
    const dataToSave: any = {
      prompt,
      response,
      userAgent: device,
      dateTime
    };

    // Add location if provided
    if (location) {
      dataToSave.location = location;
      console.log("Location added to dataToSave:", dataToSave.location);
    }

    console.log("Saving to database:", JSON.stringify(dataToSave, null, 2));
    const data = await Data.create(dataToSave);

    if (!data) {
      return NextResponse.json(
        { message: "Failed to create data" },
        { status: 500 }
      );
    }

    console.log("Saved data:", data);

    return NextResponse.json({
      message: "Data created successfully",
      success: true,
      data,
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
