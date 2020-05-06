import React from 'react';
import { Link } from 'react-router-dom';
import { SearchForm } from '../Components/SearchForm';
// import DataLoader from '../Components/UseFetch';

const Home = () => (
  <div>
    <h1>LAB MOVIES</h1>
    <SearchForm />

    <Link key="star" to="/allmovies/star">StarWars </Link>
    <br />
    <Link key="disney" to="/allmovies/disney">Disney</Link>
    <br />
    <Link key="marvel" to="/allmovies/marvel">Marvel</Link>
    <br />
    <Link key="avengers" to="/allmovies/avengers">Avengers</Link>
    <br />
    <Link key="chucky" to="/allmovies/chucky">Chucky</Link>
    <br />
    <Link key="harry" to="/allmovies/harry">Harry Potter</Link>
    <br />
  </div>
);
export default Home;
