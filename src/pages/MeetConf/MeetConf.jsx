import "./MeetConf.css";

function MeetConf() {
  return (
    <div className="meetconf-container">
      <h1>Meetings & Conferences</h1>
      <p className="meetconf-intro">
        Host successful business events at <strong>Arc Hotel & Restaurant</strong>.  
        Our modern venues and world-class hospitality make every meeting seamless and impactful.
      </p>

      <div className="meetconf-boxes">
        <div className="meetconf-box">
          <img src="business-meeting.jpg" alt="Business Meeting" />
          <h2>Business Meetings</h2>
          <p>Professional setups with all amenities for productive discussions and decision-making.</p>
        </div>

        <div className="meetconf-box">
          <img src="conference.jpg" alt="Corporate Conference" />
          <h2>Corporate Conferences</h2>
          <p>Spacious conference halls with high-end AV systems for impactful presentations and seminars.</p>
        </div>

        <div className="meetconf-box">
          <img src="seminar.jpg" alt="Seminar" />
          <h2>Seminars</h2>
          <p>Organize educational and motivational seminars in a well-equipped, comfortable environment.</p>
        </div>

        <div className="meetconf-box">
          <img src="workshop.jpg" alt="Workshop" />
          <h2>Workshops</h2>
          <p>Engage your audience with interactive workshops, creative setups, and expert assistance.</p>
        </div>

        <div className="meetconf-box">
          <img src="product-launch.jpg" alt="Product Launch" />
          <h2>Product Launch</h2>
          <p>Showcase your latest products in style with our elegant presentation spaces and decor.</p>
        </div>

        <div className="meetconf-box">
          <img src="board-meeting.jpg" alt="Board Meeting" />
          <h2>Board Meetings</h2>
          <p>Confidential, well-appointed boardrooms designed for strategic discussions and planning.</p>
        </div>
      </div>
    </div>
  );
}

export default MeetConf;
