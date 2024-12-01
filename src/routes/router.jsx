import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';
import Event from '../pages/Event';
import Club from '../pages/Club';
import PostEvent from '../AdminPages/PostEvent'
import Feedback from '../pages/Feedback';
import Winners from '../pages/Winners'
import Suggestions from '../pages/Suggestions'
import EventsListing from '../pages/test';
import Header from '../components/Header';
export default function Router() {
  return (
    <div className='App'>
      <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />     
      <Route path="/explore-events" element={<Event />} /> 
      <Route path="/clubs" element={<Club />} />
      <Route path="/feedback" element={<Feedback />} />
      <Route path="/admin/post-event" element={<PostEvent />} />
      <Route path="/winners" element={<Winners/>}/>
      <Route path="/suggestions" element={<Suggestions/>}/>
      <Route path="/test" element = {<EventsListing/>}/>
    </Routes>
    </div>
    
  );
}
