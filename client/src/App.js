import React, { useState } from 'react';
import { Route } from "react-router-dom";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route path="/" render={props => <SavedList {...props} savedList={savedList} />}></Route>
      <Route exact path="/" render={(props) => <MovieList {...props} save={addToSavedList} />}></Route>
      <Route path="/movies/:id" render={props => <Movie {...props} savedList={savedList} save={addToSavedList} />}></Route>
      <Route path="/saved/:id" render={props => <Movie {...props} />} />
    </div>
  );
};

export default App;
