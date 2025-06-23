const Unread = ({ Unread }) => {
  return (
    <div
      className="
        w-40
        h-40
        bg-white
        rounded-lg
        flex
        flex-col
        items-start
        shadow-lg
        shadow-gray-200
        py-5
        px-3
        gap-2
        sm:gap-3
        sm:px-5
        sm:py-6
        sm:w-64
        sm:h-44
      "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="size-7 text-orange-500 sm:size-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        />
      </svg>

      <span className="text-3xl font-bold text-gray-800 pt-2">
        {Unread.length}
      </span>

      <p className="text-gray-500 sm:text-lg sm:font-semibold">
        Unread
      </p>
    </div>
  );
};

export default Unread;
