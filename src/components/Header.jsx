import { Navbar, TextInput } from "flowbite-react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { api, api_key } from "../api";
import { useDispatch } from "react-redux";
import { fetchMovies } from "../redux/action/movies";

const Header = () => {

  const movieName = useRef('');
  const dispatch = useDispatch();

  const searchMovie = async () => {

    if(movieName.current.value !== '') {
      const res = await api.get(`/search/movie?query=${movieName.current.value}&api_key=${api_key}`);
      dispatch(fetchMovies(res.data.results));
    } else {
      const res = await api.get(`/movie/now_playing?api_key=${api_key}`);
      dispatch(fetchMovies(res.data.results));
    }
  }

    return (
      <div>
        <Navbar fluid rounded>
          <Link to="/">
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              Astronaut Movie Channel
            </span>
          </Link>
          <div className="flex md:order-2">
            <form action="" className="flex items-center">
              <TextInput placeholder="Search..." ref={movieName}/>
              <button type="button" onClick={() => searchMovie()} className="p-2 text-white bg-gray-800 rounded-lg ms-1">Search</button>
            </form>
          </div>

          {/* <Navbar.Collapse>
            <Navbar.Link active href="#">
              <p>Home</p>
            </Navbar.Link>
            <Navbar.Link href="#">About</Navbar.Link>
            <Navbar.Link href="#">Services</Navbar.Link>
            <Navbar.Link href="#">Pricing</Navbar.Link>
            <Navbar.Link href="#">Contact</Navbar.Link>
          </Navbar.Collapse> */}

        </Navbar>
      </div>
    );
};

export default Header;
