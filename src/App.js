import './App.css';
import React, {useState, useEffect} from 'react';
import MovieList from "./components/MovieList.js";
import Starter from "./components/Starter";
import Nominated from "./components/Nominated";
import Heading from './components/Heading';
import SearchBox from './components/SearchBox';
import RemoveNomination from "./components/RemoveNomination";



const App =() => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [nominatedMovies, setNominatedMovies] = useState([]);

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

  useEffect(() => {
    const nominatedMovies = JSON.parse(
      localStorage.getItem('movie-awards-nominations')
    );
    setNominatedMovies(nominatedMovies);
  }, []);

  const saveNomination = (items) => {
    localStorage.setItem('movie-awards-nominations', JSON.stringify(items))
  }

  const nominateMovie = (movie) => {
    const newNominatedList = [...nominatedMovies, movie];
    setNominatedMovies(newNominatedList);
    saveNomination(newNominatedList)
  }

  const removeNominatedMovie = (movie) => {
    const newNominatedList = nominatedMovies.filter(
      (nominatedMovie)=> nominatedMovie.imdbID !== movie.imdbID);
    setNominatedMovies(newNominatedList);
    saveNomination(newNominatedList);
  }

    return (
      <div>
        <Starter/>
        <div className="top">
          <Heading heading="Movie Awards"/>
          <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
        </div>
        <div className='nomination'>
          <div className='movie-list'>
            <MovieList movies={movies} handleNominationClick={nominateMovie} nominate={Nominated}/>
          </div>
          <div className='nominated-list'>
            <MovieList movies={nominatedMovies} handleNominationClick={removeNominatedMovie} nominate={RemoveNomination}/>
          </div>
        </div>
      </div>
    );
  
}

export default App;
