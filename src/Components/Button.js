import React from 'react';

const Button = ({ buttonDisplayName, clickHandler }) => {
    return <button id='new-quote' className='btn btn-primary' onClick={clickHandler}>{buttonDisplayName}</button>
};

export default Button;