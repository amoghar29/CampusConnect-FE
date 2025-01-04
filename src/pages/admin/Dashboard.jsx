import { useState } from "react";
import { Calendar, MessageCircle, Lightbulb, PlusCircle } from "lucide-react";
import GradientBackground from "../../components/common/GradientBackground";
import EventCreationForm from "./PostEvent";
import UpdateWinnerSection from "../../components/dashboard/updateWinner";
import SuggestionsSection from "../../components/dashboard/suggestion";
import FeedbackSection from "../../components/dashboard/feedback";
import EventsSection from "../../components/dashboard/Events";
import ProfileSection from "../../components/dashboard/Profile";
const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("events");
  const [searchQuery, setSearchQuery] = useState("");

  const userData = {
    email: "actualuser@email.com",
    clubName: "Actual Club Name",
    logo: "actual-logo-url",
  };

  const events = [
    {
      id: 1,
      title: "Tech Symposium 2025",
      date: "2025-02-15",
      status: "active",
    },
    { id: 2, title: "Cultural Fest", date: "2025-03-01", status: "upcoming" },
    {
      id: 3,
      title: "Coding Competition",
      date: "2025-01-20",
      status: "completed",
    },
  ];

  const feedback = [
    {
      id: 1,
      event: "Tech Symposium",
      feedback: "Great organization!",
      user: "John Doe",
      date: "2025-01-02",
    },
    {
      id: 2,
      event: "Cultural Fest",
      feedback: "Amazing performances",
      user: "Jane Smith",
      date: "2025-01-03",
    },
  ];

  const suggestions = [
    {
      id: 1,
      text: "Add online payment system",
      date: "2025-01-01",
      status: "pending",
    },
    {
      id: 2,
      text: "Include event categories",
      date: "2025-01-02",
      status: "resolved",
    },
  ];

  const navItems = [
    { id: "profile", label: "Profile", icon: PlusCircle },
    { id: "events", label: "Events", icon: Calendar },
    { id: "feedback", label: "Feedback", icon: MessageCircle },
    { id: "suggestions", label: "Suggestions", icon: Lightbulb },
    { id: "winner", label: "Update Winner", icon: PlusCircle },
  ];

  return (
    <div className="bg-white">
      <div className="relative isolate">
        <GradientBackground position="top" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex min-h-[calc(100vh-4rem)] gap-8">
            {/* Sidebar */}
            <div className="w-64    pt-8">
              <div className="px-4">
                <h2 className="text-xl font-bold text-gray-900 mb-8">
                  Dashboard
                </h2>
                <nav className="space-y-2">
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id)}
                        className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors
                          ${
                            activeTab === item.id
                              ? "bg-indigo-100 text-indigo-600"
                              : "text-gray-600 hover:bg-gray-50"
                          }`}
                      >
                        <Icon className="h-5 w-5" />
                        <span>{item.label}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 overflow-auto mt-24 ">
              {/* Content Area */}
              <div className=" rounded-lg  shadow-sm">
                {activeTab === "events" && <EventsSection events={events} />}

                {activeTab === "profile" && (
                  <ProfileSection initialData={userData} />
                )}

                {activeTab === "feedback" && (
                  <FeedbackSection feedback={feedback} />
                )}

                {activeTab === "suggestions" && (
                  <SuggestionsSection suggestions={suggestions} />
                )}

                {activeTab === "winner" && <UpdateWinnerSection />}

                {activeTab === "post-event" && (
                  <div className="p-6">
                    <EventCreationForm />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
