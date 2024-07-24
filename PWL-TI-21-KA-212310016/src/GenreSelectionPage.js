import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './GenreSelectionPage.css';

const GenreSelectionPage = () => {
  const [genre, setGenre] = useState('');
  const [showGenres, setShowGenres] = useState(false);
  const navigate = useNavigate();

  const handleGenreChange = (selectedGenre) => {
    setGenre(selectedGenre);
    setShowGenres(false);
  };

  const toggleGenreList = () => {
    setShowGenres(!showGenres);
  };

  const handleOkClick = () => {
    const genrePageMap = {
      Pop: 'PopPage',
      Rock: 'RockPage',
      Metal: 'MetalPage',
      Hardcore: 'HardcorePage',
    };

    if (genre) {
      const pageName = genrePageMap[genre];
      navigate(`/${pageName}`);
    } else {
      alert('Please select a genre first.');
    }
  };

  return (
    <div className="genre-selection-container">
      <header className="header">
        <h1>WHAT KIND OF MUSIC YOU WANT TO FIND?</h1>
        <div className="genre-selector-container" onClick={toggleGenreList}>
          <input
            type="text"
            className="genre-selector"
            value={genre}
            placeholder="Select Genre..."
            readOnly
          />
          <button className="dropdown-button">
            &#x25BC;
          </button>
        </div>
        {showGenres && (
          <ul className="genre-options">
            <li onClick={() => handleGenreChange('Pop')}>Pop</li>
            <li onClick={() => handleGenreChange('Rock')}>Rock</li>
            <li onClick={() => handleGenreChange('Metal')}>Metal</li>
            <li onClick={() => handleGenreChange('Hardcore')}>Hardcore</li>
          </ul>
        )}
        <button className="ok-button" onClick={handleOkClick}>
          {genre ? `OK (${genre})` : 'OK'}
        </button>
      </header>
      <div className="footer">
        <div className="equalizer"></div>
      </div>
    </div>
  );
};

export default GenreSelectionPage;
