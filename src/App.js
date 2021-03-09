import React, { useState } from 'react';
import './App.css';
import Cars from './Cars';

import MyContext from './context';

function App() {
  const [cars, setCars] = useState({
    red: false,
    blue: false,
    yellow: false,
  });

  const context = {
    cars,
    moveCar: (car, side) => setCars({...cars, [car]: side}),
  }

  return (
    <MyContext.Provider value={context}>
      <Cars />
    </MyContext.Provider>
  );
}

export default App;
