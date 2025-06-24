import { NextResponse } from "next/server";
import ConnectToDB from "@/lib/DBConnection";
import User from "@/models/UserModel";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    await ConnectToDB();

    const { email, newPassword } = await req.json();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    const user = await User.findOneAndUpdate(
      { email },
      { password: hashedPassword }
    );

    if (!user) {
      return NextResponse.json(
        { message: "Password reset failed. User not found." },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: "Password reset successful" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Server error", error: error.message },
      { status: 500 }
    );
  }
}
