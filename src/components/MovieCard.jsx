import { useState } from 'react';
import MovieModal from './MovieModal.jsx';
import '../styles/global.css';

const MovieCard = ({ movie }) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <>
      <div className="movie-card" onClick={handleOpen}>
        <img src={movie.posterUrl} alt={movie.title} className="movie-poster" />
      </div>

      {showModal && (
        <MovieModal movie={movie} onClose={handleClose} />
      )}
    </>
  );
};

export default MovieCard;

