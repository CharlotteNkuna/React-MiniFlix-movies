import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        setError("");
        const apiKey = import.meta.env.VITE_TMDB_API_KEY; // v3 key
        const readToken = import.meta.env.VITE_TMDB_READ_TOKEN; // v4 read access token

        if (!apiKey && !readToken) {
          setError(
            "TMDB credentials missing. Set VITE_TMDB_API_KEY (v3) or VITE_TMDB_READ_TOKEN (v4) in a .env.local file."
          );
          setMovies([]);
          return;
        }

        const baseUrl = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
        const url = apiKey ? `${baseUrl}&api_key=${apiKey}` : baseUrl;
        const headers = readToken
          ? { Authorization: `Bearer ${readToken}` }
          : undefined;

        const res = await fetch(url, { headers });
        const data = await res.json();
        if (!res.ok || !data.results) {
          const msg = data.status_message || "Failed to load movies.";
          setError(msg);
          setMovies([]);
        } else {
          setMovies(data.results);
        }
      } catch (err) {
        setError("Network error loading movies.");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const styles = {
    section: {
      padding: '24px',
      backgroundColor: '#141414',
      color: '#e5e5e5',
    },
    title: {
      fontSize: '22px',
      fontWeight: 700,
      marginBottom: '16px',
    },
    gridGutter: {
      rowGap: '16px',
    },
  };

  if (loading) {
    return (
      <section style={styles.section}><h2 style={styles.title}>Loading…</h2></section>
    );
  }

  return (
    <section style={styles.section}>
      <h2 style={styles.title}>Trending Now</h2>
      {error ? (
        <p style={{ color: '#b3b3b3' }}>{error} Check your TMDB API key or try again later.</p>
      ) : (
        <div className="row" style={styles.gridGutter}>
          {movies.map((movie) => (
            <div className="col-md-3 mb-4" key={movie.id}>
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
