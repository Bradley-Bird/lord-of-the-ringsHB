import React from 'react';
import Main from './Main/Main';
import Films from './Films/Films';
import Books from './Books/Books';
import Characters from './Characters/Characters';
import { Switch, Route } from 'react-router-dom';
function Pages() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/films">
          <Films />
        </Route>
        <Route path="/characters">
          <Characters />
        </Route>
        <Route path="/books">
          <Books />
        </Route>
      </Switch>
    </>
  );
}

export default Pages;
