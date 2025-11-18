import "./Music.css";

function Music() {
  return (
    <div className="music-container">
      <h1>Live Music & Entertainment</h1>
      <p className="music-intro">
        Enjoy unforgettable evenings filled with rhythm, melody, and joy.  
        At <strong>Arc Hotel & Restaurant</strong>, we host various musical experiences to make your time special.
      </p>

      <div className="music-boxes">
        <div className="music-box">
          <img src="live-band.jpg" alt="Live Band" />
          <h2>Live Band Nights</h2>
          <p>Feel the energy of live performances by talented local bands every weekend.</p>
        </div>

        <div className="music-box">
          <img src="dj-night.jpg" alt="DJ Night" />
          <h2>DJ Nights</h2>
          <p>Dance to the beats of our in-house DJs spinning the latest hits.</p>
        </div>

        <div className="music-box">
          <img src="sufi-night.jpg" alt="Sufi Night" />
          <h2>Sufi Nights</h2>
          <p>Experience soulful melodies and spiritual vibes with our Sufi evenings.</p>
        </div>

        <div className="music-box">
          <img src="karaoke.jpg" alt="Karaoke Night" />
          <h2>Karaoke Nights</h2>
          <p>Show off your singing skills and enjoy a fun night with friends and family.</p>
        </div>

        <div className="music-box">
          <img src="acoustic.jpg" alt="Acoustic Session" />
          <h2>Acoustic Sessions</h2>
          <p>Relax with soft acoustic tunes in a cozy ambiance — perfect for dinner dates.</p>
        </div>

        <div className="music-box">
          <img src="retro.jpg" alt="Retro Night" />
          <h2>Retro Music Nights</h2>
          <p>Revisit the golden era of music with our themed retro nights full of nostalgia.</p>
        </div>
      </div>
    </div>
  );
}

export default Music;
