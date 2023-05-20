import React from 'react'
import Moviecard from './Moviecard'

const getMovies = (movies) => {
    return (
        <div>
            {
                movies.map(movie => <Moviecard key = {movie.id} movie={movie} />)
            }
        </div>
    )
}

const MovieList = (props) => (
  <div>
    {getMovies(props.movies)}
  </div>
)


export default MovieList
