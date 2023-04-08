import React, { useState } from 'react';
import s from './Header.module.css';
import GlobalSvgSelector from '../../assets/icons/global/GlobalSvgSelector';
import Select from 'react-select';
import { City } from '../../store/types/types';

interface Props {
  setCity: React.Dispatch<React.SetStateAction<City>>;
}

const Header: React.FC<Props> = ({ setCity }) => {
  const [city, setCityValue] = useState<City>({
    value: '',
    label: ''
  });

  const handleChange = (newCity: City) => {
    setCityValue(newCity);
    setCity(newCity);
  };

  const options = [
    { value: 'lutsk', label: 'Lutsk' },
    { value: 'london', label: 'London' },
    { value: 'kyiv', label: 'Kyiv' },
    { value: 'praha', label: 'Praha' },
    { value: 'rivne', label: 'Rivne' }
  ];

  const colorStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: 'rgba(71, 147, 255, 0.2)',
      width: '194px',
      height: '37px',
      borderRadius: '10px',
      zIndex: 100
    })
  };

  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <GlobalSvgSelector id={'header-logo'} />
        </div>
        <div className={s.title}>React Weather</div>
      </div>
      <div className={s.wrapper}>
        {/* <div className={s.change_theme}>
          <GlobalSvgSelector id={'change-theme'} />
        </div> */}
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

