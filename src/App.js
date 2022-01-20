import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'
import ItemCount from './components/ItemCount'



function App() {
  return (
    
    <div className="App">
      <NavBar/>
    
      <header className="App-header">
      <p>
          TIENDA ONLINE
        </p>
      <ItemListContainer/>

      <ItemCount/>
    
      
        
        
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