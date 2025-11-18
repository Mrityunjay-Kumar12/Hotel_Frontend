import "./Navbar.css";
import Topbar from "./Topbar";

export default function Navbar() {
  return (
    <>
      <Topbar />

      <nav className="navbar navbar-expand-lg custom-nav">
        <div className="container-fluid">
          {/* Logo */}
          <a className="navbar-brand text-warning fw-bold" href="/">
            <h2 className="m-0">
              Arc <span className="text-light">Hotel</span>
            </h2>
          </a>

          {/* Toggle Button */}
          <button
            className="navbar-toggler custom-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menu */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link text-warning" href="/">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-warning" href="/about">
                  About
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-warning" href="/rooms">
                  Rooms
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-warning" href="/services">
                  Services
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-warning" href="/contact">
                  Contact
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-warning" href="/event">
                  Event
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-warning" href="/menu">
                  Menu
                </a>
              </li>
            </ul>

            {/* Buttons */}
            <div className="d-flex gap-2">
              <a href="/bookingform" className="btn btn-orange">
                Book Now
              </a>
              <a href="/login" className="btn btn-yellow">
                Login Now
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
