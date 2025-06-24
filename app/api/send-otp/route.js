import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import User from "@/models/UserModel";
import OTP from "@/models/otpModel";
import ConnectToDB from "@/lib/DBConnection";

export async function POST(req) {
  try {
    const { email } = await req.json();
    await ConnectToDB();

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 400 });
    }

    const generatedOTP = Math.floor(100000 + Math.random() * 900000).toString();

    // Remove old OTPs
    try {
      await OTP.deleteMany({ email });
    } catch (err) {
      return NextResponse.json(
        { message: "Error deleting old OTPs", error: err.message },
        { status: 500 }
      );
    }

    const otp = new OTP({
      email,
      otp: generatedOTP,
      expiresAt: new Date(Date.now() + 5 * 60 * 1000),
    });

    try {
      await otp.save();
    } catch (error) {
      return NextResponse.json(
        { message: "Error saving OTP", error: error.message },
        { status: 500 }
      );
    }

    // Send email
    try {
      const mailOption = {
        from: "developerriteshsarkar@gmail.com",
        to: user.email,
        subject: "WhisperPost| Reset Password",
        html: `
                  <h2>Verify Your Email</h2>
                  <p>Use the following OTP to verify your email:</p>
                  <h3>${generatedOTP}</h3>
                  <p>This OTP will expire in 5 minutes.</p>
                  `,
      };

      const transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT),
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD,
        },
      });

      await transport.sendMail(mailOption);

      return NextResponse.json(
        { message: "An OTP is sent to your email" },
        { status: 200 }
      );
    } catch (error) {
      return NextResponse.json(
        { message: "Error sending OTP", error: error.message },
        { status: 500 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error", error: error.message },
      { status: 500 }
    );
  }
}
