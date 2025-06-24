"use client";
import Image from "next/image";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import LoaderComponent from "@/app/components/LoaderComponent";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    setLoading(true);
    try {
      const loginRequest = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (loginRequest.ok) {
        toast.success("Logged in successfully");
        router.push("/dashboard");
      }

      if (loginRequest.error) {
        toast.error(loginRequest.error);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <LoaderComponent state={"Loging in"} />;

  return (
    <div
      className="
        w-full
        h-full
        mx-auto
        flex
        flex-col
        sm:flex-row
        items-center
        justify-center
        pt-10
        p-2.5
        sm:gap-10
      "
    >
      <div className="sm:w-1/2 flex justify-center">
        <Image
          src="/login.svg"
          alt="login.svg"
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
        action="submit"
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
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
          Welcome back
        </h1>

        <h3 className="text-lg text-gray-600">
          Login to <span className="font-bold">WhisperPost</span>
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
            gap-2
            font-semibold
          "
        >
          Email:
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            gap-2
            font-semibold
          "
        >
          Password:
          <input
            type="password"
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
          Login
        </button>

        <p className="text-gray-600">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-blue-600 font-semibold">
            Sign up
          </Link>
        </p>

        <Link
          href="/forgot-password"
          className="
        text-blue-600 
        font-semibold
        hover:underline
        "
        >
          Forgot Password?
        </Link>
      </form>
    </div>
  );
};

export default Login;
