import logo from './logo.svg';
import './App.css';
import Algo from './components/Algo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Algo/>
        <nav>
          
        </nav>
        <img src={logo} className="App-logo" alt="logo" />
        <h1 class="display-1">mi titulo</h1>
        <p>
          Edit aa <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
