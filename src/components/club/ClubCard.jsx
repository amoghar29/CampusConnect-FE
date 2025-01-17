import { useState } from "react";
import { Users, Mail, Phone, Calendar, Award, IndianRupee } from "lucide-react";

const ClubCard = ({ club }) => {
  return (
    <div className="max-w-6xl mx-auto bg-[#1f2937] rounded-xl overflow-hidden shadow-xl">
      <div className="flex flex-col md:flex-row p-6 gap-8">
        {/* Left Section with Logo and About */}
        <div className="flex-1">
          {/* Club Header */}
          <div className="flex items-center gap-6 mb-6">
            <img
              src={club.logo || "/default-club-logo.png"}
              alt={`${club.clubName} logo`}
              className="w-24 h-24 object-contain bg-white p-3 rounded-lg"
            />
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-white">{club.clubName}</h1>
              <div className="flex items-center gap-2 text-indigo-400">
                <Calendar size={16} />
                <span className="text-sm">Founded {club.foundedYear}</span>
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-white mb-2">About Us</h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              {club.aboutUs}
            </p>
          </div>

          {/* Achievements Section */}
          {club.achievements && club.achievements.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Award size={16} className="text-indigo-400" />
                <h2 className="text-lg font-semibold text-white">
                  Achievements
                </h2>
              </div>
              <ul className="list-disc list-inside space-y-1">
                {club.achievements.map((achievement, index) => (
                  <li key={index} className="text-gray-300 text-sm">
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Right Section - Stats and Contact */}
        <div className="md:w-64 space-y-6">
          <div className="bg-[#111827] p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-1">
              <Users size={18} className="text-indigo-400" />
              <p className="text-2xl font-bold text-white">
                {club.totalMembers}
              </p>
            </div>
            <p className="text-indigo-400 text-sm">Members</p>
          </div>

          <div className="bg-[#111827] p-4 rounded-lg">
            <p className="text-2xl font-bold text-white flex items-center">
              <IndianRupee className="mr-1" />
              {club.membershipFee.toLocaleString()}
            </p>
            <p className="text-indigo-400 text-sm">Membership Fee</p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-white">
              Contact Details
            </h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-300">
                <Mail size={16} className="text-indigo-400" />
                <span className="text-sm">{club.email}</span>
              </div>
              {club.phoneNumber && (
                <div className="flex items-center gap-2 text-gray-300">
                  <Phone size={16} className="text-indigo-400" />
                  <span className="text-sm">{club.phoneNumber}</span>
                </div>
              )}
            </div>
          </div>

          <button className="w-full px-4 py-2.5 bg-indigo-600 text-white rounded-lg font-semibold text-sm">
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClubCard;
