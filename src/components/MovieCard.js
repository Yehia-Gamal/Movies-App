import React from 'react';
import "./MovieCard.css"
import MovieControls from './MovieControls';

const MovieCard = ({ movie, type }) => {
  return (
    <div className='movie-card w-100 position-relative border-0 d-block'>
      <div className="overlay"></div>
      {movie.Poster ? (<img className='w-100 h-100' src={movie.Poster} alt={movie.Title} />) : (<div className='filter-poster'></div>)}
      <MovieControls movie={movie} type={type}/>
    </div>
  );
}

export default MovieCard;
