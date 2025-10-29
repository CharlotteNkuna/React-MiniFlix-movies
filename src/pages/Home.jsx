import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=ec04075b9b1c83a6a3941ed69a9ad957&language=en-US&page=1"
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.results) {
          setMovies(data.results); // TMDb returns 'results' array
        }
      })
      .catch((err) => console.error("Error fetching movies:", err));
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">🎬 Movie Store</h2>
      <div className="row">
        {movies.map((movie) => (
          <div className="col-md-3 mb-4" key={movie.id}>
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
}
