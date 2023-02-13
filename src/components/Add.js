import axios from 'axios';
import { useEffect, useState } from 'react';
import "./Add.css"
import ResultCard from './ResultCard';

const Add = () => {

  const formSubmit = (e) => {
    e.preventDefault()
  }

  const [searchValue, setSearchValue] = useState("")
  const [movies, setMovies] = useState([])

  useEffect(() => {
    axios.get(`https://www.omdbapi.com/?s=${searchValue}&apikey=f9251b2d`).then((response) => {
      if (response.data.Search) {
        setMovies(response.data.Search)
      }
    }).catch((error) => console.log(error))
  }, [searchValue])

  return (
    <div className='add-page'>
      <div className="container">
        <div className="add-content">
          <h2 className='mb-4 mt-3 text-center'>Search for any movie you want to watch</h2>
          <div className="input-container">
            <form onSubmit={formSubmit} className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search for a movie" aria-label="Search" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>

          {
            movies.length > 0 && <ul className='results'>
              {movies.map((movie) => (<li key={movie.imdbID}>
                {<ResultCard movie={movie} />}
              </li>))}
            </ul>
          }

        </div>
      </div>
    </div>
  );
}

export default Add;
