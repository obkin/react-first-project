import React, { useState } from 'react';

const Dropdown = ({ dropName, children }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown}>{dropName}</button>
        {isDropdownOpen && (
            <div className="dropdown-content">
                {children}
            </div>
        )}
    </div>
  );
};

export default Dropdown;
