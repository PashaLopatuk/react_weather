import React, { useState } from 'react';
import s from './Header.module.css';
import GlobalSvgSelector from '../../assets/icons/global/GlobalSvgSelector';
import Select from 'react-select';
import { City } from '../../store/types/types';
// import { Style } from 'util';
import styleSelect from './Select.module.css'

interface Props {
  setCity: React.Dispatch<React.SetStateAction<City>>;
  // citiesList: City[];
  // setCitiesList: React.Dispatch<React.SetStateAction<City[]>>;
}

// type Style = {
//   label: string,
//   value: string,
// }

interface CountryOption {
  value: string;
  label: string;
  country: string;
}

const Header: React.FC<Props> = ({ setCity }) => {
  const [city, setCityValue] = useState<City>({
    value: '',
    label: '',

  });

  const handleChange = (newCity: City) => {
    setCityValue(newCity);
    setCity(newCity);
  };
  const countryOptions: CountryOption[] = 
  [
    { value: 'new york', label: 'New York', country: 'United States' },
  { value: 'los angeles', label: 'Los Angeles', country: 'United States' },
  { value: 'chicago', label: 'Chicago', country: 'United States' },
  { value: 'houston', label: 'Houston', country: 'United States' },
  { value: 'miami', label: 'Miami', country: 'United States' },
  { value: 'dallas', label: 'Dallas', country: 'United States' },
  { value: 'san francisco', label: 'San Francisco', country: 'United States' },
  { value: 'seattle', label: 'Seattle', country: 'United States' },
  { value: 'boston', label: 'Boston', country: 'United States' },
    { value: 'washington', label: 'Washington D.C.', country: 'United States' },
    { value: 'london', label: 'London', country: 'United Kingdom' },
    { value: 'paris', label: 'Paris', country: 'France' },
    { value: 'rome', label: 'Rome', country: 'Italy' },
    { value: 'istanbul', label: 'Istanbul', country: 'Turkey' },
    { value: 'prague', label: 'Prague', country: 'Czech Republic' },
    { value: 'barcelona', label: 'Barcelona', country: 'Spain' },
    { value: 'vienna', label: 'Vienna', country: 'Austria' },
    { value: 'berlin', label: 'Berlin', country: 'Germany' },
    { value: 'athens', label: 'Athens', country: 'Greece' },
    { value: 'budapest', label: 'Budapest', country: 'Hungary' },
    { value: 'amsterdam', label: 'Amsterdam', country: 'Netherlands' },
    { value: 'zurich', label: 'Zurich', country: 'Switzerland' },
    { value: 'krakow', label: 'Krakow', country: 'Poland' },
    { value: 'munich', label: 'Munich', country: 'Germany' },
    { value: 'lisbon', label: 'Lisbon', country: 'Portugal' },
    { value: 'brussels', label: 'Brussels', country: 'Belgium' },
    { value: 'stockholm', label: 'Stockholm', country: 'Sweden' },
    { value: 'copenhagen', label: 'Copenhagen', country: 'Denmark' },
    { value: 'edinburgh', label: 'Edinburgh', country: 'United Kingdom' },
    { value: 'oslo', label: 'Oslo', country: 'Norway' },
    { value: 'helsinki', label: 'Helsinki', country: 'Finland' },
    { value: 'dublin', label: 'Dublin', country: 'Ireland' },
    { value: 'reykjavik', label: 'Reykjavik', country: 'Iceland' },
    { value: 'madrid', label: 'Madrid', country: 'Spain' },
    { value: 'kiev', label: 'Kiev', country: 'Ukraine' },
    { value: 'lviv', label: 'Lviv', country: 'Ukraine' },
    { value: 'lutsk', label: 'Lutsk', country: 'Ukraine' },
    { value: 'marseille', label: 'Marseille', country: 'France' },
    { value: 'toulouse', label: 'Toulouse', country: 'France' },
    { value: 'nice', label: 'Nice', country: 'France'}
  ]
  
  const options = [
    { value: 'new york', label: 'New York' },
  { value: 'los angeles', label: 'Los Angeles' },
  { value: 'chicago', label: 'Chicago' },
  { value: 'houston', label: 'Houston' },
  { value: 'miami', label: 'Miami' },
  { value: 'san francisco', label: 'San Francisco' },
  { value: 'seattle', label: 'Seattle' },
  { value: 'boston', label: 'Boston' },
  { value: 'philadelphia', label: 'Philadelphia' },
  { value: 'atlanta', label: 'Atlanta' },
      { value: 'london', label: 'London' },
      { value: 'paris', label: 'Paris' },
      { value: 'rome', label: 'Rome' },
      { value: 'istanbul', label: 'Istanbul' },
      { value: 'prague', label: 'Prague' },
      { value: 'barcelona', label: 'Barcelona' },
      { value: 'vienna', label: 'Vienna' },
      { value: 'berlin', label: 'Berlin' },
      { value: 'athens', label: 'Athens' },
      { value: 'budapest', label: 'Budapest' },
      { value: 'amsterdam', label: 'Amsterdam' },
      { value: 'zurich', label: 'Zurich' },
      { value: 'krakow', label: 'Krakow' },
      { value: 'munich', label: 'Munich' },
      { value: 'lisbon', label: 'Lisbon' },
      { value: 'brussels', label: 'Brussels' },
      { value: 'stockholm', label: 'Stockholm' },
      { value: 'copenhagen', label: 'Copenhagen' },
      { value: 'edinburgh', label: 'Edinburgh' },
      { value: 'oslo', label: 'Oslo' },
      { value: 'helsinki', label: 'Helsinki' },
      { value: 'dublin', label: 'Dublin' },
      { value: 'reykjavik', label: 'Reykjavik' },
      { value: 'madrid', label: 'Madrid' },
      { value: 'kyiv', label: 'Kyiv' },
      { value: 'lutsk', label: 'Lutsk' },
      { value: 'lviv', label: 'Lviv' },
      { value: 'marseille', label: 'Marseille' },
      { value: 'toulouse', label: 'Toulouse' },
      { value: 'nice', label: 'Nice' }
    ]
    
    function getCountry(city: City, countryOptions: CountryOption[]): string | undefined {
      const matchingOption = countryOptions.find((option) => option.value === city.value);
      return matchingOption !== undefined ? matchingOption.country : '';
    }
  
  const colorStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: 'rgba(71, 147, 255, 0.2)',
      width: '194px',
      height: '37px',
      borderRadius: '10px',
      zIndex: '100'
      })
  };

  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <GlobalSvgSelector id={'header-logo'} />
        </div>
        <div className={s.title}>{city.label}{city.label !== '' ? ',': ''} {
          getCountry(city, countryOptions)
        }</div>
      </div>
      <div className={s.wrapper}>
        
        <span>
          
        </span>
        <Select
          styles={colorStyles}
          options={options}
          onChange={(c) => handleChange(c as City)}
          value={city}
        />
      </div>
    </header>
  );
};

export default Header;

