import { ArrowRight, Leaf, MapPin } from "lucide-react";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">

        {/* Left Content */}
        <div className="hero-content">

          <div className="hero-badge">
            <Leaf size={16} />
            Ayurvedic Wellness • Personalized
          </div>

          <h1>
            Live in Harmony
            <span> With Every Season</span>
          </h1>

          <p>
            Discover personalized Ayurvedic guidance based on your
            Prakriti, the current season, and your local weather.
          </p>

          <div className="hero-buttons">

            <button className="primary-button">
              Discover Your Prakriti
              <ArrowRight size={18} />
            </button>

            <button className="secondary-button">
              <MapPin size={18} />
              Explore Wellness
            </button>

          </div>

          <div className="hero-info">
            <span>🌿 Seasonal Ayurveda</span>
            <span>•</span>
            <span>☀️ Weather Based</span>
            <span>•</span>
            <span>🥗 Personalized Diet</span>
          </div>

        </div>

        {/* Right Image */}
        <div className="hero-image-wrapper">

          <div className="hero-image">
            <img
              src="/hero-ayurveda.jpg"
              alt="Ayurvedic wellness"
            />
          </div>

          <div className="floating-card">
            <span className="weather-icon">☀️</span>

            <div>
              <small>Today's Wellness</small>
              <strong>Balance & Harmony</strong>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;