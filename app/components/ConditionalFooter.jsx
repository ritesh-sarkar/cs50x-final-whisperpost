"use client";
import { usePathname } from "next/navigation";

const ConditionalFooter = () => {
  const pathname = usePathname();
  if (pathname === "/" || pathname === "/dashboard")
    return (
      <footer
        className="
        border-t-2
        border-solid
        border-gray-300 
        py-8
        "
      >
        <div
          className="   
          text-gray-600
          text-center
          "
        >
          © 2025 WhisperPost. All rights reserved by Ritesh Sarkar.
        </div>
      </footer>
    );
};

export default ConditionalFooter;
