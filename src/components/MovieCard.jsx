import { Link } from "react-router-dom";
import "./MovieCard.css";

const MovieCard = ({ movie }) => (
  <div className="movie-card">
    <img src={movie.posterURL} alt={movie.title} />
    <h3>{movie.title}</h3>
    <p>Rating: {movie.rating}</p>
    <Link to={`/movies/${movie.id}`} className="details-button">
      View Details
    </Link>
  </div>
);

export default MovieCard;
