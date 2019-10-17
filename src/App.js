import React from 'react';
import './App.scss';
import NavbarComponent from './components/navbar/NavbarComponent'
import MuralMapComponent from './components/MuralMap/MuralMapComponent';
import GeneralProvider from './components/ContextGeneral/ContextGeneralComponent'




function App() {
  return (
    <div className="App">
      <GeneralProvider>
        <NavbarComponent />
        <MuralMapComponent />
      </GeneralProvider>
    </div>
  );
}

export default App;
