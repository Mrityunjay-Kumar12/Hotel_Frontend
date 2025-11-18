import axios from "axios";

const API = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://hotel-backend-sandy.vercel.app/api"
      : "http://localhost:5000/api",
});

export default API;
