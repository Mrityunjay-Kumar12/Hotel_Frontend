import React, { useState } from "react";
import API from "../../api";
import "./Signup.css";
function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/signup", formData);
      console.log("User registered:", res.data);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <div className="box1">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <button type="submit">Signup</button>
        <p>
          Already Account <a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
}

export default Signup;
