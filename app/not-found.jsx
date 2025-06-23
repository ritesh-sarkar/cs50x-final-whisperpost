import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <div
      className="
    w-9/10
    h-auto
    mx-auto
    flex
    flex-col
    items-center
    justify-center
    gap-10
    pt-10
    "
    >
      <Image
        src="/not-found.svg"
        alt="404 Not Found"
        width={256}
        height={256}
        className="
        mt-10
        "
      />
      <h1
        className="
      font-poppins
      text-3xl
      font-bold
      text-gray-800

      "
      >
        404 Not Found!
      </h1>

      <p
        className="
      font-inter
      text-lg
      font-semibold
      text-gray-600
      "
      >
        The page you are looking for does not exist.
      </p>

      <Link
        href="/"
        className="
        font-semibold
        text-lg
        bg-blue-600
        hover:bg-blue-800
        text-white
        px-4
        py-2
        rounded-md
        transition-colors
        duration-300
        ease-in-out
        "
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
