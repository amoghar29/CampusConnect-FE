import { useState, useEffect } from "react";
import {
  Mail,
  Building,
  Image,
  Edit2,
  X,
  Save,
  Phone,
  Calendar,
  Users,
  Link,
  Upload,
} from "lucide-react";
import FormInput from "../form/FormInput";
import FormTextArea from "../form/FormTextArea";
import useFetchData from "../../customHooks/fetchData";
import useSubmitForm from "../../customHooks/submitForm";
import Loading from "../common/Loading";
import { SuccessCard } from "../common/SuccessCard";
// import { FailureCard } from "../common/FailureCard";
const ProfileSection = () => {
  const {
    loading,
    data: initialData,
    error,
  } = useFetchData("admin/clubs/clubInfo");
  const { submitForm } = useSubmitForm();
  const [isEditing, setIsEditing] = useState(false);
  const [logoFile, setLogoFile] = useState(null);
  const [logoPreview, setLogoPreview] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  // Move formData state after data is loaded
  const [formData, setFormData] = useState({
    clubName: "",
    email: "",
    logo: "",
    foundedYear: "",
    president: "",
    vicePresident: "",
    phoneNumber: "",
    aboutUs: "",
    membershipFee: "",
    socialMedia: {
      facebook: "",
      twitter: "",
      instagram: "",
    },
    achievements: "",
  });

  // Update formData when initialData is loaded
  useEffect(() => {
    if (initialData) {
      setFormData({
        clubName: initialData.clubName || "",
        email: initialData.email || "",
        logo: initialData.logo || "",
        foundedYear: initialData.foundedYear || "",
        president: initialData.president || "",
        vicePresident: initialData.vicePresident || "",
        phoneNumber: initialData.phoneNumber || "",
        aboutUs: initialData.aboutUs || "",
        membershipFee: initialData.membershipFee || "",
        socialMedia: {
          facebook: initialData.socialMedia?.facebook || "",
          twitter: initialData.socialMedia?.twitter || "",
          instagram: initialData.socialMedia?.instagram || "",
        },
        achievements: initialData.achievements?.join("\n") || "",
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    if (!isEditing) return;
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogoChange = (e) => {
    if (!isEditing) return;

    const file = e.target.files[0];
    if (file) {
      setLogoFile(file);
      // Create preview URL for the selected image
      const previewUrl = URL.createObjectURL(file);
      setLogoPreview(previewUrl);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isEditing) return;

    try {
      const formattedData = {
        ...formData,
        achievements: formData.achievements
          .split("\n")
          .filter((item) => item.trim()),
      };

      // Add logo file to form data if it exists
      if (logoFile) {
        formattedData.logo = logoFile;
      }

      const response = await submitForm(
        "put",
        "admin/clubs/clubInfo",
        formattedData
      );
      if (response.status === 200) {
        setSuccessMessage("Club details updated successfully");
        setIsEditing(false);
      }

      // Clean up preview URL
      if (logoPreview) {
        URL.revokeObjectURL(logoPreview);
        setLogoPreview(null);
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  const handleCancel = () => {
    setFormData({
      clubName: initialData.clubName || "",
      email: initialData.email || "",
      logo: initialData.logo || "",
      foundedYear: initialData.foundedYear || "",
      president: initialData.president || "",
      vicePresident: initialData.vicePresident || "",
      phoneNumber: initialData.phoneNumber || "",
      aboutUs: initialData.aboutUs || "",
      membershipFee: initialData.membershipFee || "",
      socialMedia: {
        facebook: initialData.socialMedia?.facebook || "",
        twitter: initialData.socialMedia?.twitter || "",
        instagram: initialData.socialMedia?.instagram || "",
      },
      achievements: initialData.achievements?.join("\n") || "",
    });
    setIsEditing(false);
  };

  const logoSection = (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        Club Logo
      </label>
      <div className="flex items-center gap-4">
        <div className="w-24 h-24 rounded-lg border border-gray-300 overflow-hidden">
          {logoPreview || formData.logo ? (
            <img
              src={logoPreview || formData.logo}
              alt="Club logo"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-50">
              <Image className="w-8 h-8 text-gray-400" />
            </div>
          )}
        </div>
        {isEditing && (
          <div>
            <label
              htmlFor="logo-upload"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer"
            >
              <Upload className="h-4 w-4" />
              Upload New Logo
            </label>
            <input
              id="logo-upload"
              type="file"
              accept="image/*"
              onChange={handleLogoChange}
              className="hidden"
            />
          </div>
        )}
      </div>
    </div>
  );
  if (loading) {
    return <Loading message={"Loading club details"} />;
  }

  if (error) {
    return <div>Error loading club details</div>;
  }

  return (
    <div className="bg-white rounded-lg py-8 p-6 border border-gray-250">
      {successMessage && (
        <SuccessCard
          message={successMessage}
          redirect={"/admin/dashboard/profile"}
          buttonValue={"Go back"}
        />
      )}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Profile Settings</h2>
        {!isEditing && (
          <button
            type="button"
            onClick={() => setIsEditing(true)}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-indigo-600 bg-white border border-indigo-600 rounded-lg hover:bg-indigo-50"
          >
            <Edit2 className="h-4 w-4" />
            Edit Profile
          </button>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Basic Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">{logoSection}</div>

            <FormInput
              label="Club Name"
              name="clubName"
              value={formData.clubName}
              onChange={handleChange}
              required
              icon={Building}
              disabled={!isEditing}
            />

            <FormInput
              label="Email Address"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              icon={Mail}
              disabled={!isEditing}
            />

            <FormInput
              label="Founded Year"
              type="number"
              name="foundedYear"
              value={formData.foundedYear}
              onChange={handleChange}
              icon={Calendar}
              disabled={!isEditing}
            />

            <FormInput
              label="Phone Number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              icon={Phone}
              disabled={!isEditing}
            />

            <FormInput
              label="Membership Fee"
              type="number"
              name="membershipFee"
              value={formData.membershipFee}
              onChange={handleChange}
              icon={Users}
              disabled={!isEditing}
            />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Leadership</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormInput
              label="President"
              name="president"
              value={formData.president}
              onChange={handleChange}
              icon={Users}
              disabled={!isEditing}
            />

            <FormInput
              label="Vice President"
              name="vicePresident"
              value={formData.vicePresident}
              onChange={handleChange}
              icon={Users}
              disabled={!isEditing}
            />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Social Media
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FormInput
              label="Facebook"
              name="socialMedia.facebook"
              value={formData.socialMedia.facebook}
              onChange={handleChange}
              icon={Link}
              disabled={!isEditing}
            />

            <FormInput
              label="Twitter"
              name="socialMedia.twitter"
              value={formData.socialMedia.twitter}
              onChange={handleChange}
              icon={Link}
              disabled={!isEditing}
            />

            <FormInput
              label="Instagram"
              name="socialMedia.instagram"
              value={formData.socialMedia.instagram}
              onChange={handleChange}
              icon={Link}
              disabled={!isEditing}
            />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Additional Information
          </h3>
          <div className="space-y-6">
            <FormTextArea
              label="About Us"
              name="aboutUs"
              value={formData.aboutUs}
              onChange={handleChange}
              disabled={!isEditing}
              rows={4}
            />

            <FormTextArea
              label="Achievements (One per line)"
              name="achievements"
              value={formData.achievements}
              onChange={handleChange}
              disabled={!isEditing}
              rows={4}
            />
          </div>
        </div>

        {isEditing && (
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={handleCancel}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              <X className="h-4 w-4" />
              Cancel
            </button>
            <button
              type="submit"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700"
            >
              <Save className="h-4 w-4" />
              Save Changes
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default ProfileSection;
