import React, { useState, useRef, useEffect } from 'react';
import cl from './Dropdown.module.css';

const Dropdown = ({ dropName, children }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  const handleDocumentClick = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target)
    ) {
      setIsDropdownOpen(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={cl.dropdown} ref={dropdownRef}>
      <button className={cl.dropdown__btn} onClick={toggleDropdown} ref={buttonRef}>
        {dropName}
      </button>
      {isDropdownOpen && (
        <div className={cl.dropdown__content}>
          <div className={cl.dropdown__children} onClick={toggleDropdown}>
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
