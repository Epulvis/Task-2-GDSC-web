import React, { useState } from 'react';

function MovieItem({ movie }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
    // Simpan state favorit ke local storage atau state global
    
  };

  return (
    <div style={{ background: isFavorite ? 'yellow' : 'white' }}>
      <h2>{movie.title}</h2>
      <button onClick={handleFavorite}>
        {isFavorite ? 'Unfavorite' : 'Favorite'}
      </button>
    </div>
  );
}

export default MovieItem;
