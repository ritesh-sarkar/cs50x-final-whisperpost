const TodayMessage = ({ TodayMessage }) => {
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
        className="size-7 text-green-500 sm:size-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>

      <span className="text-3xl font-bold text-gray-800 pt-2">
        {TodayMessage.length}
      </span>

      <p className="text-gray-500 sm:text-lg sm:font-semibold">
        Today
      </p>
    </div>
  );
};

export default TodayMessage;
