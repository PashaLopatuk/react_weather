import React from 'react'
import s from './Days.module.css'

interface Props {}

const Tabs = () => {
  const tabs = [
    {
      value: 'Week',
    },
    {
      value: '10 Days',
    }, 
    {
      value: 'Month',
    }
  ]
  return (
    <div className={s.tabs}>
      <div className={s.tabs__wrapper}>{
        tabs.map(tab => <div className={s.tab} key={tab.value}>{tab.value}</div>)
      }</div>
      <div className={s.cancel}>
        Cancel
      </div>
    </div>
  )
}

export default Tabs