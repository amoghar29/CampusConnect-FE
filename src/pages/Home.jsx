import { Link } from 'react-router-dom';
import {
  Calendar,
  Users,
  Trophy,
  ArrowRightIcon,
} from 'lucide-react';
import Header from '../components/Header';
import Features from '../components/home/Features';
import UpcomingEvents from '../components/home/UpcomingEvents';
import CTASection from '../components/home/CTASection';
export default function Home() {

  return (
    <div className="bg-white">
      <Header />

      <main className="relative">
        {/* Hero Section with Background Gradient */}
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
            <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
          </div>

          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Your Gateway to Campus Life
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Connect, Participate, and Thrive in your college community. Join
                clubs, discover events, and stay updated with everything
                happening on campus - all in one place.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  to="/explore-events"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Explore Events
                </Link>
                <Link
                  to="/clubs"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Browse Clubs <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <Features />

        {/* Upcoming Events Section */}
        <UpcomingEvents />

        <div className="bg-gray-50 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex justify-between items-center">
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
            </div>

            {/* Add a preview of recent winners here if desired */}
            <div className="mt-10 flex justify-center">
              <Link
                to="/winners"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Explore Winners Gallery <Trophy className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        {/* CTA Section */}
        <CTASection />
      </main>
    </div>
  );
}
