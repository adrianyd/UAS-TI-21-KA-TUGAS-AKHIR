import React from 'react';
import { Link } from 'react-router-dom';
import './style page.css';


const MetalPage = () => {
  return (
    <div className="metal-container">
    <header className="header">
      <h1>METAL PAGE</h1>
      <nav className="navbar">
        <ul className="navbar-links">
          <li><Link to="/" className="navbar-link">Home</Link></li>
          <li><Link to="/genreselectionpage" className="navbar-link">Genre Selection</Link></li>
          <li><Link to="/login" className="navbar-link">Login</Link></li>
        </ul>
      </nav>
    </header>
      <div className="bands-container">
        <div className="band">
          <h2>Black Sabbath</h2>
          <p>Black Sabbath were an English Heavy Metal band formed in Birmingham in 1968 by Guitarist Tony Lommi, Drummer Bill Ward, Bassist Geezer Butler and Vocalist Ozzy Osbourne.They were pioneers of Heavy Metal music.</p>
        </div>
        <div className="band">
          <h2>Mayhem</h2>
          <p>Mayhem is a Norwegian black metal band formed in Langhus in 1984. They were one of the founders of the Norwegian black metal scene, and their music has strongly influenced the black metal genre.</p>
        </div>
        <div className="band">
          <h2>Judas Priest</h2>
          <p>Judas Priest are an English heavy metal band formed in Birmingham in 1969. They have sold over 50 million albums and are frequently ranked as one of the greatest metal bands of all time.</p>
        </div>
        <div className="band">
          <h2>Slipknot</h2>
          <p>Slipknot is an American heavy metal band formed in Des Moines, Iowa, in 1995 by percussionist Shawn Crahan, former vocalist Anders Colsefni and bassist Paul Gray.</p>
        </div>
        <div className="band">
          <h2>Dead Squad</h2>
          <p>Deadsquad is an Indonesian death metal band formed in 2006 in Jakarta. The band was initially started as a project by guitarist Ricky Siahaan of Seringai and Stevie Item of Andra and The Backbone, but later developed into a full band.</p>
        </div>
        <div className="band">
          <h2>Death</h2>
          <p>Death was an American death metal band formed in Altamonte Springs, Florida, in 1983 by guitarist Chuck Schuldiner, drummer/vocalist Kam Lee and guitarist Rick Rozz. Death is considered to be among the most influential bands in heavy metal music and a pioneering force in death metal.</p>
        </div>
      </div>
    </div>
  );
}

export default MetalPage;
