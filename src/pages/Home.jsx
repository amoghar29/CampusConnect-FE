import { Link } from 'react-router-dom';
import {
  Calendar,
  Users,
  Trophy,
  ArrowRight,
} from 'lucide-react';
import Header from '../components/Header';

export default function Home() {
  const features = [
    {
      icon: <Calendar className="h-6 w-6 text-indigo-600" />,
      title: 'Event Discovery',
      description:
        'Stay updated with all campus events, workshops, and activities happening across different clubs.',
    },
    {
      icon: <Users className="h-6 w-6 text-indigo-600" />,
      title: 'Club Community',
      description:
        'Connect with various college clubs, join communities that match your interests, and engage with like-minded peers.',
    },
    {
      icon: <Trophy className="h-6 w-6 text-indigo-600" />,
      title: 'Achievement Showcase',
      description:
        'Showcase your participation, achievements, and contributions to different club activities.',
    },
    
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'Tech Week 2024',
      club: 'Tech Club',
      date: 'May 15-20, 2024',
      image: '/api/placeholder/400/300',
    },
    {
      id: 2,
      title: 'Cultural Fest',
      club: 'Cultural Club',
      date: 'May 25, 2024',
      image: '/api/placeholder/400/300',
    },
    {
      id: 3,
      title: 'Hackathon',
      club: 'Coding Club',
      date: 'June 1-2, 2024',
      image: '/api/placeholder/400/300',
    },
  ];

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
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">
                Everything You Need
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                All Your Campus Activities in One Place
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3 lg:gap-x-12 justify-items-center">
                {features.map((feature, index) => (
                  <div key={index} className="flex flex-col items-center text-center max-w-sm">
                    <div className="rounded-lg bg-gray-50 p-2 ring-1 ring-gray-200/50">
                      {feature.icon}
                    </div>
                    <dt className="mt-4 font-semibold text-gray-900">
                      {feature.title}
                    </dt>
                    <dd className="mt-2 leading-7 text-gray-600">
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        {/* Upcoming Events Section */}
        <div className="bg-gray-50 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Upcoming Events
                </h2>
                <p className="mt-2 text-lg leading-8 text-gray-600">
                  Dont miss out on these exciting upcoming events
                </p>
              </div>
              <Link
                to="/explore-events"
                className="text-sm font-semibold text-indigo-600 flex items-center gap-1"
              >
                View all events <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:mt-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {upcomingEvents.map((event) => (
                <article key={event.id} className="flex flex-col items-start">
                  <div className="w-full overflow-hidden rounded-lg">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="aspect-[16/9] w-full object-cover hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div className="max-w-xl">
                    <div className="mt-8 flex items-center gap-x-4 text-xs">
                      <time className="text-gray-500">{event.date}</time>
                      <span className="text-indigo-600">{event.club}</span>
                    </div>
                    <div className="group relative">
                      <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <Link to={`/events/${event.id}`}>
                          <span className="absolute inset-0" />
                          {event.title}
                        </Link>
                      </h3>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

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
                View all winners <ArrowRight className="h-4 w-4" />
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
        <div className="bg-white">
          <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
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
                <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                  <Link
                    to="/clubs"
                    className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    Browse Clubs
                  </Link>
                  <Link
                    to="/events"
                    className="text-sm font-semibold leading-6 text-white"
                  >
                    View Events <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
              <div className="relative mt-16 h-80 lg:mt-8">
                <img
                  className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                  src="/api/placeholder/1824/1080"
                  alt="App screenshot"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
