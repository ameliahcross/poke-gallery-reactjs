import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/NavigationBar.js';
import CardItem from './components/CardItem.js';
import React from "react";
import ScrollToTop from "react-scroll-to-top";

// Componente principal
function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <div className="container mt-5 pb-5">
          <CardItem/>
          <ScrollToTop smooth />
      </div>
    </div>
  );
}

export default App;
