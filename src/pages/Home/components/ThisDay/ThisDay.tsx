import React from 'react';
import GlobalSvgSelector from '../../../../assets/icons/global/GlobalSvgSelector';
import s from './ThisDay.module.css';
import { Weather } from '../../../../store/types/types';


interface Props {
  weather: Weather,
  cityName: string,
}

const ThisDay = ({ weather }: Props, {cityName}: Props) => {
  return (
    <div className={s.this__day}>
      <div className={s.top__block}>
        <div className={s.top__block__wrapper}>
          <div className={s.this__temp}>{Math.floor(weather.main.temp)}°</div>
          <div className={s.this__day_name}>Today</div>
        </div>
        <GlobalSvgSelector id='sun'/>
      </div>
      <div className={s.bottom_block}>
        <div className={s.this__time}>
          Time: <span>21:54</span>
        </div>
        <div className={s.this__city}>
          City: <span>{cityName}</span>
        </div>
      </div>
    </div>
  )
}

export default ThisDay
