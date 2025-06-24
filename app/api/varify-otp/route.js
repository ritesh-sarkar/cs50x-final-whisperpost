import OTP from "@/models/otpModel";
import ConnectToDB from "@/lib/DBConnection";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { otpFromUser, email } = await req.json();
    if (!email || !otpFromUser || otpFromUser.length !== 6) {
      return NextResponse.json({ message: "Invalid request" }, { status: 400 });
    }

    await ConnectToDB();

    const otpFromServer = await OTP.findOne({ email });

    if (
      !otpFromServer ||
      otpFromUser !== otpFromServer.otp ||
      otpFromServer.expiresAt < new Date()
    ) {
      return NextResponse.json(
        { message: "OTP expired or incorrect" },
        { status: 400 }
      );
    }

    await OTP.deleteOne({ email });

    return NextResponse.json(
      { message: "OTP Verified Successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error", error: error.message },
      { status: 500 }
    );
  }
}
