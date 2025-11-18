import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

// ✅ Page imports (match folder + file names exactly)
import Home from "./pages/Home/Home";
import BookingForm from "./pages/Booking/BookingForm";
import AddRooms from "./pages/AddRoom/AddRooms";
import Rooms from "./pages/Rooms/Rooms";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Event from "./pages/Event/Event";
import Menu from "./pages/Menu/Menu";
import Services from "./pages/Services/Services";
import MeetConf from "./pages/MeetConf/MeetConf";

import Music from "./pages/Music/Music";
import Weddings from "./pages/Weddings/Weddings";
import Birthday from "./pages/Birthday/Birthday";
import Anniversary from "./pages/Anniversary/Anniversary";
import Engagement from "./pages/Engagement/Engagement";
import Login from "./pages/login/login";
import Signup from "./pages/Signup/Signup";
import OrderNow from "./pages/Order/OrderNow";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookingform" element={<BookingForm />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/addrooms" element={<AddRooms />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/event" element={<Event />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/music" element={<Music />} />
        <Route path="/weddings" element={<Weddings />} />
        <Route path="/meetconf" element={<MeetConf />} /> {/* made lowercase for consistency */}
        <Route path="/birthday" element={<Birthday />} />
        <Route path="/engagement" element={<Engagement />} /> {/* fixed spelling */}
        <Route path="/anniversary" element={<Anniversary />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/orderNow" element={<OrderNow />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
