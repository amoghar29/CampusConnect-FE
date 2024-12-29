import { Routes, Route } from 'react-router-dom';
import Login from '../pages/users/Login';
import Signup from '../pages/users/Signup';
import Home from '../pages/users/Home';
import Event from '../pages/users/Event';
import Club from '../pages/users/Club';
import PostEvent from '../pages/admin/PostEvent'
import Feedback from '../pages/users/Feedback';
import Winners from '../pages/users/Winners'
import Suggestions from '../pages/users/Suggestions'
import Header from '../components/common/Header';
import Footer from '../components/common/Footer'
export default function Router() {
  return (
    <div className='App'>
      <Header/>
      <div className="content" style={{ marginTop: '80px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />     
          <Route path="/explore-events" element={<Event />} /> 
          <Route path="/clubs" element={<Club />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/admin/post-event" element={<PostEvent />} />
          <Route path="/winners" element={<Winners/>}/>
          <Route path="/suggestion" element={<Suggestions/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
    
  );
}
