import "./Event.css";

function Event() {
  return (
    <div className="event-container">
      <h1> Events</h1>
      <p className="intro-text">
        Join us at <strong>Arc Hotel </strong> for unforgettable experiences.
        From live music evenings to festive buffets and cultural nights —
        there's always something exciting happening!
      </p>

      <div className="event-list">
        <a href="/music">
          <div className="event-card">
            <img
              src="https://thumbs.dreamstime.com/b/dj-hands-up-night-club-party-under-blue-light-crowd-people-silhouette-festival-69736998.jpg"
              alt="Live Music Night"
            />
            <h2>Music & Dj Party</h2>
            <p>
              Enjoy soulful performances by local artists every Saturday at our
              rooftop lounge. Good food, great vibes, and a magical night under
              the stars.
            </p>
            <span className="event-date">
              📅 Every Saturday | 7:00 PM Onwards
            </span>
          </div>
        </a>
        <a href="/weddings">
          <div className="event-card">
            <img
              src="https://youthincmag.com/wp-content/uploads/2019/04/Wedding-trends-pinterest.jpg"
              alt="Weddings"
            />
            <h2>Weddings</h2>
            <p>
              Celebrate your special day in style with our grand venue,
              customized catering, and impeccable service — creating memories
              that last a lifetime.
            </p>
            <span className="event-date">
              💍 Bookings Open | Custom Packages Available
            </span>
          </div>
        </a>

        

        <a href="/MeetConf">
            <div className="event-card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGayGgASdw996bzd8yAbIhsDfSM2QhkpfGxw&s"
            alt="Meetings and Conferences"
          />
          <h2>Meetings & Conferences</h2>
          <p>
            Host your business events in our fully equipped conference halls,
            offering top-notch amenities and professional catering services.
          </p>
          <span className="event-date">
            📅 Available All Week | By Reservation
          </span>
        </div>
        </a>
      </div>

      <div className="event-list">
       <a href="/birthday">
        <div className="event-card">
          <img
            src="https://media.istockphoto.com/id/1154066614/photo/happy-birthday-to-you-concept.jpg?s=612x612&w=0&k=20&c=laWMYxECOwx3R9pB07O2Ip11IRa_y-LdsUzO99BmqSk="
            alt="Birthday Party"
          />
          <h2>Birthday Parties</h2>
          <p>
            Make your birthday special with themed decor, personalized menus,
            and a lively ambiance perfect for all ages.
          </p>
          <span className="event-date">🎉 Pre-book Your Celebration</span>
        </div>
       </a>

       <a href="engaement">

         <div className="event-card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScKMf_-VP22ZMQi2iKvjEOPnAbrqXK_ZryIw&s"
            alt="Engagement Party"
          />
          <h2>Engagement Partys</h2>
          <p>
            Begin your forever journey with a beautiful engagement celebration
            at Arc Hotel — elegant setup, delicious cuisine, and warm
            hospitality.
          </p>
          <span className="event-date">💖 Advance Booking Required</span>
        </div>
       </a>

        <a href="anniversary">
            <div className="event-card">
          <img
            src="https://a2zeventssolutions.com/wp-content/uploads/2019/10/anniversary-backdrop.jpg"
            alt="Anniversary Celebration"
          />
          <h2>Anniversary Celebrations</h2>
          <p>
            Relive your precious moments with a romantic dinner setup,
            candlelight ambiance, and live music — crafted specially for you and
            your partner.
          </p>
          <span className="event-date">Available Every Evening</span>
        </div>
        </a>
      </div>
    </div>
  );
}

export default Event;
