import React from 'react';
import './App.scss';
import NavbarComponent from './components/navbar/NavbarComponent'
import MuralMapComponent from './components/MuralMap/MuralMapComponent';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <MuralMapComponent />
    </div>
  );
}

export default App;
