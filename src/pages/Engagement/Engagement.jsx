import "./Engagement.css";

function Engagement() {
  return (
    <div className="engagement-container">
      <h1>Engagement Celebrations</h1>
      <p className="engagement-intro">
        Celebrate your love and togetherness at <strong>Arc Hotel & Restaurant</strong>.  
        From romantic setups to grand celebrations — we make your engagement unforgettable.
      </p>

      <div className="engagement-boxes">
        <div className="engagement-box">
          <img src="ring-ceremony.jpg" alt="Ring Ceremony" />
          <h2>Ring Ceremony</h2>
          <p>Exchange rings in a dreamy setup with floral decorations and elegant backdrops.</p>
        </div>

        <div className="engagement-box">
          <img src="outdoor-celebration.jpg" alt="Outdoor Celebration" />
          <h2>Outdoor Celebration</h2>
          <p>Celebrate under the stars with open-air seating, lights, and live music.</p>
        </div>

        <div className="engagement-box">
          <img src="royal-theme.jpg" alt="Royal Theme Engagement" />
          <h2>Royal Theme Engagement</h2>
          <p>Experience a royal touch with luxurious decor, golden accents, and regal ambiance.</p>
        </div>

        <div className="engagement-box">
          <img src="intimate.jpg" alt="Intimate Gathering" />
          <h2>Intimate Gathering</h2>
          <p>Keep it cozy and classy with a small gathering of your closest friends and family.</p>
        </div>

        <div className="engagement-box">
          <img src="poolside-engagement.jpg" alt="Poolside Engagement" />
          <h2>Poolside Engagement</h2>
          <p>Host a refreshing and romantic engagement by the pool with music and dinner.</p>
        </div>

        <div className="engagement-box">
          <img src="grand-event.jpg" alt="Grand Event" />
          <h2>Grand Event</h2>
          <p>Go all out with lavish decor, entertainment, and premium catering for a royal feel.</p>
        </div>
      </div>
    </div>
  );
}

export default Engagement;
