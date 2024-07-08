import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/NavigationBar.js'
import CardItem from './components/CardItem.js'

// Componente principal
function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <div className="container mt-5 pb-5">
          <CardItem/>
          
      </div>
    </div>
  );
}

export default App;
