import { useNavigate } from "react-router-dom";

import {
  signOut
} from "firebase/auth";

import {
  auth
} from "../services/firebase";

import "./Home.css";

function Home() {

  const navigate = useNavigate();

  const handleLogout = async () => {

    try {

      await signOut(auth);

      navigate("/login");

    } catch (error) {

      console.error(error);

    }
  };

  return (

    <div className="home-page">

      {/* NAVBAR */}

      <nav className="home-navbar">

        <div className="home-logo">
          🌿 RutuSutra
        </div>

        <div className="nav-links">

          <a href="#home">Home</a>

          <a href="#seasons">Seasons</a>

          <a href="#diet">Diet</a>

          <a href="#lifestyle">Lifestyle</a>

          <a href="#about">About</a>

          <button
            onClick={handleLogout}
            className="logout-button"
          >
            Logout
          </button>

        </div>

      </nav>

      {/* HERO */}

      <section
        className="hero-section"
        id="home"
      >

        <div className="hero-content">

          <p className="hero-small">
            🌿 AYURVEDA • SEASONS • WELLNESS
          </p>

          <h1>
            Live in harmony
            <br />
            with every season.
          </h1>

          <p>
            Discover personalized Ayurvedic guidance for
            your diet, lifestyle and daily wellness based on
            your Prakriti, current season and local weather.
          </p>

          <div className="hero-buttons">

            <button
              onClick={() => navigate("/home")}
            >
              Explore Wellness →
            </button>

            <button className="secondary-button">
              Discover Your Prakriti
            </button>

          </div>

        </div>

      </section>

      {/* FEATURES */}

      <section className="features-section">

        <div className="section-heading">

          <p>PERSONALIZED WELLNESS</p>

          <h2>
            Your wellness,
            <br />
            guided by nature.
          </h2>

        </div>

        <div className="feature-grid">

          <div className="home-feature-card">

            <span>🌿</span>

            <h3>
              Personalized Ayurveda
            </h3>

            <p>
              Get recommendations based on your
              Prakriti and individual wellness needs.
            </p>

          </div>

          <div className="home-feature-card">

            <span>☀️</span>

            <h3>
              Seasonal Guidance
            </h3>

            <p>
              Understand what to eat and how to
              live according to each Ritu.
            </p>

          </div>

          <div className="home-feature-card">

            <span>🌦️</span>

            <h3>
              Weather Based
            </h3>

            <p>
              Receive recommendations according
              to your local weather conditions.
            </p>

          </div>

          <div className="home-feature-card">

            <span>🥗</span>

            <h3>
              Smart Diet
            </h3>

            <p>
              Discover seasonal foods, meals
              and lifestyle suggestions.
            </p>

          </div>

        </div>

      </section>

      {/* SEASONS */}

      <section
        className="season-section"
        id="seasons"
      >

        <div>

          <p className="section-label">
            AYURVEDIC SEASONS
          </p>

          <h2>
            Understand your
            <br />
            body's rhythm.
          </h2>

          <p>
            RutuSutra connects traditional Ayurvedic
            seasonal wisdom with modern personalized
            wellness recommendations.
          </p>

          <button>
            Explore Seasons →
          </button>

        </div>

        <div className="season-image">

          <img
            src="/src/assets/images/lifestyle.jpg"
            alt="Ayurvedic lifestyle"
          />

        </div>

      </section>

      {/* FOOTER */}

      <footer id="about">

        <h2>🌿 RutuSutra</h2>

        <p>
          Ayurveda • Seasons • Wellness
        </p>

        <p>
          © 2026 RutuSutra. All rights reserved.
        </p>

      </footer>

    </div>

  );
}

export default Home;