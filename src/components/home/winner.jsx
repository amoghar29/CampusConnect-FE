import { Link } from "react-router-dom";
import { ArrowRightIcon, Trophy } from "lucide-react";

export default function WinnerHighlight() {
  return (
    <div>
      <div className="bg-gray-50 py-16 sm:py-24">
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
          <div className="mt-8 flex justify-center">
            <Link
              to="/winners"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Explore Winners Gallery <Trophy className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
