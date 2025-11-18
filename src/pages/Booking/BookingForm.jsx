import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./BookingForm.css";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      toast.success(data.message, { position: "top-right" });
    } catch (err) {
      toast.error("Booking failed. Try again!", { position: "top-right" });
      console.error(err);
    }
  };

  return (
    <div className="booking-form-container" id="booking">
      <h2>Book Your Stay</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Full Name" required onChange={handleChange} />
        <input type="email" name="email" placeholder="Email Address" required onChange={handleChange} />
        <input type="text" name="phone" placeholder="Phone Number" required onChange={handleChange} />
        <div className="date-fields">
          <input type="date" name="checkIn" required onChange={handleChange} /><br /><br />
          <input type="date" name="checkOut" required onChange={handleChange} />
        </div>
        <input type="number" name="guests" placeholder="Number of Guests" required onChange={handleChange} />
        <button type="submit" className="btn-submit">Confirm Booking</button>
      </form>
      <ToastContainer />
    </div>
  );
}
