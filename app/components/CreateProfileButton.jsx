import Link from "next/link";

const CreateProfileButton = () => {
  return (
    <Link
      href="/signup"
      className="
      text-center
      text-xl
      font-poppins
      font-semibold 
    text-white
    bg-blue-600
    hover:bg-blue-800 
      px-4 
      py-2 
      rounded-md 
      transition-colors
      duration-300
      ease-in-out"
    >
      Create Profile
    </Link>
  );
};

export default CreateProfileButton;
