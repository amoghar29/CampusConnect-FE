// UpdateWinnerSection.js
import { useState } from "react";
import { Trophy, Medal, User, Gift, Upload } from "lucide-react";
import FormContainer from "../form/FormContainer";
import FormInput from "../form/FormInput";
import FormSelect from "../form/FormSelect";

const UpdateWinnerSection = ({ events = [] }) => {
  const [formData, setFormData] = useState({
    event: "",
    firstPrize: "",
    secondPrize: "",
    thirdPrize: "",
    eventImage: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Winner data:", formData);
  };

  return (
    <div className="space-y-6">
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white rounded-lg py-8 p-6 border border-gray-250"
      >
        <FormSelect
          label="Select Event"
          name="event"
          value={formData.event}
          onChange={handleChange}
          options={events}
          required
        />

        <FormInput
          label="1st Prize"
          name="firstPrize"
          value={formData.firstPrize}
          onChange={handleChange}
          required
          icon={Gift}
          placeholder="Enter 1st prize details"
        />

        <FormInput
          label="2nd Prize"
          name="secondPrize"
          value={formData.secondPrize}
          onChange={handleChange}
          required
          icon={Gift}
          placeholder="Enter 2nd prize details"
        />

        <FormInput
          label="3rd Prize"
          name="thirdPrize"
          value={formData.thirdPrize}
          onChange={handleChange}
          required
          icon={Gift}
          placeholder="Enter 3rd prize details"
        />

        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700">
            Upload Event Image
          </label>
          <input
            type="file"
            name="eventImage"
            accept="image/*"
            onChange={handleChange}
            className="mt-1 border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        <div className="flex justify-end space-x-4">
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700"
          >
            Update Winner
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateWinnerSection;
