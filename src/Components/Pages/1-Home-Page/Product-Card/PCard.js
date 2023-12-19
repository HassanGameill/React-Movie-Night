import { useDispatch, useSelector } from 'react-redux';
import './Pcard.css'
import { useEffect } from 'react';
import { axiosGetMovies } from '../../../../REDUX/Actions/MovieAction';
import { Link } from 'react-router-dom';

function PCard() {

  const dispatch = useDispatch()

  const Movies = useSelector((state) => state.movies.movies)

  console.log("All Data",Movies)

  useEffect(() => {
    dispatch(axiosGetMovies(Movies))
  }, [])





  const image = "https://image.tmdb.org/t/p/w500/";

  return (
    <div className="card-area">
        <div className="containers">
          <div className="box-area">
            {
                Movies.length >= 1 ? (
                  Movies.map((mov) => {
                    return (
                      <div className="box" key={mov.id}>
                        <img src={image + mov.backdrop_path} alt="There is no an image" />
                        <div className="overlay">
                          <h3>{mov.title}</h3>
                          <p>{mov.overview}</p>
                          <h4>Rate- {mov.vote_average}</h4>
                          <Link to={`/movie/${mov.id}`}>Watching Now</Link>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <h2>There is no moving</h2>
                )
            }
          </div>
        </div>
      </div>
  )
}

export default PCard
