
import "../styles/global.css";

const MovieModal = ({ movie, onClose }) => {
  if (!movie) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✖</button>
        <h2>{movie.title}</h2>
        <p><strong>Year:</strong> {movie.year}</p>
        <p><strong>Director:</strong> {movie.director}</p>
        <p><strong>Cast:</strong> {movie.cast.join(", ")}</p>
        <p><strong>Genre:</strong> {movie.genres}</p>
        <p><strong>IMDB Rating:</strong> {movie.rating}</p>
        <p><strong>Duration:</strong> {movie.duration}</p>
        <p><strong>Language:</strong> {movie.language}</p>
        <p className="modal-synopsis">{movie.synopsis}</p>
        <button className="play-button">▶ Play</button>
      </div>
    </div>
  );
};

export default MovieModal;
