import { useState } from "react";
import { Mail, Building, Image, Edit2, X, Save } from "lucide-react";
import FormInput from "../form/FormInput";

const ProfileSection = ({ initialData = {} }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    email: initialData.email || "john@example.com",
    clubName: initialData.clubName || "Tech Club",
    logo: initialData.logo || "https://example.com/logo.png",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    if (!isEditing) return;
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isEditing) return;
    console.log("Profile data:", formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData({
      email: initialData.email || "john@example.com",
      clubName: initialData.clubName || "Tech Club",
      logo: initialData.logo || "https://example.com/logo.png",
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
    setIsEditing(false);
  };

  return (
    <div className="bg-white rounded-lg py-8 p-6 border border-gray-250">
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

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-6">
          <div>
            <div className="grid grid-cols-1 gap-6">
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
                label="Club Name"
                name="clubName"
                value={formData.clubName}
                onChange={handleChange}
                required
                icon={Building}
                disabled={!isEditing}
              />

              <FormInput
                label="Logo URL"
                name="logo"
                value={formData.logo}
                onChange={handleChange}
                icon={Image}
                disabled={!isEditing}
              />
            </div>
          </div>

          {isEditing && (
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Change Password
              </h3>
              <div className="grid grid-cols-1 gap-6">
                <FormInput
                  label="Current Password"
                  type="password"
                  name="currentPassword"
                  value={formData.currentPassword}
                  onChange={handleChange}
                  placeholder="Enter current password"
                />

                <FormInput
                  label="New Password"
                  type="password"
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleChange}
                  placeholder="Enter new password"
                />

                <FormInput
                  label="Confirm New Password"
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm new password"
                />
              </div>
            </div>
          )}
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
