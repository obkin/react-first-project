import React, { useState } from 'react';

const Input = () => {

    const [text, setText] = useState('type something');

    return (
        <div>
            <h1>{text}</h1>
            <input type="text" onChange={event => setText(event.target.value)}/>
        </div>
    );
};

export default Input;