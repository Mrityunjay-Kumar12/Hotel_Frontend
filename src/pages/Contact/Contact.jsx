import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Us</h2>
      <p>We'd love to hear from you! Fill out the form below or reach us directly.</p>
      <form className="contact-form">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <input type="tel" name="phone" placeholder="Your Phone" required />
        <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}
