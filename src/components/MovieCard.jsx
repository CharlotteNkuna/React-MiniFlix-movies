import React from "react";

export default function MovieCard({ movie }) {
  return (
    <div className="card h-100">
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450"}
        className="card-img-top"
        alt={movie.Title}
      />
      <div className="card-body">
        <h5 className="card-title">{movie.Title}</h5>
        <p className="card-text">Year: {movie.Year}</p>
        <p className="card-text">R{Math.floor(Math.random() * 100) + 20}</p>
        <button className="btn btn-primary">Add to Cart</button>
      </div>
    </div>
  );
}
