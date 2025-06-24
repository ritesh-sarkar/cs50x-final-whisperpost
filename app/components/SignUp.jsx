"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SignUpValidationZod } from "@/lib/SignUpValidationZod";
import toast from "react-hot-toast";
import axios from "axios";

const SignUp = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [verifyBanner, setVerifyBanner] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const result = SignUpValidationZod.safeParse({
      name,
      username,
      email,
      password,
    });
    const failedData = {};

    if (!result.success) {
      result.error.issues.forEach((issue) => {
        failedData[issue.path[0]] = issue.message;
      });

      toast.error("Invalid form submission!");

      setError(failedData);
      setName(name);
      setUsername(username);
      setEmail(email);
      setPassword(password);
      return;
    }

    try {
      const res = await axios.post("/api/signup", {
        name,
        username,
        email,
        password,
      });

      if (res.status === 200) {
        toast.success(res.data.message);
        setVerifyBanner(true);
      }
    } catch (error) {
      toast.error(error.response.data.error);
    }

    setError("");
    setName("");
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <div
      className="
        w-full
        h-auto
        mx-auto
        flex
        flex-col
        sm:flex-row
        items-center
        justify-center 
        pt-10
        p-2.5
        sm:gap-10
        sm:h-full
      "
    >
      {!verifyBanner && (
        <>
          <div className="sm:w-1/2 flex justify-center">
            <Image
              src="/signup.svg"
              alt="signup illustration"
              width={250}
              height={250}
              className="
            m-2
            sm:w-[512px]
            sm:h-[512px]
          "
            />
          </div>

          <form
            onSubmit={handleSubmit}
            className="
          sm:w-1/2
          sm:max-w-[600px]
          w-4/5
          flex
          flex-col
          items-center
          justify-center
          gap-1
          shadow-md
          shadow-gray-300
          rounded
          p-2.5
          bg-white
          mb-10
        "
          >
            <h1
              className="
            font-poppins
            text-2xl
            font-semibold
            text-gray-800
            m-2
          "
            >
              Create profile
            </h1>

            <h3 className="text-lg text-gray-600">
              Join <span className="font-bold">WhisperPost</span> today!
            </h3>

            <label
              className="
            w-full
            flex
            flex-col
            items-start
            justify-start
            p-2.5
            text-gray-800
            gap-1
            font-semibold
          "
            >
              Name:
              <input
                type="text"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                required
                className="
              w-full
              py-2.5
              px-4
              rounded
              border
              border-gray-300
              focus:outline-none
              focus:ring-2
              focus:ring-blue-600
            "
              />
              {error && (
                <p
                  className="
          text-red-500
          text-sm
          my-1
          "
                >
                  {error.name}
                </p>
              )}
            </label>

            <label
              className="
            w-full
            flex
            flex-col
            items-start
            justify-start
            p-2.5
            text-gray-800
            gap-1
            font-semibold
          "
            >
              Username:
              <input
                type="text"
                autoComplete="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="@username"
                required
                className="
              w-full
              py-2.5
              px-4
              rounded
              border
              border-gray-300
              focus:outline-none
              focus:ring-2
              focus:ring-blue-600
            "
              />
              {error && (
                <p
                  className="
          text-red-500
          text-sm
          my-1
          "
                >
                  {error.username}
                </p>
              )}
            </label>

            <label
              className="
            w-full
            flex
            flex-col
            items-start
            justify-start
            p-2.5
            text-gray-800
            gap-1
            font-semibold
          "
            >
              Email:
              <input
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="
              w-full
              py-2.5
              px-4
              rounded
              border
              border-gray-300
              focus:outline-none
              focus:ring-2
              focus:ring-blue-600
            "
              />
              {error && (
                <p
                  className="
          text-red-500
          text-sm
          my-1
          "
                >
                  {error.email}
                </p>
              )}
            </label>

            <label
              className="
            w-full
            flex
            flex-col
            items-start
            justify-start
            p-2.5
            text-gray-800
            gap-1
            font-semibold
          "
            >
              Password:
              <input
                type="password"
                autoComplete="new-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                className="
              w-full
              py-2.5
              px-4
              rounded
              border
              border-gray-300
              focus:outline-none
              focus:ring-2
              focus:ring-blue-600
            "
              />
              {error && (
                <p
                  className="
          text-red-500
          text-sm
          my-1
          "
                >
                  {error.password}
                </p>
              )}
            </label>

            <button
              type="submit"
              className="
            w-full
            py-2.5
            font-semibold
            text-lg
            rounded
            bg-blue-600
            text-white
            hover:bg-blue-800
            transition-colors
            duration-300
            ease-in-out
            m-2
            sm:m-5
          "
            >
              Sign Up
            </button>

            <p className="text-gray-600">
              Already have an account?{" "}
              <Link href="/login" className="text-blue-600 font-semibold">
                Log in
              </Link>
            </p>
          </form>
        </>
      )}

      {verifyBanner && (
        <>
          <div
            className="
             w-9/10
            max-w-[600px]
            mx-auto
            flex
            flex-col
            items-center
            justify-center
            gap-4
            text-center
            bg-white
            rounded-lg
            shadow-lg
            shadow-gray-200
            py-5
            px-3
            sm:py-6
            sm:px-5
            "
          >
            <h1
              className="
               font-poppins
              text-2xl
              font-semibold
              text-gray-800
              sm:text-3xl
              sm:font-semibold
              sm:leading-tight
              "
            >
              A verification link has been sent to your email.
            </h1>

            <p
              className="
               font-poppins
              text-gray-600
              sm:text-lg
              sm:font-medium
              sm:leading-snug
              sm:tracking-wide
              sm:mt-1
              sm:mb-3
              "
            >
              {" "}
              Please check your email and verify your account to do further
              action.
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default SignUp;
