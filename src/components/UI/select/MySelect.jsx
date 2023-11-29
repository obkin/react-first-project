import React from 'react';

const MySelect = ({ options, defaultValue, value, onChange }) => {
    return (
        <select
            value={value}
            onChange={e => onChange(e.target.value)}
        >
            <option disabled value={''}>{defaultValue}</option>
            {options.map(option => 
                <option key={option.type} value={option.type}>
                    {option.name}
                </option>    
            )}
        </select>
    );
};

export default MySelect;