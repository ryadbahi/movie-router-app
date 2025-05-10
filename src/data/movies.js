import inceptionPoster from "../assets/inception.jpg";
import matrixPoster from "../assets/matrix.jpg";
import interstellarPoster from "../assets/interstellar.jpg";
import theDarkKnightPoster from "../assets/darkknight.jpg";

const movies = [
  {
    id: "1",
    title: "Inception",
    description:
      "A skilled thief leads a team into people's dreams to steal secrets.",
    posterURL: inceptionPoster,
    rating: 8.8,
    trailerLink: "https://www.youtube.com/embed/YoHD9XEInc0",
  },
  {
    id: "2",
    title: "The Matrix",
    description: "A hacker discovers the reality he lives in is a simulation.",
    posterURL: matrixPoster,
    rating: 8.7,
    trailerLink: "https://www.youtube.com/embed/vKQi3bBA1y8",
  },
  {
    id: "3",
    title: "Interstellar",
    description:
      "Explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    posterURL: interstellarPoster,
    rating: 8.6,
    trailerLink: "https://www.youtube.com/embed/zSWdZVtXT7E",
  },
  {
    id: "4",
    title: "The Dark Knight",
    description:
      "Batman faces the Joker, a criminal mastermind who plunges Gotham into chaos.",
    posterURL: theDarkKnightPoster,
    rating: 9.0,
    trailerLink: "https://www.youtube.com/embed/EXeTwQWrcwY",
  },
];

export default movies;
