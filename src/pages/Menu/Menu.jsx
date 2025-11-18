import React from "react";
import "./Menu.css";

function Menu() {
  const menuData = [
    {
      category: "Starters",
      items: [
        {
          name: "Paneer Tikka",
          desc: "Grilled cottage cheese cubes marinated with Indian spices and yogurt.",
          price: "₹249",
          img: "https://spicecravings.com/wp-content/uploads/2020/10/Paneer-Tikka-Featured-1.jpg",
        },
        {
          name: "Chicken Kebab",
          desc: "Juicy chicken pieces spiced and grilled to perfection.",
          price: "₹299",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpO16jGKWwe3J9dTIRXwETTu_6tXGMj2kS6Q&s",
        },
      ],
    },

    {
      category: "Main Course",
      items: [
        {
          name: "Butter Chicken",
          desc: "Creamy tomato-based curry with tender chicken — a true Indian classic.",
          price: "₹399",
          img: "https://images.immediate.co.uk/production/volatile/sites/30/2021/02/butter-chicken-ac2ff98.jpg?quality=90&resize=440,400",
        },
        {
          name: "Veg Biryani",
          desc: "Fragrant basmati rice cooked with seasonal vegetables and aromatic spices.",
          price: "₹279",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoV1NdPb_EVejsB5yMd_uZ6qZx63_g9a9ouA&s",
        },
      ],
    },
    {
      category: "Desserts",
      items: [
        {
          name: "Gulab Jamun",
          desc: "Soft, spongy milk balls soaked in cardamom-flavored sugar syrup.",
          price: "₹149",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-LFx_QJJCNAbE-pU6-nCgISYcaqpin_5mDA&s",
        },
        {
          name: "Chocolate Brownie",
          desc: "Rich, fudgy brownie served warm with a scoop of vanilla ice cream.",
          price: "₹199",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThH-OCQG06tid0ZSsYwUaDT2Y59ubmDZPdsQ&s",
        },
      ],
    },
  ];

  return (
    <div className="menu-container">
      <h1 className="menu-title">Our Menu</h1>
      <p className="menu-intro">
        Experience a blend of authentic flavors and contemporary cuisine crafted
        by our expert chefs. Whether it’s a hearty meal or a light bite — we
        have something for every palate.
      </p>

      {menuData.map((section, index) => (
        <div key={index} className="menu-section">
          <h2>{section.category}</h2>
          <div className="menu-list">
            {section.items.map((item, i) => (
              <div className="menu-item" key={i}>
                <img src={item.img} alt={item.name} />
                <div className="menu-details">
                  <h3>{item.name}</h3>
                  <p>{item.desc}</p>
                  <span className="price">{item.price}</span>
                  <a href="/orderNow">
                    {" "}
                    <button className="btn btn-outline-warning pay">
                      order now
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Menu;
