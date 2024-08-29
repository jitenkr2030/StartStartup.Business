import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import './HomePage.css'; // Import the CSS file

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="homepage-header">
        <h1>Welcome to StartStartup.Business</h1>
        <p>Your gateway to start and manage your business effectively.</p>
        <div className="homepage-buttons">
          <Link to="/login" className="btn btn-primary">Login</Link>
          <Link to="/signup" className="btn btn-secondary">Sign Up</Link>
        </div>
      </header>

      <section className="slider">
        <Slider {...sliderSettings}>
          <div className="slider-slide">
            <h2>Feature 1</h2>
            <p>Discover how our platform can help you streamline your business operations.</p>
          </div>
          <div className="slider-slide">
            <h2>Feature 2</h2>
            <p>Leverage our tools to manage projects and collaborate efficiently.</p>
          </div>
          <div className="slider-slide">
            <h2>Feature 3</h2>
            <p>Get insights and analytics to make informed business decisions.</p>
          </div>
        </Slider>
      </section>

      <section className="features">
        <h2>Features</h2>
        <div className="features-container">
          <div className="feature">
            <h3>Easy Setup</h3>
            <p>Get started quickly with our intuitive setup process.</p>
          </div>
          <div className="feature">
            <h3>Comprehensive Tools</h3>
            <p>Access a range of tools to manage and grow your business.</p>
          </div>
          <div className="feature">
            <h3>24/7 Support</h3>
            <p>Our support team is here to help you around the clock.</p>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <h2>What Our Users Say</h2>
        <div className="testimonials-container">
          <blockquote className="testimonial">
            <p>"StartStartup.Business transformed the way we operate. The tools are user-friendly and efficient."</p>
            <footer>— Jane Doe, CEO of ExampleCorp</footer>
          </blockquote>
          <blockquote className="testimonial">
            <p>"The support team is fantastic and always available when we need them. Highly recommend!"</p>
            <footer>— John Smith, Founder of InnovateInc</footer>
          </blockquote>
        </div>
      </section>

      <section className="cta">
        <h2>Ready to Get Started?</h2>
        <p>Join us today and take your business to the next level.</p>
        <Link to="/signup" className="btn btn-primary btn-lg">Sign Up Now</Link>
      </section>

      <footer className="homepage-footer">
        <p>&copy; 2024 StartStartup.Business. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;

