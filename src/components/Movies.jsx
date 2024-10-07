import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const Movies = () => {

  let movies = [];
  movies = useSelector((state) => state.movies.movies)

  return (
    <div className="container mx-auto mt-6">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-1 gap-2">
        {
          movies.length > 0 ? movies.map((movie) => <MovieCard key={movie.id} movie={movie} />) : <h1 className="text-center ">There is no movie.</h1>
        }
      </div>
    </div>
  );
}

export default Movies