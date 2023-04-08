import React from 'react';
import s from './ThisDayInfo.module.css';
import cloud from '../../../../assets/images/cloud.png'
import ThisDayItem from './ThisDayItem';

interface Props {}

export interface Item {
  icon_id: string,
  name: string,
  value: string,
}

const ThisDayInfo = (props: Props) => {
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
