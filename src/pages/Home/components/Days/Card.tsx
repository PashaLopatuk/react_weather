import React from 'react'
import s from './Days.module.css'
import { Day } from './Days'
import GlobalSvgSelector from '../../../../assets/icons/global/GlobalSvgSelector'

interface Props {
    day: Day
}

const Card = ({day}: Props) => {
  const { name, date, icon_id, temp_day, temp_night, info} = day;

  return (
    <div className={s.card}>
        <div className={s.day__name}>{name}</div>
        <div className={s.day__date}>{date}</div>
        <div className={s.day__img}>
            <GlobalSvgSelector id={icon_id}/>
        </div>
        <div className={s.temp__day}>{temp_day}</div>
        <div className={s.temp__night}>{temp_night}</div>
        <div className={s.day__info}>{info}</div>
    </div>
  )
}

export default Card
