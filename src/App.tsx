import React, { useState } from 'react';
import {Routes, Route} from 'react-router';
import Home from './pages/Home/Home'
import MonthStatistics from './pages/MonthStatistics/MonthStatistics';
import Header from './shared/Header/Header';
import Popup from './shared/Popup/Popup';
import { City } from './store/types/types';

function App() {
  const items = [
    {
      icon_id: 'temp',
      name: 'Temperature',
      value: '20º',
    },
    {
      icon_id: 'pressure',
      name: 'Pressure',
      value: '766mm',
    },
    {
      icon_id: 'precipitation',
      name: 'Precipitation',
      value: 'No rain',
    },
    {
      icon_id: 'wind',
      name: 'Wind',
      value: '3 m/s on west',
    },
  ]

  
  const [city, setCity]: [City, React.Dispatch<React.SetStateAction<City>>] = useState({
  value: '',
  label: ''
});

  

  return (
    <div className={'wrapper'}>
      {/* <Popup items={items}/> */}
      <div className='container'>
        <Header setCity={setCity}/>
        <Routes>
          <Route path='/' element={<Home city={city}/>}/>
          <Route path='/month-statistics' element={<MonthStatistics/>}/>
        </Routes>
    </div>
    </div>
  );
}

export default App;
