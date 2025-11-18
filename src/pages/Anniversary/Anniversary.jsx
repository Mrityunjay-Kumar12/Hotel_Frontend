import "./Anniversary.css";



function Anniversary() {
  return (
    <div className="anniversary-container">
      <h1>Anniversary Celebrations</h1>
      <p className="anniversary-intro">
        Celebrate your special day in style at <strong>Arc Hotel & Restaurant</strong>.
        From intimate dinners to grand celebrations, we make every anniversary memorable
        with elegant decor, fine dining, and personalized arrangements.
      </p>

      <div className="anniversary-boxes">
        <div className="anniversary-box">
          <img src="kids-party.jpg" alt="Candlelight Dinner" />
          <h3>Romantic Candlelight Dinner</h3>
          <p>Enjoy a private candlelight dinner with your loved one and curated gourmet dishes.</p>
        </div>

        <div className="anniversary-box">
          <img src="kids-party.jpg"alt="Poolside Celebration" />
          <h3>Poolside Celebration</h3>
          <p>Host your anniversary by the pool with soothing music, cocktails, and ambience lighting.</p>
        </div>

        <div className="anniversary-box">
          <img src="kids-party.jpg" alt="Luxury Room Stay" />
          <h3>Luxury Room Stay</h3>
          <p>Book a romantic night stay with our special anniversary decoration and breakfast in bed.</p>
        </div>

        <div className="anniversary-box">
          <img src="kids-party.jpg" alt="Family Dinner Party" />
          <h3>Family Dinner Party</h3>
          <p>Celebrate with your close ones in our banquet hall with delicious multi-cuisine meals.</p>
        </div>

        <div className="anniversary-box">
          <img src="kids-party.jpg" alt="Live Music & Dance" />
          <h3>Live Music & Dance</h3>
          <p>Make your evening lively with a live band or DJ to dance the night away together.</p>
        </div>

        <div className="anniversary-box">
          <img src="kids-party.jpg" alt="Customized Cake & Decor" />
          <h3>Customized Cake & Decor</h3>
          <p>Personalized cake, floral decorations, and gifts to make your celebration truly unique.</p>
        </div>
      </div>
    </div>
  );
}

export default Anniversary;
