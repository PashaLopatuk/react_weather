import React from 'react'
import s from './Popup.module.css'
import { Item } from '../../pages/Home/components/ThisDayInfo/ThisDayInfo'
import ThisDayItem from '../../pages/Home/components/ThisDayInfo/ThisDayItem'
import GlobalSvgSelector from '../../assets/icons/global/GlobalSvgSelector'

interface Props {
    items: Item[]
}

const Popup = ({ items }: Props) => {
  return (
    <>
        <div className={s.blur}></div>
        <div className={s.popup}>
            <div className={s.day}>
                <div className={s.day__temp}>20º</div>
                <div className={s.day__name}>Wednesday</div>
                <div className={s.img}>
                    <GlobalSvgSelector id='sun'/>
                </div>
                <div className={s.day__time}>
                    Time: <span>21:54</span>
                </div>
                <div className={s.day__city}>
                    City: <span>London</span>
                </div>
            </div>
            <div className={s.this__day_info_items}>
            {
                items.map( (item: Item) => <ThisDayItem key={item.icon_id} item={item}/> )
            }
            </div>
            <div className={s.close}>
                <GlobalSvgSelector id='close'/>
            </div>
        </div>
    </>
  )
}

export default Popup
