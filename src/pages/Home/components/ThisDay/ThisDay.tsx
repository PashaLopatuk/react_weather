import React from 'react';
import GlobalSvgSelector from '../../../../assets/icons/global/GlobalSvgSelector';
import s from './ThisDay.module.css';
import { Weather } from '../../../../store/types/types';
import { City } from '../../../../store/types/types';

interface Props {
  weather: Weather,

  city: City
}

// const WeatherToSvg = (name: string) => {
//   // this function converts descriptions of weather from server to names of svg icons of this weather
//   switch (name) {
//     case 'Clouds':
//       return 'mainly_cloudy'
//     default:
//       return 'sun'
//   }
// }

function categorizeWeatherDescription(description: string): string {
  // Перевіряємо чи відповідає опис до кожної категорії та повертаємо відповідний рядок
  if (description.includes('rain')) {
    return 'rain';
  }
  if (description.includes('drizzle') || description.includes('shower')) {
    return 'small rain';
  }
  if (description.includes('few clouds') && description.includes('rain')) {
    return 'small_rain_sun';
  }
  if (description.includes('clear sky')) {
    return 'sun';
  }
  if (description.includes('cloud')) {
    return 'mainly_cloudy';
  }
  if (description.includes('mist')) {
    return 'mist';
  }
  // Якщо нічого не підходить, повертаємо порожній рядок
  return '';
}

const getHours = (timeZone: number) => {
  let hours = new Date().getHours()-3;
  hours += timeZone/3600;
  return hours.toString().length === 2 ? hours.toString() : '0'.concat(hours.toString())
}

const ThisDay = ({ weather }: Props, {city}: Props) => {
  // console.log('Thisday: ', city !== undefined ? city.label : '')
  return (
    <div className={s.this__day}>
      <div className={s.top__block}>
        <div className={s.top__block__wrapper}>
          <div className={s.this__temp}>{Math.floor(weather.main.temp)}°</div>
          <div className={s.this__day_name}>Today</div>
        </div>
        <GlobalSvgSelector id={categorizeWeatherDescription(weather.weather[0].description)}/>
      </div>
      <div className={s.bottom_block}>
        <div className={s.this__time}>
          Date: <span>{
            new Date().getDate().toString().length === 2 ? new Date().getDate().toString() : '0'.concat(new Date().getDate().toString())
          }
            :
            {
            new Date().getMonth().toString().length === 2 ? new Date().getMonth().toString() : '0'.concat(new Date().getMonth().toString())
          }</span>
        </div>
        <div className={s.this__city}>
          Local time: 
           <span>{
            getHours(weather.timezone)   
            // new Date().getDate().toString().length === 2 ? new Date().getDate().toString() : '0'.concat(new Date().getDate().toString())
          }:{
            new Date().getMinutes().toString()
          }</span>
        </div>
      </div>
    </div>
  )
}

export default ThisDay
