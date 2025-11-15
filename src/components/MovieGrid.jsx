
import MovieCard from "./MovieCard";

function MovieGrid({ movies }) {
  return (
    <div className="movie-grid">
      {[...movies]
        .sort((a, b) => a.title.localeCompare(b.title))
        .map(movie => (

        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MovieGrid;
