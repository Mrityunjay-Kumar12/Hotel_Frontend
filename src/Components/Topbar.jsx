import "./Topbar.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <p>📞 +91 98765 43210 | ✉️ info@archotel.com</p>
      </div>
      <div className="topbar-right">
        <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
        <a href="https://youtube.com" target="_blank" rel="noreferrer"><FaYoutube /></a>
      </div>
    </div>
  );
}
