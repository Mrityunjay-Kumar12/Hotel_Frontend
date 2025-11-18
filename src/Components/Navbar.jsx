import "./Navbar.css";
import Topbar from "./Topbar";

export default function Navbar() {
  return (
    <>
      <Topbar />

      <nav className="navbar container-fluid">
        <div className="logo">
          <h2>
            Arc<span>Hotel</span>
          </h2>
        </div>

        <ul className="nav-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/rooms">Rooms</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/event">Event</a>
          </li>
          <li>
            <a href="/menu">Menu</a>
          </li>
        </ul>

        <button className="book-btn">
          {" "}
          <a href="/bookingform">Book Now</a>
        </button>
        
        <button className="book-btn">
          {" "}
          <a href="/login">Login Now</a>
        </button>
      </nav>
    </>
  );
}
