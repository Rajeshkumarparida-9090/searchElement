import logo from './logo.svg';
import './App.css';
import Data from "./component/Data";
import DataContext from './component/DataContext';
import { useState } from 'react';


function App() {
  const [data, setData] = useState([])
  console.log('data===', data)
  return (
    <DataContext.Provider value={{data, setData}}>
      <Data />
    </DataContext.Provider>
  );
}

export default App;
