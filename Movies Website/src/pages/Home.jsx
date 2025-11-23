import { useState } from "react";
import MovieCard from "../components/MovieCard";
import "../css/Home.css";

import inceptionPoster from "../assets/images/inception.jpg";
import darkKnightPoster from "../assets/images/the-dark-knight.jpg";
import interstellarPoster from "../assets/images/interstellar.jpg";
import pulpFictionPoster from "../assets/images/pulp-fiction.jpg";
import shawshankPoster from "../assets/images/the-shawshank-redemption.jpg";
import godfatherPoster from "../assets/images/the-godfather.jpg";
import parasitePoster from "../assets/images/parasite.jpg";
import endgamePoster from "../assets/images/avengers-endgame.jpg";
import spidermanVersePoster from "../assets/images/spiderman_into_the_spiderverse.jpg";
import gladiatorPoster from "../assets/images/gladiator.jpg";
import johnwickPoster from "../assets/images/john-wick.jpg";
import terminatorPoster from "../assets/images/terminator.jpg";
import matrixPoster from "../assets/images/the-matrix.jpg";
import shutterIslandPoster from "../assets/images/shutter-island.jpg";
import wolfOfWallStreetPoster from "../assets/images/wolf-of-wall-street.jpg";
import theDepartedPoster from "../assets/images/the-departed.jpg";
import casinoPoster from "../assets/images/casino.jpg";
import goodfellasPoster from "../assets/images/goodfellas.jpg";
import sixthSensePoster from "../assets/images/sixth-sense.jpg";
import rockyPoster from "../assets/images/rocky.jpg";
import ragingBullPoster from "../assets/images/raging-bull.jpg";
import troyPoster from "../assets/images/troy.jpg";
import fightClubPoster from "../assets/images/fight-club.jpg";
import usualSuspectsPoster from "../assets/images/usual-suspects.jpg";
import insomniaPoster from "../assets/images/insomnia.jpg";
import oppenheimerPoster from "../assets/images/oppenheimer.jpg";
import primalFearPoster from "../assets/images/primal-fear.jpg";
import transformersPoster from "../assets/images/transformers.jpg";
import sevenPoster from "../assets/images/seven.jpg";
import benjaminButtonPoster from "../assets/images/benjamin-button.jpg";
import zodiacPoster from "../assets/images/zodiac.jpg";
import infinityWarPoster from "../assets/images/infinity-war.jpg";
import noWayHomePoster from "../assets/images/no-way-home.jpg";
import acrossSpiderversePoster from "../assets/images/across-the-spiderverse.jpg";
import zackSnyderJusticeLeaguePoster from "../assets/images/zack-snyder-justice-league.jpg";
import threeHundredPoster from "../assets/images/300.jpg";
import superman2025Poster from "../assets/images/superman-2025.jpg";
import fantasticFourPoster from "../assets/images/fantastic-four.jpg";
import alienPoster from "../assets/images/alien.jpg";
import bohemianRhapsodyPoster from "../assets/images/bohemian-rhapsody.jpg";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [genre, setGenre] = useState("All");
  const [searchPerformed, setSearchPerformed] = useState(false);

  const movies = [
    {
      id: 1,
      title: "Inception",
      genre: "Sci-Fi",
      release_date: "2010",
      poster: inceptionPoster,
    },
    {
      id: 2,
      title: "The Dark Knight",
      genre: "Action",
      release_date: "2008",
      poster: darkKnightPoster,
    },
    {
      id: 3,
      title: "Interstellar",
      genre: "Sci-Fi",
      release_date: "2014",
      poster: interstellarPoster,
    },
    {
      id: 4,
      title: "Pulp Fiction",
      genre: "Crime",
      release_date: "1994",
      poster: pulpFictionPoster,
    },
    {
      id: 5,
      title: "The Shawshank Redemption",
      genre: "Drama",
      release_date: "1994",
      poster: shawshankPoster,
    },
    {
      id: 6,
      title: "The Godfather",
      genre: "Crime",
      release_date: "1972",
      poster: godfatherPoster,
    },
    {
      id: 7,
      title: "Parasite",
      genre: "Thriller/Drama",
      release_date: "2019",
      poster: parasitePoster,
    },
    {
      id: 8,
      title: "Avengers: Endgame",
      genre: "Action/Sci-Fi",
      release_date: "2019",
      poster: endgamePoster,
    },
    {
      id: 9,
      title: "Spider-Man: Into the Spider-Verse",
      genre: "Animation/Superhero",
      release_date: "2018",
      poster: spidermanVersePoster,
    },
    {
      id: 10,
      title: "Gladiator",
      genre: "Historical Drama/Action",
      release_date: "2000",
      poster: gladiatorPoster,
    },
    {
      id: 11,
      title: "John Wick",
      genre: "Action/Thriller",
      release_date: "2014",
      poster: johnwickPoster,
    },
    {
      id: 12,
      title: "Terminator",
      genre: "Sci-Fi/Action",
      release_date: "1984",
      poster: terminatorPoster,
    },
    {
      id: 13,
      title: "The Matrix",
      genre: "Sci-Fi/Action",
      release_date: "1999",
      poster: matrixPoster,
    },
    {
      id: 14,
      title: "Shutter Island",
      genre: "Thriller/Mystery",
      release_date: "2010",
      poster: shutterIslandPoster,
    },
    {
      id: 15,
      title: "The Wolf of Wall Street",
      genre: "Biography/Crime",
      release_date: "2013",
      poster: wolfOfWallStreetPoster,
    },
    {
      id: 16,
      title: "The Departed",
      genre: "Crime/Thriller",
      release_date: "2006",
      poster: theDepartedPoster,
    },
    {
      id: 17,
      title: "Casino",
      genre: "Crime/Drama",
      release_date: "1995",
      poster: casinoPoster,
    },
    {
      id: 18,
      title: "Goodfellas",
      genre: "Crime/Drama",
      release_date: "1990",
      poster: goodfellasPoster,
    },
    {
      id: 19,
      title: "The Sixth Sense",
      genre: "Thriller/Mystery",
      release_date: "1999",
      poster: sixthSensePoster,
    },
    {
      id: 20,
      title: "Rocky",
      genre: "Drama/Sport",
      release_date: "1976",
      poster: rockyPoster,
    },
    {
      id: 21,
      title: "Raging Bull",
      genre: "Biography/Drama",
      release_date: "1980",
      poster: ragingBullPoster,
    },
    {
      id: 22,
      title: "Troy",
      genre: "Historical Drama/Action",
      release_date: "2004",
      poster: troyPoster,
    },
    {
      id: 23,
      title: "Fight Club",
      genre: "Drama/Thriller",
      release_date: "1999",
      poster: fightClubPoster,
    },
    {
      id: 24,
      title: "The Usual Suspects",
      genre: "Crime/Mystery",
      release_date: "1995",
      poster: usualSuspectsPoster,
    },
    {
      id: 25,
      title: "Insomnia",
      genre: "Thriller/Crime",
      release_date: "2002",
      poster: insomniaPoster,
    },
    {
      id: 26,
      title: "Oppenheimer",
      genre: "Biography/Drama",
      release_date: "2023",
      poster: oppenheimerPoster,
    },
    {
      id: 27,
      title: "Primal Fear",
      genre: "Crime/Thriller",
      release_date: "1996",
      poster: primalFearPoster,
    },
    {
      id: 28,
      title: "Transformers",
      genre: "Action/Sci-Fi",
      release_date: "2007",
      poster: transformersPoster,
    },
    {
      id: 29,
      title: "Se7en",
      genre: "Crime/Thriller",
      release_date: "1995",
      poster: sevenPoster,
    },
    {
      id: 30,
      title: "The Curious Case of Benjamin Button",
      genre: "Drama/Fantasy",
      release_date: "2008",
      poster: benjaminButtonPoster,
    },
    {
      id: 31,
      title: "Zodiac",
      genre: "Crime/Thriller",
      release_date: "2007",
      poster: zodiacPoster,
    },
    {
      id: 32,
      title: "Avengers: Infinity War",
      genre: "Action/Sci-Fi",
      release_date: "2018",
      poster: infinityWarPoster,
    },
    {
      id: 33,
      title: "Spider-Man: No Way Home",
      genre: "Superhero/Action",
      release_date: "2021",
      poster: noWayHomePoster,
    },
    {
      id: 34,
      title: "Spider-Man: Across the Spider-Verse",
      genre: "Animation/Superhero",
      release_date: "2023",
      poster: acrossSpiderversePoster,
    },
    {
      id: 35,
      title: "Zack Snyder's Justice League",
      genre: "Superhero/Action",
      release_date: "2021",
      poster: zackSnyderJusticeLeaguePoster,
    },
    {
      id: 36,
      title: "300",
      genre: "Action/History",
      release_date: "2006",
      poster: threeHundredPoster,
    },
    {
      id: 37,
      title: "Superman",
      genre: "Superhero/Action",
      release_date: "2025",
      poster: superman2025Poster,
    },
    {
      id: 38,
      title: "Fantastic Four",
      genre: "Superhero/Action",
      release_date: "2025",
      poster: fantasticFourPoster,
    },
    {
      id: 39,
      title: "Alien",
      genre: "Sci-Fi/Horror",
      release_date: "1979",
      poster: alienPoster,
    },
    {
      id: 40,
      title: "Bohemian Rhapsody",
      genre: "Biography/Drama/Music",
      release_date: "2018",
      poster: bohemianRhapsodyPoster,
    },
  ];

  const handleSearch = () => {
    setSearchPerformed(true);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const clearSearch = () => {
    setSearchQuery("");
    setSearchPerformed(false);
  };

  const filteredMovies = movies.filter((movie) => {
    const matchesSearch = movie.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesGenre =
      genre === "All" || (movie.genre && movie.genre.includes(genre));
    return matchesSearch && matchesGenre;
  });

  return (
    <div className="home">
      <h2 className="main-heading">Greatest hollywood movies of all time !!!</h2>
      <p className="sub-heading">Discover the best of the best, highest rated greatest films of all time in the search bar and add to your favorites to view later</p>

      <div className="filters">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search movies..."
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button className="search-btn" onClick={handleSearch}>
            Search
          </button>
          {(searchQuery && searchPerformed) && (
            <button className="clear-search-btn" onClick={clearSearch}>
              Clear
            </button>
          )}
        </div>
        
        <select
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          className="genre-select"
        >
          <option value="All">All</option>
          <option value="Action">Action</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Crime">Crime</option>
          <option value="Drama">Drama</option>
          <option value="Thriller">Thriller</option>
          <option value="Animation">Animation</option>
          <option value="Biography">Biography</option>
          <option value="Superhero">Superhero</option>
          <option value="Historical">Historical</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Music">Music</option>
        </select>
      </div>

      {/* Search Results Message */}
      {searchPerformed && searchQuery && (
        <div className="search-results-info">
          {filteredMovies.length > 0 ? (
            <p>
              Found {filteredMovies.length} movie{filteredMovies.length !== 1 ? 's' : ''} matching "{searchQuery}"
            </p>
          ) : (
            <p className="no-results">
              There is no movies like "{searchQuery}"
            </p>
          )}
        </div>
      )}

      <div className="movies-grid">
        {filteredMovies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>

      {/* Show message when no movies found after search */}
      {searchPerformed && searchQuery && filteredMovies.length === 0 && (
        <div className="no-movies-found">
          <h3>No movies found</h3>
          <p>Try searching with different keywords or browse all movies by clearing the search.</p>
        </div>
      )}
    </div>
  );
}

export default Home;