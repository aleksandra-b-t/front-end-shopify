import './App.css';
import React, {useState} from 'react';
import SearchList from "./containers/SearchList.js";
import Starter from "./containers/Starter";
import Nominated from "./containers/Nominated";



const App =() => {
  const [movies, setMovies] = useState([
    {
    Title :"Guardians of the Galaxy Vol. 2",
    Year :"2017",
    imdbID: 'tt0076759',
    Type: 'movie',
    Poster :"https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
    },
    {
      Title :"Guardians of the Galaxy Vol. 2",
      Year :"2017",
      imdbID: 'tt0076759',
      Type: 'movie',
      Poster :"https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
      }
  ])
    return (
      <div>
        <h1>Hi there</h1>
        <Starter/>
        <SearchList movies={movies}/>
        <Nominated/>
      </div>
    );
  
}

export default App;
