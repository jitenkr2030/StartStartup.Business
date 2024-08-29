import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: "Empower Your Startup",
      description: "Join a community of innovators and entrepreneurs."
    },
    {
      title: "Grow Your Network",
      description: "Connect with industry professionals and resources."
    },
    {
      title: "Optimize Your Business",
      description: "Access tools and insights to take your business to the next level."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Slide change every 3 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="home-container">
      <header className="header">
        <h1>Welcome to StartStartup.Business</h1>
        <p>Your gateway to seamless startup solutions.</p>
        <div className="cta-buttons">
          <Link to="/login" className="btn-primary">Login</Link>
          <Link to="/signup" className="btn-secondary">Join Now</Link>
        </div>
      </header>

      <section className="slider">
        <div className="slider-content">
          {slides.map((slide, index) => (
            <div key={index} className={`slide ${index === currentSlide ? 'active' : ''}`}>
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="features">
        <div className="feature">
          <h2>Comprehensive Solutions</h2>
          <p>Explore the best features for managing your business efficiently.</p>
        </div>
        <div className="feature">
          <h2>Professional Network</h2>
          <p>Connect with industry leaders and professionals.</p>
        </div>
        <div className="feature">
          <h2>Business Optimization</h2>
          <p>Streamline your workflow and achieve your goals faster.</p>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2024 StartStartup.Business. All rights reserved.</p>
        <div className="footer-links">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;

