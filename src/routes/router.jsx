import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "../utils/protectedROutes";
import Signin from "../pages/users/Signin";
import Signup from "../pages/users/Signup";
import Home from "../pages/users/Home";
import Event from "../pages/users/Event";
import Club from "../pages/users/Club";
import PostEvent from "../pages/admin/PostEvent";
import Feedback from "../pages/users/Feedback";
import Winners from "../pages/users/Winners";
import Suggestions from "../pages/users/Suggestions";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import RegisterClub from "../pages/admin/RegisterClub";
import NewDashboard from "../pages/admin/NewDashboard";
import ProfileSection from "../components/dashboard/Profile";
import EventsSection from "../components/dashboard/Events";
import FeedbackSection from "../components/dashboard/Feedback";
import SuggestionsSection from "../components/dashboard/Suggestion";
import UpdateWinnerSection from "../components/dashboard/UpdateWinner";

export default function Router() {
  return (
    <div className="App">
      <Header />
      <div className="content" style={{ marginTop: "80px" }}>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/explore-events" element={<Event />} />
          <Route path="/clubs" element={<Club />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/winners" element={<Winners />} />
          <Route path="/suggestion" element={<Suggestions />} />


          {/* Admin Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/admin">
              <Route path="post-event" element={<PostEvent />} />
              <Route path="register-club" element={<RegisterClub />} />

              <Route path="dashboard" element={<NewDashboard />}>
                <Route index element={<Navigate to="events" replace />} />
                <Route path="profile" element={<ProfileSection />} />
                <Route path="events" element={<EventsSection />} />
                <Route path="feedback" element={<FeedbackSection />} />
                <Route path="suggestions" element={<SuggestionsSection />} />
                <Route path="update-winner" element={<UpdateWinnerSection />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
