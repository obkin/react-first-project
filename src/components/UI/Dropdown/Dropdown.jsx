import React, { useState } from 'react';
import cl from './Dropdown.module.css';

const Dropdown = ({ dropName, children }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
      <div className={cl.dropdown}>
      <button className={cl.dropdown__btn} onClick={() => {setDropdownOpen(!isDropdownOpen)}}>{dropName}</button>
      {isDropdownOpen && (
          <div className={cl.dropdown__content}>
              <div className={cl.dropdown__children}>
                {children}
              </div>
          </div>
      )}
    </div>
  );
};

export default Dropdown;
