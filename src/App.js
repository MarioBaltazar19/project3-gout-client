import "./App.css";
import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import OffcanvasExample from "./components/navbar";
import Login from "./pages/Login";
import Help from "./pages/Help";
import Events from "./pages/Events";
import EventDetails from "./pages/Eventdetails";
import CreateEvent from "./pages/Createevent";
import Artists from "./pages/Artists";
import Profile from "./pages/Profile";
import ArtistsDetails from "./pages/Artistsdetails";
import AddArtistToEvent from "./pages/AddArtistToEvent";
import MyEvents from "./pages/MyEvents";
import SearchBar from "./components/searchbar";


import Likes from "./pages/MyEvents";





function App() {
  return (
    <div>
      <OffcanvasExample />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/help" element={<Help />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path="/events/create" element={<CreateEvent />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/artists/:id" element={<ArtistsDetails />} />
        
        <Route path="/addArtist/:id" element={<SearchBar />} />
        <Route path="/likes" element={<Likes />} />
        <Route path="/myevents" element={<MyEvents />} />
    
      
       
      </Routes>
    </div>
  );
}

export default App;
