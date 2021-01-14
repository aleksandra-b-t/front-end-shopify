import './App.css';
import React, {useState, useEffect} from 'react';
import MovieList from "./components/MovieList.js";
import Starter from "./components/Starter";
import Nominated from "./components/Nominated";
import Heading from './components/Heading';
import SearchBox from './components/SearchBox';
import RemoveNomination from "./components/RemoveNomination";
import Count from './components/Count';



const App =() => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [nominatedMovies, setNominatedMovies] = useState([]);
  const firstTime = true;
  const key = process.env.REACT_APP_KEY

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=${key}`
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
    if (newNominatedList.length <= 5) {
    setNominatedMovies(newNominatedList);
    saveNomination(newNominatedList)
    } else {
      alert("You can nominate only 5 movies!")
    }
  }

  const removeNominatedMovie = (movie) => {
    const newNominatedList = nominatedMovies.filter(
      (nominatedMovie)=> nominatedMovie.imdbID !== movie.imdbID);
    setNominatedMovies(newNominatedList);
    saveNomination(newNominatedList);
  }
  if(nominatedMovies.length === 0){
    return (
    <div>
      <Starter/>
    </div>)
  } else {
    return (
      <div>
        <div className="top">
          <Heading heading="Movie Awards"/>
          <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
        </div>
        <div className='nomination'>
          <div className='movie-list'>
            <MovieList movies={movies} handleNominationClick={nominateMovie} nominate={Nominated}/>
          </div>
          <div className='nominated-list'>
            <div className='heading-nomination'>
              <Heading heading="Nominated:"/>
              <Count movies={nominatedMovies}/>
            </div>
            <MovieList movies={nominatedMovies} handleNominationClick={removeNominatedMovie} nominate={RemoveNomination}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
