

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img
        src={movie.posterUrl}
        alt={movie.title}
        className="movie-poster"
      />
    </div>
  );
}

export default MovieCard;
