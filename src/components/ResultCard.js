import React from 'react';
import { useMoviesContext } from './context/GlobalContext';
import "./ResultCard.css"
import * as actions from "./context/ActionTypes"

const ResultCard = ({ movie }) => {

  const MovieContext = useMoviesContext()
  const storedMovie = MovieContext.watchlist.find((o) => o.imdbID === movie.imdbID);
  const storedMovieWatched = MovieContext.watched.find((o) => o.imdbID === movie.imdbID);

  const watchlistDisabled = storedMovie ? true : storedMovieWatched ? true : false;
  const watchedDisabled = storedMovieWatched ? true : false

  return (
    <div className='result-card'>
      <div className="poster-wrapper">
        {movie.Poster ? <img src={movie.Poster} alt={movie.Title} /> : <div className="filler-poster"></div>}
      </div>
      <div className="info">
        <div className="heading">
          <h3 className='title'>{movie.Title}</h3>
          {movie.Year ? <h4 className='year'>{movie.Year}</h4> : "-"}
        </div>
        <div className="controls">
          <button className="button" disabled={watchlistDisabled} onClick={() => MovieContext.MoviesDispatch(
            { type: actions.ADD_MOVIE_TO_WATCHLIST, payload: movie }
          )}>Add to Watch List</button>
          <button className="button" disabled={watchedDisabled} onClick={() => MovieContext.MoviesDispatch(
            { type: actions.ADD_MOVIE_TO_WATCHED, payload: movie }
          )}>Add to Watched</button>
        </div>
      </div>
    </div>
  );
}

export default ResultCard;
