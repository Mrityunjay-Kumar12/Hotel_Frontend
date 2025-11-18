import React from "react";
import "./Services.css";
import { FaConciergeBell, FaWifi, FaSwimmer, FaUtensils } from "react-icons/fa";

export default function Services() {
  return (
    <section id="services" className="services">
      <h2>Our Services</h2>
      <div className="service-cards">
        <div className="service-card">
          <FaConciergeBell className="service-icon" />
          <h3>24/7 Room Service</h3>
          <p>We provide round-the-clock room service for your convenience.</p>
        </div>
        <div className="service-card">
          <FaWifi className="service-icon" />
          <h3>Free Wi-Fi</h3>
          <p>High-speed internet available in all rooms and public areas.</p>
        </div>
        <div className="service-card">
          <FaSwimmer className="service-icon" />
          <h3>Spa & Wellness</h3>
          <p>Relax and rejuvenate in our spa and wellness facilities.</p>
        </div>
        <div className="service-card">
          <FaUtensils className="service-icon" />
          <h3>Restaurant & Bar</h3>
          <p>Enjoy delicious meals and drinks at our in-house restaurant.</p>
        </div>
      </div>
    </section>
  );
}
