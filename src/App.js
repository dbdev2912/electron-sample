import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';


function App() {
  const { proxy } = useSelector( state => state )

  useEffect(() => {
    const data = window.api.getData()
    console.log(data)
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href={ proxy }        
          rel="noopener noreferrer"
        >
          { proxy }
        </a>
      </header>
    </div>
  );
}

export default App;
