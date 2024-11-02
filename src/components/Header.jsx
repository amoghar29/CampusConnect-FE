
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', to: '/home' },
  { name: 'Clubs', to: '/clubs' },
  { name: 'Explore Events', to: '/explore-events' },
  { name: 'Winners', to: '/winners' }, // Added Winners to navigation
  { name: 'Feedback', to: '/feedback' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-6">
          {/* Logo */}
          <div className="flex lg:flex-1">
            <Link to="/home" className="-m-1.5 p-1.5">
              <img
                src="/logo.jpeg"
                alt="logo"
                className="h-12 w-auto rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className="text-base font-semibold leading-6 text-gray-900 transition duration-300 transform hover:scale-105"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Login Button (Desktop only) */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              to="/login"
              className="text-base font-semibold leading-6 text-gray-900 hover:scale-105"
            >
              Club Login <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dialog */}
      <Dialog open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/home" className="-m-1.5 p-1.5">
              <img alt="logo" src="/logo.jpeg" className="h-8 w-auto" />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 transition duration-300 transform hover:scale-105"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                {/* Mobile-only Login Link */}
                <Link
                  to="/login"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 transition duration-300 transform hover:scale-105"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Club Login <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}