import React, { useState } from "react";
import API from "../../api";
import "../Signup/Signup.css"
function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/login", formData);
      console.log("User logged in:", res.data);
      localStorage.setItem("token", res.data.token);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <div className="box1">
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
        <a href="/signup">Signup</a>
      </form>
    </div>
  );
}

export default Login;
