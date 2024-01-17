import React, { useState, useRef, useEffect } from 'react';
import cl from './Dropdown.module.css';

const Dropdown = ({ dropName, children }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  const handleDocumentClick = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target)
    ) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={cl.dropdown} ref={dropdownRef}>
      <button className={cl.dropdown__btn} onClick={toggleDropdown} ref={buttonRef}>
        {dropName}
      </button>
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
