export default function MovieCard({ movie }) {
  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://via.placeholder.com/500x750?text=No+Image";

  return (
    <div className="card h-100">
      <img src={imageUrl} className="card-img-top" alt={movie.title} />
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <p className="card-text">R{(Math.random() * 100 + 50).toFixed(2)}</p>
        <button className="btn btn-primary">Add to Cart</button>
      </div>
    </div>
  );
}
