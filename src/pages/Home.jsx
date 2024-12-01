import { Link } from "react-router-dom";
import Features from "../components/home/Features";
import UpcomingEvents from "../components/home/UpcomingEvents";
import CTASection from "../components/home/CTASection";
import GradientBackground from "../components/common/GradientBackground";

export default function Home() {
  return (
    <div className="bg-white">
      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section with Background Gradient */}
        <div className="relative isolate pt-14">
          <GradientBackground position="top" />
          <div className="py-16 sm:py-20 lg:py-24">
            <div className="text-center">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Your Gateway to Campus Life
              </h1>
              <p className="mt-4 mx-auto max-w-2xl text-lg leading-relaxed text-gray-600/80">
                Connect, Participate, and Thrive in your college community. Join
                clubs, discover events, and stay updated with everything
                happening on campus - all in one place.
              </p>
              <div className="mt-6 flex items-center justify-center gap-x-4">
                <Link
                  to="/explore-events"
                  className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Explore Events
                </Link>
                <Link
                  to="/clubs"
                  className="text-sm font-semibold leading-6 text-gray-900 hover:scale-105 "
                >
                  Browse Clubs <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <Features />
        <UpcomingEvents />
        {/* <div className="bg-gray-50 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8"> */}
        {/* <div className="flex justify-between items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Recent Winners
                </h2>
                <p className="mt-2 text-lg leading-8 text-gray-600">
                  Celebrating excellence and achievement in campus events
                </p>
              </div>
              <Link
                to="/winners"
                className="text-sm font-semibold text-indigo-600 flex items-center gap-1"
              >
                View all winners <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div> */}

        {/* Add a preview of recent winners here if desired */}
        {/* <div className="mt-8 flex justify-center">
              <Link
                to="/winners"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Explore Winners Gallery <Trophy className="ml-2 h-5 w-5" />
              </Link>
            </div> */}
        {/* </div>
        </div> */}

        <CTASection />
      </main>
    </div>
  );
}
