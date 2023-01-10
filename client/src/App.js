import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>GOING DUTCH APP</h2>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="google-auth"
          href="/auth/google" //relative path
          // target="_blank"
          // rel="noopener noreferrer"
        >
          sign in with google
        </a>

      </header>
    </div>
  );
}

export default App;
