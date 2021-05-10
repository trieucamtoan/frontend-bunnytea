import bunnyLogo from '../src/icons/bunny-logo-white.svg';
import bunnyTitle from '../src/icons/bunny-title-white.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img 
          src={bunnyLogo} 
          style={{
            height: '300px', 
            width: '300px'
          }}
          alt="bunnyLogo" />

        <img 
          src={bunnyTitle} 
          style={{
            height: '300px', 
            width: '300px'
          }}
          alt="bunnyTitle"/>


      </header>
    </div>
  );
}

export default App;
