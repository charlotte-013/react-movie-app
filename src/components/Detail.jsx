import { Card, Spinner } from "flowbite-react"
import { useNavigate, useParams } from "react-router"
import {api, api_key } from "../api/index.js"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { removeSelectedMovie, selectedMovie } from "../redux/action/movies/index.js"

const Detail = () => {

  const { movieId } = useParams();

  const dispatch = useDispatch()
  
  const movieDetail = async () => {
    const res = await api.get(`movie/${movieId}?api_key=${api_key}`)
    console.log(res.data)
    dispatch(selectedMovie(res.data))
  }

  useEffect(() => {
    if (movieId) {
      movieDetail();
    }

    return () => dispatch(removeSelectedMovie({}))
  }, [])

  let movie = useSelector((state) => state.movies.movie)

  const navigate = useNavigate()

  return (
    <div className="container mx-auto">
      <div className="">
        <span
          className="my-2"
          style={{ fontSize: "20px" }}
          onClick={() => navigate("/")}
        >
          <i className="fa-solid fa-arrow-left"></i> Back
        </span>
      </div>
      {JSON.stringify(movie) == {} ? (
        <div className="text-center">
          <Spinner aria-label="Extra large spinner example" size="xl" />
        </div>
      ) : (
        <div className="">
          <Card
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <p>{movie.title}</p>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {movie.overview}
            </p>
            <div className="mt-3">
              <span className="bg-gray-900 text-white p-2 rounded-xl">
                <i className="fa-solid fa-star me-2 mb-3"></i>
                {movie.vote_average}
              </span>
              <span className="ms-3 bg-gray-900 text-white p-2 rounded-xl">
                <i className="fa-solid fa-calendar-days me-2"></i>
                {movie.release_date}
              </span>
              <span className="ms-3 bg-gray-900 text-white p-2 rounded-xl">
                <i className="fa-solid fa-users me-2"></i>
                {movie.vote_count}
              </span>
              {/* <span className="ms-3 bg-gray-900 text-white p-2 rounded-xl">
                <i className="fa-solid fa-earth-americas me-2"></i>
                {movie.production_countries[0].name}
              </span> */}
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}

export default Detail