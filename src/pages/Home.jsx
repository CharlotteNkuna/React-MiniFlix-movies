import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://www.omdbapi.com/?s=batman&apikey=thewdb")
      .then((res) => res.json())
      .then((data) => {
        if (data.Search) {
          setMovies(data.Search); // Use the 'Search' array
        }
      })
      .catch((err) => console.error("Error fetching movies:", err));
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">🎬 Movie Store</h2>
      <div className="row">
        {movies.map((movie) => (
          <div className="col-md-3 mb-4" key={movie.imdbID}>
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
}
