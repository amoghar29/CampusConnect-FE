import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Calendar,
  Users,
  MessageCircle,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Mission */}
          <div className="col-span-1">
            <h2 className="text-2xl font-bold text-white mb-4">
              Campus Connect
            </h2>
            <p className="text-gray-400 mb-4">
              Bridging the gap between students and campus activities. Discover,
              engage, and connect with your college community.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/clubs" className="text-gray-400 hover:text-white">
                  Campus Clubs
                </Link>
              </li>
              <li>
                <Link
                  to="/explore-events"
                  className="text-gray-400 hover:text-white"
                >
                  Upcoming Events
                </Link>
              </li>
              <li>
                <Link to="/feedback" className="text-gray-400 hover:text-white">
                  Provide Feedback
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <Calendar className="h-4 w-4 mr-2 text-indigo-500" />
                Event Registration
              </li>
              <li className="flex items-center text-gray-400">
                <Users className="h-4 w-4 mr-2 text-indigo-500" />
                Club Membership
              </li>
              <li className="flex items-center text-gray-400">
                <MessageCircle className="h-4 w-4 mr-2 text-indigo-500" />
                Community Support
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h3>
            <div className="space-y-2">
              <p className="text-gray-400 flex items-center">
                <Mail className="h-4 w-4 mr-2 text-indigo-500" />
                support@campusconnect.edu
              </p>
              <p className="text-gray-400">Campus Tech Hub</p>
              <p className="text-gray-400">Main Campus Building</p>
              <p className="text-gray-400">+91 123 456 7890</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-400">
            © {currentYear} Campus Connect. All rights reserved.
          </p>
          <div className="mt-2 space-x-4">
            <Link
              to="/privacy"
              className="text-sm text-gray-400 hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-sm text-gray-400 hover:text-white"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
