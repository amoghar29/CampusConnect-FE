import { useState ,useContext} from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../context/authContext";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import { useNavigate } from 'react-router-dom';

const navigation = [
  { name: "Home", to: "/home" },
  { name: "Clubs", to: "/clubs" },
  { name: "Explore Events", to: "/explore-events" },
  { name: "Winners", to: "/winners" },
  { name: "Feedback", to: "/feedback" },
  { name: "Suggestions", to: "/suggestion" },
];

export default function Header() {
  const navigate = useNavigate();
  const { isAuthenticated,setIsAuthenticated,logout  } = useContext(authContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  function handleLogout() {
    logout();
    setMobileMenuOpen(false);
    setIsAuthenticated(false)
    navigate("/signin");
  }
  const filteredNavigation = isAuthenticated
    ? [
        ...navigation.filter(
          (item) => item.name !== "Feedback" && item.name !== "Suggestions"
        ),
        { name: "Dashboard", to: "/admin/dashboard" },
      ]
    : navigation;

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
            {filteredNavigation.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className="text-base font-semibold leading-6 text-gray-900 transition duration-300 transform hover:scale-105"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Login/Logout Button (Desktop only) */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            {isAuthenticated ? (
              <button 
              onClick={handleLogout}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                Logout
              </button>
            ) : (
              <Link
                to="/signin"
                className="text-base font-semibold leading-6 text-gray-900 hover:scale-105"
              >
                Club Login <span aria-hidden="true">&rarr;</span>
              </Link>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dialog */}
      <Dialog
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        className="lg:hidden"
      >
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
                {filteredNavigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 transition duration-300 transform hover:scale-105"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                {/* Mobile-only Login/Logout Link */}
                {isAuthenticated ? (
                  <button
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 transition duration-300 transform hover:scale-105"
                    onClick={logout}
                  >
                    Logout
                  </button>
                ) : (
                  <Link
                    to="/signin"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 transition duration-300 transform hover:scale-105"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Club Login <span aria-hidden="true">&rarr;</span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
