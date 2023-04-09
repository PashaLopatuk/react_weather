import React from 'react'
import { City } from '../../store/types/types';
import s from './Settings.module.css'

interface Props {

    citiesList: City[];
    setCitiesList: React.Dispatch<React.SetStateAction<City[]>>;
  }

const Settings = ({citiesList, setCitiesList} : Props) => {

  return (
    <div>
      <div className={s.add__city}>
        <input type="text" />
        <button>
            Save
        </button>
      </div>
      <ul className={s.citiesList}>{
        citiesList.map( (city: City) => (
            <li className={s.city_case}>
                
            </li>
        ))
        }
      </ul>
    </div>
  )
}

export default Settings
