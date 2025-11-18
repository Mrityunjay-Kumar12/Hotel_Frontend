import "./Footer.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer ">
      <div className="row">
        <div className="col-md-4 left">
          <h5>Arc Hotel</h5>
          <p>123 Main Street,<br />Varanasi, India<br />Phone: +91 1234567890</p>
        </div>

        <div className="col-md-4 text-center mid">
          <div className="social-icons mb-2">
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer"><FaYoutube /></a>
          </div>
          <p>© 2025 Arc Hotel | All Rights Reserved</p>
        </div>

        <div className="col-md-4 right">
          <iframe
            title="Arc Hotel Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13835.032702677323!2d82.9715303635863!3d25.31702823610782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2db76febcf4d%3A0x68131710853ff0b5!2sVaranasi%2C%20Uttar%20Pradesh!5e1!3m2!1sen!2sin!4v1761976271174!5m2!1sen!2sin"
            width="100%"
            height="150"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </footer>
  );
}
