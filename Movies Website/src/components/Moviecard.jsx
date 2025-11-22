import React, { useState, useEffect } from "react";
import "../css/MovieCard.css";

function MovieCard({ movie }) {
  const { title, poster, release_date } = movie || {};
  const [isFavorite, setIsFavorite] = useState(false);

  // Check if movie already in favorites on load
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFavorite(saved.some(m => m.title === title));
  }, [title]);

  const toggleFavorite = () => {
    let saved = JSON.parse(localStorage.getItem("favorites")) || [];

    if (isFavorite) {
      saved = saved.filter(m => m.title !== title);
      alert("Removed from favorites");
    } else {
      saved.push(movie);
      alert("Added to favorites");
    }

    localStorage.setItem("favorites", JSON.stringify(saved));
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="movie-card">
      {poster ? (
        <img src={poster} alt={title} className="movie-poster" />
      ) : (
        <div className="poster-placeholder">No Image</div>
      )}

      <div className="movie-info">
        <h3 className="movie-title">{title}</h3>
        {release_date && <p className="movie-year">{release_date}</p>}
      </div>

      <span className="favorite-heart" onClick={toggleFavorite}>
        {isFavorite ? "❤️" : "🤍"}
      </span>
    </div>
  );
}

export default MovieCard;
