import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'


function App() {
  return (
    
    <div className="App">
      <NavBar/>
    
      <header className="App-header">
      <ItemListContainer/>
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>
          TIENDA ONLINE
        </p>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Coderhouse
        </a>
      </header>
      
    </div>
  );
}

export default App;