import logo from './logo.svg';
import './App.css';
import LoginTelegram from './telegramLogin';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
      <LoginTelegram
        lang="en"
        cornerRadius={5} // 0 - 20
        buttonSize="large" // "large" | "medium" | "small"
        botUsername="RGByte_bot"
        onAuthCallback={(data) => {
          console.log(data);
          // call your backend here to validate the data and sign in the user
        }}
      />
    </div>
  );
}

export default App;
