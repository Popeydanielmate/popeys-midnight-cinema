import "../styles/global.css";
import movies from "../data/movies";
import MovieGrid from "../components/MovieGrid";


const Home = () => {
  return (
    <div className="home-container">
      <h2 className="movie-section-title">All Movies A–Z</h2>
      <MovieGrid movies={movies} />
    </div>
  );
};

export default Home;
