import './App.css';
import Pages from './views/Pages';
import Nav from './components/Nav';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Pages />
      </div>
    </BrowserRouter>
  );
}

export default App;
