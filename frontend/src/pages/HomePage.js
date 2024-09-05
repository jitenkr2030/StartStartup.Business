import React from 'react';
import './HomePage.css';

function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <header className="header">
        <div className="container">
          <h1>Empower Your Startup with AI</h1>
          <p>Your one-stop solution for startup success. Get AI-powered guidance, tools, and resources at every step of your entrepreneurial journey.</p>
          <div className="cta-buttons">
            <a href="/signup" className="btn-primary">Get Started Free</a>
            <a href="/learn-more" className="btn-secondary">Learn More</a>
          </div>
        </div>
      </header>

      {/* Key Features Section */}
      <section className="key-features">
        <div className="container">
          <h2>Key Features</h2>
          <div className="features-grid">
            <div className="feature">
              <h3>Startup Idea Validator</h3>
              <p>Validate your startup idea with AI-powered feasibility analysis, SWOT analysis, and business model suggestions.</p>
            </div>
            <div className="feature">
              <h3>Business Plan Generator</h3>
              <p>Create comprehensive business plans with customizable templates and AI-based financial forecasting.</p>
            </div>
            <div className="feature">
              <h3>Legal & Compliance Assistance</h3>
              <p>Get AI-driven legal advice, document generation, and compliance tracking to ensure your startup stays on track.</p>
            </div>
            <div className="feature">
              <h3>Funding & Investment</h3>
              <p>Generate pitch decks, find investors, and launch crowdfunding campaigns with AI-powered tools.</p>
            </div>
            <div className="feature">
              <h3>Project & Task Management</h3>
              <p>Prioritize tasks, collaborate with your team, and track your progress with AI-driven recommendations.</p>
            </div>
            <div className="feature">
              <h3>Marketing & Growth Hacking</h3>
              <p>Develop AI-generated marketing strategies, automate social media, and boost your SEO.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <h2>What Entrepreneurs Are Saying</h2>
          <div className="testimonial-carousel">
            <div className="testimonial-item">
              <p>"This app revolutionized how I manage my startup. The AI tools are a game-changer!"</p>
              <div className="user-name">- Sarah W.</div>
            </div>
            <div className="testimonial-item">
              <p>"From idea validation to funding, this app has everything a startup needs."</p>
              <div className="user-name">- Michael B.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="demo-section">
        <div className="container">
          <h2>See the App in Action</h2>
          <div className="demo-video">
            <video width="100%" controls>
              <source src="path-to-your-demo-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <a href="/demo" className="btn-primary">Watch Full Demo</a>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing">
        <div className="container">
          <h2>Flexible Pricing</h2>
          <div className="pricing-table">
            <div className="plan">
              <h3>Basic Plan</h3>
              <p>For early-stage startups. Includes core features.</p>
              <div className="price">$19/month</div>
              <a href="/signup" className="btn-primary">Sign Up</a>
            </div>
            <div className="plan">
              <h3>Pro Plan</h3>
              <p>For growing businesses. Includes advanced AI tools.</p>
              <div className="price">$49/month</div>
              <a href="/signup" className="btn-primary">Sign Up</a>
            </div>
            <div className="plan">
              <h3>Enterprise Plan</h3>
              <p>For established companies. Get all the premium features.</p>
              <div className="price">$99/month</div>
              <a href="/signup" className="btn-primary">Sign Up</a>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter">
        <div className="container">
          <h2>Stay Ahead of the Curve</h2>
          <p>Subscribe to our newsletter to get the latest startup tips and updates from our AI experts.</p>
          <form>
            <input type="email" placeholder="Enter your email" />
            <button type="submit" className="btn-primary">Subscribe</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Startup Helper. All rights reserved.</p>
          <div className="footer-links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
