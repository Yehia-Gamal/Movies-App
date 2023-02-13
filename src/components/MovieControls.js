import { useMoviesContext } from './context/GlobalContext';
import * as actions from "./context/ActionTypes"

const MovieControls = ({ movie, type }) => {

  const MovieContext = useMoviesContext()

  return (
    <div className='inner-card-controls'>
      {
        type === "watchlist" && (
          <>
            <button onClick={() => MovieContext.MoviesDispatch({
              type: actions.ADD_MOVIE_TO_WATCHED,
              payload: movie
            })} className='ctrl-button'>
              <i className='fa-solid fa-eye' />
            </button>
            <button onClick={() => MovieContext.MoviesDispatch({
              type: actions.REMOVE_MOVIE_FROM_WATCHLIST,
              payload: movie.imdbID
            })} className='ctrl-button'>
              <i className='fa-fw fa fa-times' />
            </button>
          </>
        )
      }

      {
        type === "watched" && (
          <>
            <button onClick={() => MovieContext.MoviesDispatch({
              type: actions.MOVE_TO_WATCHLIST,
              payload: movie
            })} className='ctrl-button'>
              <i className='fa-solid fa-eye-slash' />
            </button>
            <button onClick={() => MovieContext.MoviesDispatch({
              type: actions.REMOVE_MOVIE_FROM_WATCHED,
              payload: movie.imdbID
            })} className='ctrl-button'>
              <i className='fa-fw fa fa-times' />
            </button>
          </>
        )
      }
    </div>
  );
}

export default MovieControls;
