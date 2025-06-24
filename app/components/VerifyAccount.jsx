"use client";

import { useRouter, useParams } from "next/navigation";
import toast from "react-hot-toast";
import { useState } from "react";
import axios from "axios";
import LoaderComponent from "@/app/components/LoaderComponent";

const VerifyAccount = () => {
  const router = useRouter();
  const { token } = useParams();
  const [verificationToken, setVerificationToken] = useState(token);
  const [loading, setLoading] = useState(false);

  const handleVerification = async () => {
    setLoading(true);
    try {
      const res = await axios.post("/api/verify", {
        token: verificationToken,
      });

      if (res.status === 200) {
        toast.success("Account verified successfully");
        setVerificationToken("");
        router.push("/login");
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  if (loading) return <LoaderComponent state={"Verifying account"} />;

  return (
    <div
      className="
    w-4/5
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
    "
    >
      <h1
        className="
      text-2xl
      font-semibold
      text-gray-800
      font-poppins
      sm:text-3xl
      sm:font-bold
      sm:leading-tight
      "
      >
        Thanks for signing up!
      </h1>

      <p
        className="
      text-gray-600
      font-poppins
      text-sm
      font-semibold
      sm:text-xl
      "
      >
        {" "}
        Verify your account to get started.
      </p>

      <button
        type="button"
        onClick={handleVerification}
        className="
      text-white
      bg-blue-600
      hover:bg-blue-800 
      px-4 
      py-2 
      rounded-md 
      transition-all
      duration-300
      ease-in-out
      active:scale-90
      font-semibold
      my-4
      "
      >
        Verify Account
      </button>
    </div>
  );
};

export default VerifyAccount;
