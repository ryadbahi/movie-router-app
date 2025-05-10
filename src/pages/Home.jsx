import MovieList from "../components/MovieList";
import movies from "../data/movies";
import "../pages/Home.css";

const Home = () => (
  <div>
    <h1>🎬 Movie Showcase</h1>
    <MovieList movies={movies} />
  </div>
);

export default Home;
