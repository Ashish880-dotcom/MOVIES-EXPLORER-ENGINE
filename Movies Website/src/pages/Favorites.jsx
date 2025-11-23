import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import "../css/Favorites.css";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    loadFavorites();
  }, []);

  const loadFavorites = () => {
    try {
      const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
      setFavorites(storedFavorites);
    } catch {
      setFavorites([]);
    }
  };

  const removeAllFavorites = () => {
    if (favorites.length === 0) return;
    
    if (window.confirm("Are you sure you want to remove all movies from favorites?")) {
      // Clear favorites from localStorage
      localStorage.setItem("favorites", JSON.stringify([]));
      
      // Update state to empty array
      setFavorites([]);
      
      // Optional: Show a success message
      alert("All favorites have been removed!");
    }
  };

  // Function to handle individual movie removal
  const handleMovieRemoval = (removedMovieTitle) => {
    // Filter out the removed movie
    const updatedFavorites = favorites.filter(movie => movie.title !== removedMovieTitle);
    setFavorites(updatedFavorites);
    
    // Update localStorage
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  if (!favorites.length) {
    return (
      <div className="favorites-empty">
        <h2>No favorites yet</h2>
        <p>Click ❤ to add movies to your favorites and they will appear here.</p>
      </div>
    );
  }

  return (
    <div className="favorites">
      <div className="favorites-header">
        <h2>Your Favorite Movies</h2>
        <button 
          className="remove-all-btn"
          onClick={removeAllFavorites}
        >
          Remove All Favorites
        </button>
      </div>
      
      <div className="movies-grid">
        {favorites.map(movie => (
          <MovieCard 
            key={movie.id || movie.title} 
            movie={movie} 
            onRemove={() => handleMovieRemoval(movie.title)}
          />
        ))}
      </div>
    </div>
  );
}

export default Favorites;