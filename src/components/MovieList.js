import React from 'react'

const MovieList = (props) => {
    const NominatedMovies = props.nominate;
    return (
        <div>
            {props.movies.map((movie, index) => (
                <div>
                    <img src={movie.Poster} alt='movie'></img>
                    <div onClick={() => props.handleNominationClick(movie)} > 
                        <NominatedMovies/>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default MovieList;
