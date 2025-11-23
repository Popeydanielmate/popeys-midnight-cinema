
import MovieCard from "./MovieCard";

function MovieGrid({ movies, disableSort = false }) {

  const movieList = disableSort
    ? movies
    : [...movies].sort((a, b) => a.title.localeCompare(b.title));

  return (
    <div className="movie-grid">
      {movieList.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MovieGrid;

