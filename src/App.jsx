import { useState } from "react";
import "./App.css";

export default function App() {
  // State
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("Action");
  const [filter, setFilter] = useState("All");

  // Handlers
  function handleAddMovie(e) {
    e.preventDefault();

    if (!title.trim()) return;

    const newMovie = {
      id: crypto.randomUUID(),
      title,
      genre,
      watched: false,
    };

    setMovies([...movies, newMovie]);
    setTitle("");
    setGenre("Action");
  }

  function toggleWatched(id) {
    setMovies(
      movies.map((movie) =>
        movie.id === id
          ? { ...movie, watched: !movie.watched }
          : movie
      )
    );
  }

  function deleteMovie(id) {
    setMovies(movies.filter((movie) => movie.id !== id));
  }

  // Derived State
  const filteredMovies = movies.filter((movie) => {
    if (filter === "Watched") return movie.watched;
    if (filter === "Unwatched") return !movie.watched;
    return true;
  });

  const totalMovies = movies.length;
  const watchedCount = movies.filter((m) => m.watched).length;
  const unwatchedCount = totalMovies - watchedCount;

  // Render
  return (
    <div className="app">
      <h1>🎬 Movie Watchlist</h1>

      {/* Add Movie Form */}
      <form onSubmit={handleAddMovie}>
        <input
          type="text"
          placeholder="Movie title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <select value={genre} onChange={(e) => setGenre(e.target.value)}>
          <option>Action</option>
          <option>Drama</option>
          <option>Comedy</option>
          <option>Horror</option>
          <option>Sci-Fi</option>
        </select>

        <button type="submit">Add Movie</button>
      </form>

      {/* Filters */}
      <div className="filters">
        <button onClick={() => setFilter("All")}>All</button>
        <button onClick={() => setFilter("Watched")}>Watched</button>
        <button onClick={() => setFilter("Unwatched")}>Unwatched</button>
      </div>

      {/* Summary */}
      <div className="summary">
        <p>Total: {totalMovies}</p>
        <p>Watched: {watchedCount}</p>
        <p>Unwatched: {unwatchedCount}</p>
      </div>

      {/* Conditional Messages */}
      {filteredMovies.length === 0 && (
        <p className="message">No movies found. Add one!</p>
      )}

      {totalMovies > 0 && watchedCount === totalMovies && (
        <p className="message">🎉 You watched everything!</p>
      )}

      {/* Movies List */}
      <ul>
        {filteredMovies.map((movie) => (
          <li key={movie.id}>
            <strong>{movie.title}</strong> ({movie.genre}) —{" "}
            <span className={movie.watched ? "watched" : "unwatched"}>
              {movie.watched ? "Watched" : "Unwatched"}
            </span>

            <div className="movie-actions">
              <button onClick={() => toggleWatched(movie.id)}>
                Toggle Watched
              </button>
              <button onClick={() => deleteMovie(movie.id)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
