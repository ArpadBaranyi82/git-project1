import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Updated <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Some more content
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Git
        </a>
      </header>
    </div>
  );
}

export default App;
