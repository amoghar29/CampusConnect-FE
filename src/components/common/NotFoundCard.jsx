import { useNavigate } from "react-router-dom";
import { HomeIcon, ArrowLeft } from "lucide-react";
import GradientBackground from "./GradientBackground";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className=" min-h-screen">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <GradientBackground position="top" />
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-14 shadow-2xl rounded-2xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              404 - Page Not Found
              <br />
              Lost your way?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              The page you're looking for doesn't exist or has been moved. Don't
              worry, you can find your way back using the buttons below.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start mb-12">
              <button
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition duration-300"
              >
                <ArrowLeft className="h-4 w-4" />
                Go Back
              </button>
              <button
                onClick={() => navigate("/home")}
                className="flex items-center gap-2 rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition duration-300"
              >
                <HomeIcon className="h-4 w-4" />
                Home Page
              </button>
            </div>
          </div>

          <div className="relative lg:mt-0 lg:flex-shrink-0 flex justify-center items-center">
            <div className="relative h-64 w-64 sm:h-80 sm:w-80 lg:h-96 lg:w-96">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="w-full h-full text-white/80"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
