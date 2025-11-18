import "./Birthday.css";

function Birthday() {
  return (
    <div className="birthday-container">
      <h1>Birthday Celebrations</h1>
      <p className="birthday-intro">
        Make every birthday unforgettable at <strong>Arc Hotel & Restaurant</strong>.  
        From elegant setups to fun themes — we make your special day truly magical!
      </p>

      <div className="birthday-boxes">
        <div className="birthday-box">
          <img src="kids-party.jpg" alt="Kids Birthday Party" />
          <h2>Kids Birthday Party</h2>
          <p>Colorful decorations, games, and sweet treats — perfect for little stars!</p>
        </div>

        <div className="birthday-box">
          <img src="surprise-party.jpg" alt="Surprise Party" />
          <h2>Surprise Party</h2>
          <p>Plan a secret celebration for your loved ones with our surprise party setup.</p>
        </div>

        <div className="birthday-box">
          <img src="theme-party.jpg" alt="Theme Party" />
          <h2>Theme Party</h2>
          <p>Choose from popular themes like Bollywood, Retro, or Neon Night for a fun vibe.</p>
        </div>

        <div className="birthday-box">
          <img src="pool-party.jpg" alt="Pool Party" />
          <h2>Poolside Party</h2>
          <p>Celebrate your birthday by the pool with music, drinks, and cool breezes.</p>
        </div>

        <div className="birthday-box">
          <img src="family-dinner.jpg" alt="Family Dinner" />
          <h2>Family Dinner Celebration</h2>
          <p>Enjoy a warm family gathering with customized menus and cozy decor.</p>
        </div>

        <div className="birthday-box">
          <img src="midnight-celebration.jpg" alt="Midnight Celebration" />
          <h2>Midnight Celebration</h2>
          <p>Ring in your birthday right at midnight with cake, music, and celebration!</p>
        </div>
      </div>
    </div>
  );
}

export default Birthday;
