import './App.css';
import React, {useState, useEffect} from 'react';
import MovieList from "./components/MovieList.js";
import Starter from "./components/Starter";
import Nominated from "./components/Nominated";
import Heading from './components/Heading';
import SearchBox from './components/SearchBox';



const App =() => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=e546f4ed`
    const res = await fetch(url);
    const resJson = await res.json();

    if(resJson.Search){
      setMovies(resJson.Search)
    }
    
  }

  useEffect(() => {
    getMovieRequest(searchValue)
  }, [searchValue]);
    return (
      <div>
        <Heading heading="Movie Awards"/>
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
        {/* <Starter/> */}
        <MovieList movies={movies}/>
        <Nominated/>
      </div>
    );
  
}

export default App;
