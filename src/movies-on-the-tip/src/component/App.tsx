import React from 'react';
import { Container } from 'react-bootstrap';
import { Route } from 'react-router';
import Home from './global/Home';
import Navigation from './global/Navigation';


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MoviesList from './moviesList/MoviesList';
import MoviesDetails from './moviesDetails/MoviesDetails';
import NoMatch from './global/NoMatch';

function App() {
  return (
    <>
    <Navigation />
    <Container className="my-4">
        <Route path="/" exact>
            <Home />
        </Route>
        <Route path="/movies-in-theaters" component={MoviesList} exact />
        <Route path="/movies-coming" component={MoviesList} exact />
        <Route path="/top-rated-india" component={MoviesList} exact />
        <Route path="/top-rated-movies" component={MoviesList} exact />
        <Route path="/favourite" component={MoviesList} exact />
        <Route path="/:moviesCategory?title=:title" component={MoviesDetails} exact/>
        <Route path="/:moviesCategory/:id" component={MoviesDetails} exact/>
    </Container>
  </>
  );
}

export default App;
