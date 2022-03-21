import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Nav from './components/Nav';
import Main from './views/Main/Main';
import Films from './views/Films/Films';
import Characters from './views/Characters/Characters';
import Books from './views/Books/Books';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
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
      </div>
    </BrowserRouter>
  );
}

export default App;
