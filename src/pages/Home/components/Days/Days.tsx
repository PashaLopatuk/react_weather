import React from 'react'
import s from './Days.module.css'
import Card from './Card'
import Tabs from './Tabs'

interface Props {}

export interface Day {
    name: string,
    date: string,
    icon_id: string,
    temp_day: string,
    temp_night: string,
    info: string,
}

const Days = () => {
  const days: Day[]  = [
    {
        name: 'Today',
        date: '31 march',
        icon_id: 'sun',
        temp_day: '+16',
        temp_night: '+1',
        info: 'Cloudy',
    },
    {
        name: 'Today',
        date: '31 march',
        icon_id: 'sun',
        temp_day: '+16',
        temp_night: '+1',
        info: 'Cloudy',
    },
    {
        name: 'Today',
        date: '31 march',
        icon_id: 'sun',
        temp_day: '+16',
        temp_night: '+1',
        info: 'Cloudy',
    },
    {
        name: 'Today',
        date: '31 march',
        icon_id: 'sun',
        temp_day: '+16',
        temp_night: '+1',
        info: 'Cloudy',
    },
    ]
  return (
    <>
      <Tabs />
      <div className={s.days}>{
        days.map((day: Day) => 
          <Card day={day} key={day.icon_id}/>
        )
      }</div>
    </>
  )
}

export default Days
