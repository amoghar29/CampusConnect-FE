import { useState } from "react";
import { Users, Mail, Phone, Calendar, Award, IndianRupee } from "lucide-react";
import { Link } from "react-router-dom";

const ClubCard = ({ club }) => {
  const [showFullAbout, setShowFullAbout] = useState(false);

  const getValidAchievements = (achievements) => {
    if (!Array.isArray(achievements)) return [];
    return achievements.filter(
      (achievement) =>
        typeof achievement === "string" && achievement.trim() !== ""
    );
  };

  const validAchievements = getValidAchievements(club.achievements);

  const aboutText = club.aboutUs.split(" ");
  const isLongAbout = aboutText.length > 30;

  return (
    <div className="max-w-6xl mx-auto bg-[#1f2937] rounded-xl overflow-hidden shadow-xl">
      <div className="flex flex-col md:flex-row p-4 gap-1">
        <div className="flex-1">
          {/* Club Header */}
          <div className="flex items-center gap-6 mb-3">
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
              {showFullAbout
                ? club.aboutUs
                : aboutText.slice(0, 30).join(" ") + (isLongAbout ? "..." : "")}
              {isLongAbout && (
                <span
                  className="text-indigo-400 cursor-pointer"
                  onClick={() => setShowFullAbout(!showFullAbout)}
                >
                  {" "}
                  {showFullAbout ? "Read Less" : "Read More"}
                </span>
              )}
            </p>
          </div>

          {/* Achievements Section */}
          {validAchievements.length > 0 && (
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <Award size={16} className="text-indigo-400" />
                <h2 className="text-lg font-semibold text-white">
                  Achievements
                </h2>
              </div>
              <ul className="space-y-1">
                {validAchievements.map((achievement, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-gray-300 text-sm"
                  >
                    <span className="text-indigo-400 mt-1">•</span>
                    <span className="flex-1">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Right Section - Stats and Contact */}
        <div className="md:w-64 space-y-4">
          <div className="bg-[#111827] p-2 rounded-lg">
            <div className="flex items-center gap-1 mb-1">
              <Users size={16} className="text-indigo-400" />
              <p className="text-xl font-bold text-white">
                {club.totalMembers}
              </p>
            </div>
            <p className="text-indigo-400 text-sm">Members</p>
          </div>

          <div className="bg-[#111827] p-2 rounded-lg">
            <p className="text-xl font-bold text-white flex items-center">
              <IndianRupee className="mr-1" />
              {club.membershipFee}
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

          <Link
            to={club.clubRegistrationLink || "#"}
            className="block w-full text-center py-3 bg-indigo-600 hover:bg-indigo-700 transition-colors text-white rounded-lg font-semibold text-sm"
          >
            Join Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ClubCard;
