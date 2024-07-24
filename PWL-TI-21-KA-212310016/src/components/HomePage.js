import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage-wrapper">
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/" className="navbar-title">MusicApp</Link>
        </div>
        <div className="navbar-links">
          <Link to="/login" className="navbar-link">Login</Link>
        </div>
      </nav>
      <div className="homepage-container">
        <div className="main-content">
          <h1 className="main-title">FIND YOUR KIND OF MUSIC</h1>
          <p className="main-description">
            Explore the universal language of music that connects us all. Find the genre that resonates with your unique spirit. Discover your rhythm, love your sound, and let it be the soundtrack of your life.
          </p>
          <Link to="/genreselectionpage">
            <button className="main-button">FIND YOUR EXCITEMENT NOW</button>
          </Link>
        </div>
        <div className="articles-section">
          <h2>Latest Articles</h2>
          <div className="article">
            <h3>The Evolution of Rock Music</h3>
            <p>Discover the history and evolution of rock music from the 1950s to the present day...</p>
            <Link to="/rockarticle">Read more</Link>
          </div>
          <div className="article">
            <h3>The Rise of Pop Music</h3>
            <p>Explore how pop music has taken the world by storm and become a dominant genre...</p>
            <Link to="/poparticle">Read more</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
