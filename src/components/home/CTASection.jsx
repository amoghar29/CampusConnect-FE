import { Link } from "react-router-dom";
import ctaImage2 from "../../assets/ctaImage2.jpeg";

export default function CTASection() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16  sm:px-6 sm:py-24 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl rounded-2xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to get involved?
              <br />
              Join a club today.
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Discover clubs that match your interests and connect with
              like-minded peers. Start your journey today!
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start mb-12">
              <div className="">
                <Link
                  to="/clubs"
                  className="rounded-md bg-white w-full max-w-xs px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Browse Clubs
                </Link>
              </div>
              <Link
                to="/events"
                className="rounded-md  px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                View Events <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <div className="lg:flex-shrink-0 flex justify-center items-center">
            <img
              src={ctaImage2}
              alt="Engaged students"
              className="rounded-lg border border-gray-300 shadow-lg sm: w-96 h-84 mb-8 "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
