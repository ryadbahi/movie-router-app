import { useParams, useNavigate } from "react-router-dom";
import movies from "../data/movies";
import "./MovieDetail.css";

const MovieDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find((m) => m.id === id);

  if (!movie) {
    return <p>Movie not found.</p>;
  }

  return (
    <div className="details-page">
      <button className="back-button" onClick={() => navigate("/")}>
        ⬅️ Go Back
      </button>
      <div className="details-content">
        <h2>{movie.title}</h2>
        <p>{movie.description}</p>

        <div className="video-wrapper">
          <iframe
            src={movie.trailerLink}
            title="Trailer"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
