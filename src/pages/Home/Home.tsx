import React, { useEffect } from 'react';
// import Days from './components/Days/Days';
import ThisDay from './components/ThisDay/ThisDay';
import ThisDayInfo from './components/ThisDayInfo/ThisDayInfo';
import s from './Home.module.css';
import { useCustomDispatch, useCustomSelector } from '../../hooks/store';
import { fetchCurrentWeather } from '../../store/thunks/fetchCurrentWeather';
import { City } from '../../store/types/types';


interface Props {
  city: City
}

const Home = (props: Props) => {
  const dispatch = useCustomDispatch();


  const { weather } = useCustomSelector(
    state => state.currentWeatherSliceReducer
  )

  const {city} = props;

  useEffect( () => {
    dispatch(fetchCurrentWeather(city.value))
  }, [city.value])

  console.log(city.label)

  return (
    <div className={s.home}>
        <div className={s.wrapper}>
          <ThisDay weather={weather} city={city} />
          <ThisDayInfo weather={weather}/>
        </div>
        {/* <Days/> */}
    </div>
  )
}

export default Home
