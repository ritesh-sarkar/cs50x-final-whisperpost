const WeekMessage = ({ WeekMessage }) => {
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
        className="size-7 text-violet-500 sm:size-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
        />
      </svg>

      <span className="text-3xl font-bold text-gray-800 pt-2">
        {WeekMessage.length}
      </span>

      <p className="text-gray-500 sm:text-lg sm:font-semibold">
        This week
      </p>
    </div>
  );
};

export default WeekMessage;
