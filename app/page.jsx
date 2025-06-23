import CreateProfileButton from "@/app/components/CreateProfileButton";

const page = () => {
  return (
    <div
      className="
        min-h-screen
        flex
        flex-col
        gap-4
        items-center
        justify-center
        w-full
        mt-20
      "
    >
    
      <div
        className="
          w-full
          py-2
          flex
          flex-col
          items-center
          justify-center
          text-center
          mb-12
        "
      >
        <h1
          className="
            text-5xl 
            font-bold 
            mb-6
            leading-tight
          "
        >
          Speak freely. <br /> Stay anonymous.
        </h1>
        <p
          className="
            text-xl 
            text-gray-700 
            mb-12 
            max-w-2xl 
            mx-auto
          "
        >
          Create your anonymous message link and receive honest, unfiltered
          feedback from anyone, anywhere.
        </p>

        <CreateProfileButton />
      </div>

      {/* Feature Blocks */}
      <div
        className="
          w-full
          py-2
          flex
          flex-col
          items-center
          justify-center
          text-center
          mb-12
        "
      >
        {/* Feature 1 */}
        <span
          className="
            flex
            flex-col
            items-center
            justify-center
            gap-3.5
            mb-10
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="size-16 text-blue-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 
              1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
            />
          </svg>
          <h3
            className="
              text-xl 
              font-semibold 
              mb-3
            "
          >
            Create Anonymous Link
          </h3>
          <p className="text-gray-700">
            Generate a unique link that anyone can use to send you messages
            anonymously.
          </p>
        </span>

        {/* Feature 2 */}
        <span
          className="
            flex
            flex-col
            items-center
            justify-center
            gap-3.5
            mb-10
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="size-16 text-blue-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 
              3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 
              0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 
              1.668.337 2.555.337Z"
            />
          </svg>
          <h3
            className="
              text-xl 
              font-semibold 
              mb-3
            "
          >
            Receive Unfiltered Messages
          </h3>
          <p className="text-gray-700">
            Get honest feedback, confessions, and thoughts that people might not
            share otherwise.
          </p>
        </span>

        {/* Feature 3 */}
        <span
          className="
            flex
            flex-col
            items-center
            justify-center
            gap-3.5
            mb-10
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="size-16 text-blue-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 
              11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 
              9.749c0 5.592 3.824 10.29 9 11.623 
              5.176-1.332 9-6.03 9-11.622 
              0-1.31-.21-2.571-.598-3.751h-.152c-3.196 
              0-6.1-1.248-8.25-3.285Z"
            />
          </svg>
          <h3
            className="
              text-xl 
              font-semibold 
              mb-3
            "
          >
            Stay Safe & In Control
          </h3>
          <p className="text-gray-700">
            Full control over your messages with blocking, filtering, and
            privacy settings.
          </p>
        </span>
      </div>
    </div>
  );
};

export default page;
