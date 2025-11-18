import "./Weddings.css";

function Weddings() {
  return (
    <div className="wedding-container">
      <h1>Weddings & Celebrations</h1>
      <p className="wedding-intro">
        Celebrate your love story with elegance and style at <strong>Arc Hotel & Restaurant</strong>.  
        From grand receptions to intimate ceremonies — we make your dream wedding come true.
      </p>

      <div className="wedding-boxes">
        <div className="wedding-box">
          <img src="engagement.jpg" alt="Engagement Ceremony" />
          <h2>Engagement Ceremony</h2>
          <p>Begin your journey of love with a beautiful engagement celebration full of joy and sparkle.</p>
        </div>

        <div className="wedding-box">
          <img src="haldi.jpg" alt="Haldi Ceremony" />
          <h2>Haldi Ceremony</h2>
          <p>Brighten your day with traditional Haldi rituals, colors, and happiness all around.</p>
        </div>

        <div className="wedding-box">
          <img src="mehndi.jpg" alt="Mehndi Ceremony" />
          <h2>Mehndi Ceremony</h2>
          <p>Celebrate with laughter, music, and intricate henna designs in a vibrant setting.</p>
        </div>

        <div className="wedding-box">
          <img src="sangeet.jpg" alt="Sangeet Night" />
          <h2>Sangeet Night</h2>
          <p>Dance, sing, and rejoice with friends and family in a glamorous Sangeet celebration.</p>
        </div>

        <div className="wedding-box">
          <img src="wedding-day.jpg" alt="Wedding Day" />
          <h2>Wedding Day</h2>
          <p>Experience a royal wedding setup with floral decor, luxury ambiance, and perfect hospitality.</p>
        </div>

        <div className="wedding-box">
          <img src="reception.jpg" alt="Reception Party" />
          <h2>Reception Party</h2>
          <p>End your celebration with an elegant reception — fine dining, music, and everlasting memories.</p>
        </div>
      </div>
    </div>
  );
}

export default Weddings;
