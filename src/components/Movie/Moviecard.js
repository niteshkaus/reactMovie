import React from 'react'

const Moviecard = (props) => (
    <div className="movie-card">
        <div className="movie-card card">
            <div className="card-body">
                <h4>{props.movie.title}</h4>
                <h6>{props.movie.release_date}</h6>
                <b>Rating: {props.movie.rating}</b>
                <p>{props.movie.description}</p>
            </div>
        </div>
    </div>

)

export default Moviecard;
