import { useState } from 'react';
import { 
  Clock,
  MapPin,
  FileText,
  Users,
  X,
  Building2,
  PenTool,
  Coins,
  Image as ImageIcon,
  ChevronRight
} from 'lucide-react';

const EventCreationForm = () => {
  const [eventData, setEventData] = useState({
    eventName: '',
    clubName: '',
    startTime: '',
    endTime: '',
    location: '',
    description: '',
    eligibility: '',
    registrationFee: '',
    teamSize: ''
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [dragActive, setDragActive] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    const file = e.dataTransfer.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setImagePreview(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Event Data:', eventData);
    console.log('Image:', imagePreview);
  };

  return (
    <div className="bg-white min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        <div className="relative isolate">
          {/* Background decoration */}
          <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
            <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
          </div>

          {/* Main Form Card */}
          <div className="mt-8 border border-gray-300 shadow-lg rounded-lg bg-white overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 text-white">
              <h2 className="text-2xl font-semibold">Create New Event</h2>
              <p className="text-indigo-100 mt-2">Fill in the details to create your event</p>
            </div>

            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              {/* Image Upload Section */}
              <div className="mb-8">
                <div 
                  className={`relative border-2 border-dashed rounded-lg p-6 transition-all
                    ${dragActive ? 'border-indigo-500 bg-indigo-50' : 'border-gray-300 hover:border-indigo-400'}`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                >
                  {imagePreview ? (
                    <div className="relative">
                      <img 
                        src={imagePreview} 
                        alt="Preview" 
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      <button
                        type="button"
                        onClick={removeImage}
                        className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                      >
                        <X size={20} />
                      </button>
                    </div>
                  ) : (
                    <div className="text-center">
                      <ImageIcon className="mx-auto h-12 w-12 text-gray-400" />
                      <div className="mt-4 flex text-sm leading-6 text-gray-600">
                        <label className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                          <span>Upload event banner</span>
                          <input 
                            type="file" 
                            className="sr-only" 
                            onChange={handleImageChange}
                            accept="image/*"
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Basic Info Section */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-lg font-semibold text-gray-900">
                  <FileText className="h-5 w-5 text-indigo-500" />
                  <h3>Basic Information</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Event Name */}
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <PenTool className="inline h-4 w-4 mr-2 text-gray-400" />
                      Event Name
                    </label>
                    <input
                      type="text"
                      name="eventName"
                      value={eventData.eventName}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-400 focus:border-purple-600 px-4 py-2.5 focus:ring focus:ring-purple-300/30"
                      placeholder="Enter event name"
                    />
                  </div>

                  {/* Club Name */}
                  <div className="col-span-2 md:col-span-1">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Building2 className="inline h-4 w-4 mr-2 text-gray-400" />
                      Hosting Club
                    </label>
                    <input
                      type="text"
                      name="clubName"
                      value={eventData.clubName}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-400 focus:border-purple-600 px-4 py-2.5 focus:ring focus:ring-purple-300/30"
                      placeholder="Enter club name"
                    />
                  </div>

                  {/* Time Selection */}
                  <div className="col-span-2 md:col-span-1">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Clock className="inline h-4 w-4 mr-2 text-gray-400" />
                      Date & Time
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="datetime-local"
                        name="startTime"
                        value={eventData.startTime}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-400 focus:border-purple-600 px-4 py-2.5 focus:ring focus:ring-purple-300/30"
                      />
                      <input
                        type="datetime-local"
                        name="endTime"
                        value={eventData.endTime}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-400 focus:border-purple-600 px-4 py-2.5 focus:ring focus:ring-purple-300/30"
                      />
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <MapPin className="inline h-4 w-4 mr-2 text-gray-400" />
                    Event Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={eventData.location}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-400 focus:border-purple-600 px-4 py-2.5 focus:ring focus:ring-purple-300/30"
                    placeholder="Offline location or virtual link"
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <FileText className="inline h-4 w-4 mr-2 text-gray-400" />
                    Description
                  </label>
                  <textarea
                    name="description"
                    value={eventData.description}
                    onChange={handleChange}
                    rows={4}
                    className="w-full rounded-lg border border-gray-400 focus:border-purple-600 px-4 py-2.5 focus:ring focus:ring-purple-300/30"
                    placeholder="Add event description"
                  />
                </div>
              </div>

              {/* Event Options */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-lg font-semibold text-gray-900">
                  <Users className="h-5 w-5 text-indigo-500" />
                  <h3>Event Options</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Users className="inline h-4 w-4 mr-2 text-gray-400" />
                      Eligibility
                    </label>
                    <input
                      type="text"
                      name="eligibility"
                      value={eventData.eligibility}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-400 focus:border-purple-600 px-4 py-2.5 focus:ring focus:ring-purple-300/30"
                      placeholder="Specify eligibility"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Coins className="inline h-4 w-4 mr-2 text-gray-400" />
                      Registration Fee
                    </label>
                    <input
                      type="text"
                      name="registrationFee"
                      value={eventData.registrationFee}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-400 focus:border-purple-600 px-4 py-2.5 focus:ring focus:ring-purple-300/30"
                      placeholder="Enter fee"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Users className="inline h-4 w-4 mr-2 text-gray-400" />
                      Team Size
                    </label>
                    <input
                      type="text"
                      name="teamSize"
                      value={eventData.teamSize}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-400 focus:border-purple-600 px-4 py-2.5 focus:ring focus:ring-purple-300/30"
                      placeholder="Specify team size"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:from-indigo-500 hover:to-purple-500 transition duration-300"
                >
                  Create Event
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>

          {/* Bottom decoration */}
          <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
            <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCreationForm;