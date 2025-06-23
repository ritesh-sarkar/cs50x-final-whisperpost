"use client";

import { useState } from "react";
import Image from "next/image";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const ForgotComponent = () => {
  const [state, setState] = useState("email-state");
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    toast.success("Email sent successfully");
    setState("OTP-state");
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    if (otp.length !== 6) return toast.error("Invalid OTP");
    console.log(otp);
    toast.success("OTP verified successfully");
    setState("password-state");
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) return toast.error("Passwords do not match");
    console.log(password);
    toast.success("Password changed successfully");
    router.push("/login");
  };

  return (
    <div
      className="
        w-full
        h-full
        flex
        flex-col
        justify-center
        items-center
        sm:flex-row
        sm:gap-10
        sm:h-screen
      "
    >
      <Image
        src="/forgot.svg"
        alt="forgot.svg"
        width={300}
        height={300}
        className="
          mt-20
          mb-10
          mx-auto
          sm:w-98
          sm:h-98
        "
      />

      <aside
        className="
          w-9/10
          max-w-[700px]
          h-auto
          mx-auto
          flex
          flex-col
          items-center
          justify-center
          bg-white
          rounded-lg
          shadow-lg
          shadow-gray-300
          py-5
          px-3
          mb-5
          sm:py-10
          sm:px-10
        "
      >
        <h1
          className="
            font-poppins
            text-2xl
            font-bold
            text-gray-800
            mb-3
            sm:text-3xl
            sm:mb-5
          "
        >
          Forgot Password?
        </h1>

        <p
          className="
            font-poppins
            text-sm
            text-gray-600
            mb-5
            sm:text-xl
            sm:mb-10
          "
        >
          Don&apos;t worry! You will get your account back by few steps!
        </p>

        {state === "email-state" && (
          <form
            onSubmit={handleEmailSubmit}
            className="
              w-full
              flex
              flex-col
              items-center
              justify-center
              gap-5
              sm:gap-10
            "
          >
            <h1
              className="
                font-poppins
                text-base
                font-semibold
                text-gray-800
                sm:text-2xl
                sm:mb-5
              "
            >
              Enter the email associated with your account.
            </h1>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              required
              placeholder="Enter your email"
              className="
                w-4/5
                py-2.5
                px-4
                text-xl
                text-left
                text-gray-800
                bg-gray-100
                border
                border-gray-300
                rounded-lg
                focus:outline-none
                focus:border-blue-500
                my-5
              "
            />

            <button
              type="submit"
              className="
                w-1/2
                py-2
                px-4
                text-white
                font-semibold
                bg-blue-600
                hover:bg-blue-800
                rounded-lg
                focus:outline-none
                focus:bg-blue-800
                active:scale-90
                transition-all
                duration-300
                ease-in-out
                mb-5
                sm:w-1/3
                sm:text-lg
                sm:py-3
                sm:px-6
                sm:rounded-lg
              "
            >
              Send OTP
            </button>
          </form>
        )}

        {state === "OTP-state" && (
          <form
            onSubmit={handleOtpSubmit}
            className="
              w-full
              flex
              flex-col
              items-center
              justify-center
              gap-5
              sm:gap-10
            "
          >
            <h1
              className="
                font-poppins
                text-base
                font-semibold
                text-gray-800
                sm:text-2xl
                sm:mb-5
              "
            >
              An OTP has been sent to your email.
            </h1>

            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
              placeholder="OTP"
              className="
                w-1/2
                py-2
                px-4
                text-3xl
                font-bold
                text-center
                text-gray-800
                bg-gray-100
                border
                border-gray-300
                rounded-lg
                focus:outline-none
                focus:border-blue-500
              "
            />

            <button
              type="submit"
              className="
                w-1/2
                py-2
                px-4
                text-white
                font-semibold
                bg-blue-600
                hover:bg-blue-800
                rounded-lg
                focus:outline-none
                focus:bg-blue-800
                active:scale-90
                sm:w-1/3
                sm:text-lg
                sm:py-3
                sm:px-6
                sm:rounded-lg
              "
            >
              Verify
            </button>
          </form>
        )}

        {state === "password-state" && (
          <form
            onSubmit={handlePasswordSubmit}
            className="
              w-full
              flex
              flex-col
              items-center
              justify-center
            "
          >
            <h1
              className="
                font-poppins
                text-base
                font-semibold
                text-gray-800
                sm:text-2xl
                sm:mb-5
              "
            >
              Enter your new password
            </h1>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your new password"
              className="
                w-4/5
                py-2.5
                px-4
                rounded
                border
                border-gray-300
                focus:outline-none
                focus:ring-2
                focus:ring-blue-600
                my-2.5
                mt-5
              "
            />

            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              placeholder="Confirm your new password"
              className="
                w-4/5
                py-2.5
                px-4
                rounded
                border
                border-gray-300
                focus:outline-none
                focus:ring-2
                focus:ring-blue-600
                my-2.5
                mb-5
              "
            />

            <button
              type="submit"
              className="
                w-1/2
                py-2
                px-4
                text-white
                font-semibold
                bg-blue-600
                hover:bg-blue-800
                rounded-lg
                focus:outline-none
                focus:bg-blue-800
                active:scale-90
                sm:w-1/3
                sm:text-lg
                sm:py-3
                sm:px-6
                sm:rounded-lg
              "
            >
              Change Password
            </button>
          </form>
        )}
      </aside>
    </div>
  );
};

export default ForgotComponent;
