import React from 'react';
import './style page.css';

const HardcorePage = () => {
  return (
    <div className="hardcore-container">
      <header className="header">
        <h1>HARDCORE GENRE</h1>
        <select className="genre-selector">
          <option>Other Genre...</option>
        </select>
      </header>
      <div className="bands-container">
        <div className="band">
          <h2>Chain of Strength</h2>
          <p>Chain of Strength is a straight edge hardcore punk band from Southern California that had its heyday in the late 1980s and early 1990s.</p>
        </div>
        <div className="band">
          <h2>Straight Answer</h2>
          <p>Straight Answer is a Hardcore Punk band from Jakarta, Indonesia. Formed in 1996 and still active today.</p>
        </div>
        <div className="band">
          <h2>Youth of Today</h2>
          <p>Youth of Today is an American hardcore punk band, initially active from 1985 to 1990 before reforming in 2010. The band played a major role.</p>
        </div>
        <div className="band">
          <h2>Dazzle</h2>
          <p>Dazzle is a hardcore punk/thrash metal band from Malang, consisting of Agan as the vocalist, El and Charis as guitarists, Syahidan on bass, and Adyan as the drummer.</p>
        </div>
        <div className="band">
          <h2>Mourning Crow</h2>
          <p>A new formed band in mid-2024 come with Chaotic Hardcore genre from Bogor, Indonesia. Consisting Yogi (Vocal), Sicko & Yoga (Guitar), Arya (Bass), Adrian (Drum).</p>
        </div>
        <div className="band">
          <h2>Minor Threat</h2>
          <p>Minor Threat was an American hardcore punk band, formed in 1980 in Washington, D.C., by vocalist Ian MacKaye and drummer Jeff Nelson.</p>
        </div>
      </div>
    </div>
  );
}

export default HardcorePage;
