import React from 'react'

const SearchList = (props) => {
    

    return (
        <div>
            <h1>SearchList</h1>
            {props.movies.map((movie, index) => (
                <div>
                    <img src={movie.Poster} alt='movie'></img>
                </div>
            ))}
        </div>
    )
}

export default SearchList;
