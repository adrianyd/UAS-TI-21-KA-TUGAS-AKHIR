import React from 'react';
import './style page.css';

const PopPage = () => {
  return (
    <div className="Pop-container">
      <header className="header">
        <h1>POP PAGE</h1>
        <select className="genre-selector">
          <option>Other Genre...</option>
        </select>
      </header>
      <div className="bands-container">
        <div className="band">
          <h2>Rumasakit</h2>
          <p>RumahSakit is an indie rock band from Jakarta, Indonesia. Active from 1994.
          They've released 3 albums, the first full-album "rumahsakit" was released in 1998, their second full-album was released in 2000, called "nol derajat". The band was disbanded at 2004, then reunited at 2012 and released album titled "1+2" and at 2015 they released album titled "timeless"</p>
        </div>
        <div className="band">
          <h2>Kahitna</h2>
          <p>Kahitna, a music group from Bandung, Indonesia was formed in 1986 and founded by Yovie Widianto. Although most of the songs contain love themes in the lyrics, the group is also well known to be able to combine elements of other music genres such as jazz, pop, fusion, Latin and even traditional music.</p>
        </div>
        <div className="band">
          <h2>D'Masiv</h2>
          <p>D'Masiv is an Indonesian pop band which based in Jakarta. It consists of 5 members: Rian Ekky Pradipta, Dwikky Aditya Marsall, Nurul Damar Ramadhan, Rayyi Kurniawan Iskandar Dinata, and Wahyu Piadji. </p>
        </div>
        <div className="band">
          <h2>Nidji</h2>
          <p>Nidji is an Indonesian rock band based in Jakarta. Formed in February 2002, Nidji's name comes from the Japanese word niji, meaning "rainbow". The band's music can be classified under the alternative pop genre, and the band has cited Coldplay and The Killers as major influences.</p>
        </div>
        <div className="band">
          <h2>Agnes Monica</h2>
          <p>Agnes Monica Muljoto, known professionally as Agnez Mo, is an Indonesian singer, songwriter, dancer, record producer, and actress. Born and raised in Jakarta, she is known as a bilingual singer who records in both Indonesian and English</p>
        </div>
        <div className="band">
          <h2>HONNE</h2>
          <p>Honne are an English electronic music duo formed in 2014 in Bow, London, consisting of James Hatcher and Andy Clutterbuck. Honne's debut studio album, Warm on a Cold Night, was released 22 July 2016. Their second album, Love Me/Love Me Not, followed on 28 August 2018.</p>
        </div>
      </div>
    </div>
  );
}

export default PopPage;
