import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import "../css/Favorites.css";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    try {
      const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
      setFavorites(storedFavorites);
    } catch {
      setFavorites([]);
    }
  }, []);

  if (!favorites.length) {
    return (
      <div className="favorites-empty">
        <h2>No favorites yet</h2>
        <p>Click ❤ to add movies to your favorites and they will appear here.</p>
      </div>
    );
  }

  return (
    <div className="movies-grid">
      {favorites.map(movie => (
        <MovieCard key={movie.id || movie.title} movie={movie} />
      ))}
    </div>
  );
}

export default Favorites;
