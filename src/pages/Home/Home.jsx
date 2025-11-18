import Rooms from "../Rooms/Rooms";
import Services from "../Services/Services";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      {/* /* Hero Section */ }
      <section className="hero">
        <div className="overlay">
          <h1>Welcome to New Arc Hotel</h1>
          <p>Your comfort is our priority — stay in style & luxury.</p>
          <a href="/bookingform"><button className="btn-book">Book Your Stay</button></a>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <h2>Experience the Art of Hospitality</h2>
        <p>
          At <b>Arc Hotel</b>, we combine elegant design with world-class service
          to give you an unforgettable stay. Whether you’re here for business or
          leisure, our premium rooms, fine dining, and warm hospitality will make
          you feel right at home.
        </p>
      </section>

      {/* Rooms / Services Section */}
      <section className="services">
        <h2>Our Premium Facilities</h2>
        <div className="service-cards">
          <div className="card">
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c" alt="Luxury Room" />
            <h3>Luxury Rooms</h3>
            <p>Spacious rooms with modern interiors and city views.</p>
          </div>
          <div className="card">
            <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836" alt="Restaurant" />
            <h3>Fine Dining</h3>
            <p>Experience world-class cuisine crafted by top chefs.</p>
          </div>
          <div className="card">
            <img src="https://www.timeoutdubai.com/cloud/timeoutdubai/2023/06/23/SAL-1024x728.png" alt="Pool" />
            <h3>Infinity Pool</h3>
            <p>Relax and unwind with a panoramic view from our rooftop pool.</p>
          </div>
        </div>
      </section>
      <Rooms/>
      <Services/>

      {/* Call To Action */}
      <section className="cta">
        <h2>Plan Your Perfect Stay</h2>
        <p>Book your room now and enjoy exclusive discounts and luxury comfort.</p>
        <a href="/bookingform"><button className="btn-book">Reserve Now</button></a>
      </section>
    </div>
  );
}

export default Home;
