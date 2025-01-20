import { useState } from "react";
import axios from "axios";
import { SuccessCard } from "../../components/common/SuccessCard";
import { FailureCard } from "../../components/common/FailureCard";
import {
  Building2,
  Mail,
  Phone,
  Users,
  Trophy,
  Calendar,
  ChevronRight,
  Linkedin,
  Twitter,
  Instagram,
  IndianRupee,
} from "lucide-react";
import FormContainer from "../../components/form/FormContainer";
import FormInput from "../../components/form/FormInput";
import FormTextArea from "../../components/form/FormTextArea";
import GradientBackground from "../../components/common/GradientBackground";
import ImageUploader from "../../components/form/ImageUpload";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const RegisterClub = () => {
  const [clubData, setClubData] = useState({
    clubName: "",
    aboutUs: "",
    foundedYear: "",
    president: "",
    vicePresident: "",
    email: "",
    phoneNumber: "",
    socialMedia: {
      linkedIn: "",
      twitter: "",
      instagram: "",
    },
    membershipFee: "",
    achievements: ["", "", ""],
    clubRegistrationLink: "",
  });
  const [submittedSuccess, setSubmittedSuccess] = useState(false);
  const [submittedFailure, setSubmittedFailure] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes("socialMedia.")) {
      const social = name.split(".")[1];
      setClubData((prev) => ({
        ...prev,
        socialMedia: {
          ...prev.socialMedia,
          [social]: value,
        },
      }));
    } else {
      setClubData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleAchievementChange = (index, value) => {
    setClubData((prev) => {
      const newAchievements = [...prev.achievements];
      newAchievements[index] = value;
      return { ...prev, achievements: newAchievements };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();

      const cleanedAchievements = clubData.achievements
        .map((achievement) => achievement.trim())
        .filter((achievement) => achievement !== "");

      if (cleanedAchievements.length === 0) {
        alert("Please add at least one achievement");
        setLoading(false);
        return;
      }

      Object.entries(clubData).forEach(([key, value]) => {
        if (key === "logo") {
          if (value) formData.append("logo", value);
        } else if (key === "socialMedia") {
          formData.append("socialMedia", JSON.stringify(value));
        } else if (key === "achievements") {
          formData.append("achievements", JSON.stringify(cleanedAchievements));
        } else {
          formData.append(key, value);
        }
      });

      const response = await axios.post(
        `${BACKEND_URL}/admin/register-club`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
          withCredentials: true,
        }
      );

      if (response.status === 201) {
        setSubmittedSuccess(true);
      }
    } catch (error) {
      setSubmittedFailure(true);
    } finally {
      setLoading(false);
    }
  };

  if (submittedSuccess) {
    return (
      <SuccessCard
        title="Success"
        message="Club registered successfully"
        buttonValue="View Clubs"
        redirect="/clubs"
      />
    );
  }

  if (submittedFailure) {
    return (
      <FailureCard
        title="Failure"
        message="Failed to register club"
        buttonValue="Try Again"
        handleTryAgain={() => setSubmittedFailure(false)}
      />
    );
  }

  return (
    <FormContainer
      title="Register New Club"
      subtitle="Create a new club profile for your campus organization"
    >
      <GradientBackground position="top" />
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center gap-4 text-lg font-semibold text-gray-900">
            <Building2 className="h-4 w-4 text-indigo-500" />
            <h3>Basic Information</h3>
          </div>

          <FormInput
            label="Club Name"
            name="clubName"
            value={clubData.clubName}
            onChange={handleChange}
            placeholder="Enter club name"
            required
            icon={Building2}
          />

          <FormTextArea
            label="About Us"
            name="aboutUs"
            value={clubData.aboutUs}
            onChange={handleChange}
            placeholder="Describe your club"
            required
          />

          <FormInput
            label="Registration Link"
            name="clubRegistrationLink"
            value={clubData.clubRegistrationLink}
            onChange={handleChange}
            placeholder="Enter registration link"
          />
          <ImageUploader
            title="Club Logo"
            value={clubData.logo}
            onChange={(file) => {
              setClubData((prev) => ({
                ...prev,
                logo: file,
              }));
            }}
          maxSize={2 * 1024 * 1024}
          />
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-4 text-lg font-semibold text-gray-900">
            <Users className="h-4 w-4 text-indigo-500" />
            <h3>Leadership</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormInput
              label="President"
              name="president"
              value={clubData.president}
              onChange={handleChange}
              placeholder="Club president name"
              icon={Users}
            />

            <FormInput
              label="Vice President"
              name="vicePresident"
              value={clubData.vicePresident}
              onChange={handleChange}
              placeholder="Club vice president name"
              icon={Users}
            />
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-4 text-lg font-semibold text-gray-900">
            <Mail className="h-4 w-4 text-indigo-500" />
            <h3>Contact Information</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormInput
              label="Email"
              type="email"
              name="email"
              value={clubData.email}
              onChange={handleChange}
              placeholder="club@example.com"
              required
              icon={Mail}
            />

            <FormInput
              label="Phone Number"
              name="phoneNumber"
              value={clubData.phoneNumber}
              onChange={handleChange}
              placeholder="Contact number"
              icon={Phone}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FormInput
              label="linkedIn"
              name="socialMedia.linkedIn"
              value={clubData.socialMedia.linkedIn}
              onChange={handleChange}
              placeholder="linkedIn URL"
              icon={Linkedin}
            />

            <FormInput
              label="Twitter"
              name="socialMedia.twitter"
              value={clubData.socialMedia.twitter}
              onChange={handleChange}
              placeholder="Twitter URL"
              icon={Twitter}
            />

            <FormInput
              label="Instagram"
              name="socialMedia.instagram"
              value={clubData.socialMedia.instagram}
              onChange={handleChange}
              placeholder="Instagram URL"
              icon={Instagram}
            />
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-4 text-lg font-semibold text-gray-900">
            <Trophy className="h-4 w-4 text-indigo-500" />
            <h3>Additional Information</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormInput
              label="Founded Year"
              type="number"
              name="foundedYear"
              value={clubData.foundedYear}
              onChange={handleChange}
              placeholder="YYYY"
              icon={Calendar}
            />

            <FormInput
              label="Membership Fee"
              type="number"
              name="membershipFee"
              value={clubData.membershipFee}
              onChange={handleChange}
              placeholder="Enter amount"
              icon={IndianRupee}
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Achievements
            </label>
            {clubData.achievements.map((achievement, index) => (
              <div key={index} className="flex gap-2">
                <input
                  type="text"
                  value={achievement}
                  onChange={(e) =>
                    handleAchievementChange(index, e.target.value)
                  }
                  placeholder={`Enter achievement ${index + 1}`}
                  className="flex-1 rounded-lg border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:ring-indigo-500"
                  required={index === 0}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="pt-6">
          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:from-indigo-500 hover:to-purple-500 transition duration-300"
          >
            {loading ? "Registering..." : "Register Club"}
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </form>
    </FormContainer>
  );
};

export default RegisterClub;
