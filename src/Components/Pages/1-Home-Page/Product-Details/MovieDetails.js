import { Link, useParams } from "react-router-dom";
import "./movieDetails.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { axiosGetMovieDetails } from "../../../../REDUX/Actions/MovieAction";



function MovieDetails() {

  
  const prams = useParams()
  console.log(prams.id)

  const dispatch = useDispatch()




  const movieId = prams.id;
  const movie = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(axiosGetMovieDetails(movieId));
  }, [dispatch, movieId]);

  console.log(movie);


  



  const image = 'https://image.tmdb.org/t/p/w500/';
  return (
    <div className="container-about">
      <div className="about-content">
        <div className="image">
          <img src={image + movie.backdrop_path} className="img-a" />
        </div>
        <div className="content">
          <div className="title">{movie.title}</div>
          <div>
            <h3>Movie Story</h3>
            <p className="">{movie.overview}</p>
          </div>
          <div className="">
            <h5>Movie-Date:- {movie.release_date}</h5>
            <h5>Views:- {movie.vote_count}</h5>
            <h5>Evaluate:- {movie.vote_average}</h5>
          </div>
          <div className="d-flex justify-content-center">
            <Link to="/" className="readMore">
              Home Page
            </Link>
            <Link to={movie.homepage} className="readMore">
              Watch Movie
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
