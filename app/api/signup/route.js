import User from "@/models/UserModel";
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import ConnectToDB from "@/lib/DBConnection";

const JWT_Secret = process.env.JWT_SECRET;
const NEXT_AUTH_URL = process.env.NEXT_AUTH_URL;

export async function POST(req) {
  const { name, username, email, password } = await req.json();

  try {
    await ConnectToDB();

    const isExistUser = await User.findOne({ email });
    const isExistUsername = await User.findOne({ username });

    if (isExistUser) {
      return NextResponse.json(
        { error: "User already exist!" },
        { status: 400 }
      );
    }
    if (isExistUsername) {
      return NextResponse.json(
        { error: "username already taken!" },
        { status: 400 }
      );
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({
      name,
      username,
      email,
      password: hashedPassword,
      isVarified: false,
    });

    await user.save();

    const token = jwt.sign(
      {
        userId: user._id,
        email: user.email,
      },
      JWT_Secret,
      {
        expiresIn: "1h",
      }
    );

    const mailOption = {
      from: "developerriteshsarkar@gmail.com",
      to: user.email,
      subject: "WhisperPost| Verify Your Email",
      html: `
            <h1>Verify Your Email</h1>
            <p>Click the link below to verify your email:</p>
            <a href="${NEXT_AUTH_URL}/verify/${token}">Verify Email</a>
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
      {
        message:
          "Signup successful! Please check your email to verify your account.",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
