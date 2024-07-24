import React from 'react';
import './style page.css';

const RockPage = () => {
  return (
    <div className="Rock-container">
      <header className="header">
        <h1>ROCK PAGE</h1>
        <select className="genre-selector">
          <option>Other Genre...</option>
        </select>
      </header>
      <div className="bands-container">
        <div className="band">
          <h2>Gun N' Roses</h2>
          <p>Guns N' Roses is an American hard rock band from Los Angeles, California, formed in March 1985 when local bands Hollywood Rose and L.A. Guns merged.</p>
        </div>
        <div className="band">
          <h2>Queen</h2>
          <p>Queen are a British rock band formed in London in 1970 by Freddie Mercury, Brian May, and Roger Taylor, later joined by John Deacon.</p>
        </div>
        <div className="band">
          <h2>Nirvana</h2>
          <p>Nirvana was an American rock band formed in Aberdeen, Washington, in 1987. Founded by lead singer and guitarist Kurt Cobain and bassist Krist Novoselic, the band went through a succession of drummers, most notably Chad Channing, before recruiting Dave Grohl in 1990.</p>
        </div>
        <div className="band">
          <h2>Bon Jovi</h2>
          <p>Bon Jovi is an American rock band formed in 1983 in Sayreville, New Jersey. The band currently consists of singer Jon Bon Jovi, keyboardist David Bryan, drummer Tico Torres, guitarists John Shanks and Phil X, percussionist Everett Bradley, and bassist Hugh McDonald.</p>
        </div>
        <div className="band">
          <h2>Scorpions</h2>
          <p>Scorpions are a German hard rock band formed in Hanover in 1965 by guitarist Rudolf Schenker. The lineup from 1978 to 1992 was the most successful incarnation of the group, and included Klaus Meine, Rudolf Schenker, Matthias Jabs, Francis Buchholz, and Herman Rarebell. </p>
        </div>
        <div className="band">
          <h2>The Rolling Stones</h2>
          <p>The Rolling Stones are an English rock band formed in London in 1962. Active across seven decades, they are one of the most popular and enduring bands of the rock era. In the early 1960s, the band pioneered the gritty, rhythmically driven sound that came to define hard rock.</p>
        </div>
      </div>
    </div>
  );
}

export default RockPage;
