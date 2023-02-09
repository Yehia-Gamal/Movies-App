import React from 'react';
import { useMoviesContext } from './context/GlobalContext';
import MovieCard from './MovieCard';
import "./Watchlist.css"

const WatchList = () => {

  const MovieContext = useMoviesContext();

  return (
    <div className='watch-list'>
      <div className="container">
        <div className="main-heading">
          <h1>My Watch List</h1>
          <span className='movies-count'>7 Movies</span>
        </div>
        {MovieContext.watchlist.length > 0 ? (
          <div className='movie-grid'>
            {MovieContext.watchlist.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} type="watchlist" />
            ))}
          </div>
        ) : (
          <h2 className='no-movies'>No Movies in Your List, Add Some!</h2>
        )}
      </div>
    </div>
  );
}

export default WatchList;
