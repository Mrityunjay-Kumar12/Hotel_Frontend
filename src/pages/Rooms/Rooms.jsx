import React from "react";
import "./Rooms.css";

export default function Rooms() {
  const roomData = [
    {
      id: 1,
      name: "Deluxe Room",
      price: "₹4,500 / Night",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
      description:
        "Spacious deluxe room with king-size bed, modern decor, and city view.",
    },
    {
      id: 2,
      name: "Executive Suite",
      price: "₹6,800 / Night",
      image:
        "https://42hotel.com/site/assets/files/1035/forty-two-hotel-brooklyn-rooms_0002.1619x0.jpg",
      description:
        "Luxurious suite with separate living area, workspace, and premium amenities.",
    },
    {
      id: 3,
      name: "Family Room",
      price: "₹5,200 / Night",
      image:
        "https://amazingarchitecture.com/storage/files/1/architecture-firms/zikzak-architects/hotel-interior-design/hotel-interior-design-zikzak-architects-1.jpg",
      description:
        "Perfect for families, includes two queen beds, balcony, and a cozy ambience.",
    },
    {
      id: 2,
      name: "Executive Suite",
      price: "₹6,800 / Night",
      image:
        "https://sthotelsmalta.com/wp-content/uploads/2022/06/modern-luxury-bedroom-suite-and-bathroom-with-working-table-scaled.jpg",
      description:
        "Luxurious suite with separate living area, workspace, and premium amenities.",
    },
  ];

  return (
    <section id="rooms" className="rooms-section">
      <h2 className="rooms-title">Our Rooms</h2>
      <div className="rooms-container">
        {roomData.map((room) => (
          <div className="room-card" key={room.id}>
            <img src={room.image} alt={room.name} className="room-image" />
            <div className="room-content">
              <h3>{room.name}</h3>
              <p>{room.description}</p>
              <span className="room-price">{room.price}</span>
              <button className="book-btn">
                <a href="/bookingform">Book Now</a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
