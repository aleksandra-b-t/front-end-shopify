import React from 'react'

const MovieList = (props) => {
    const NominatedMovies = props.nominate;
    return (
        <div className='movie-container'>
            {props.movies.map((movie, index) => (
                <div className='poster-container' key={index}>
                    <img src={movie.Poster}  className='poster' alt='movie'></img>
                    <div onClick={() => props.handleNominationClick(movie)} >
                        <NominatedMovies />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default MovieList;
