import { Link } from "react-router-dom";
import Features from "../components/home/Features";
import UpcomingEvents from "../components/home/UpcomingEvents";
import CTASection from "../components/home/CTASection";
import GradientBackground from "../components/common/GradientBackground";
import WinnerHighlight from "../components/home/winner";

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
        <div className="mt-32 mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Everything You Need
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            All Your Campus Activities in One Place
          </p>
        </div>
        <Features />

        <UpcomingEvents />
        <CTASection />
      </main>
    </div>
  );
}
