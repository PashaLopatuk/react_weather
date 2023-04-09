import React from 'react';
import s from './ThisDayInfo.module.css';
import cloud from '../../../../assets/images/cloud.png'
import ThisDayItem from './ThisDayItem';
import { Weather } from '../../../../store/types/types';

interface Props {
  weather: Weather
}

export interface Item {
  icon_id: string,
  name: string,
  value: string,

}
function getDirectionFromAzimuth(azimuth: number): string {
  const directions = ['North', 'North-East', 'East', 'South-East', 'South', 'South-West', 'West', 'North-West', 'North'];
  const index = Math.round((azimuth % 360) / 45);
  return directions[index];
}


const ThisDayInfo = ({weather}: Props) => {
  const items: Item[] = [
    {
      icon_id: 'temp',
      name: 'Temperature',
      value: weather.main.temp.toString().concat('°'),
    },
    {
      icon_id: 'pressure',
      name: 'Pressure',
      value: weather.main.pressure.toString().concat('mm'),
    },
    {
      icon_id: 'precipitation',
      name: 'clouds',
      value: weather.clouds.all.toString().concat('%'),
    },
    {
      icon_id: 'wind',
      name: 'Wind',
      value: `${weather.wind.speed} m/s on ${
getDirectionFromAzimuth(360 -weather.wind.deg)
        // weather.wind.deg < 85 ? 'north' : weather.wind.deg < 175 ? 'east' : weather.wind.deg < 165 ? 'south' : weather.wind.deg < 355 ? 'west' : 'north'
      }`,
    },
  ]
  return (
    <div className={s.this__day_info}>
      <div className={s.this__day_info_items}>
        {
          items.map( (item: Item) => <ThisDayItem key={item.icon_id} item={item}/> )
        }
      </div>
      <img className={s.cloud__img} src={cloud} alt="Cloud" />
    </div>
  )
}

export default ThisDayInfo
