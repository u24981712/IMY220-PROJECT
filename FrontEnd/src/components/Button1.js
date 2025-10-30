import React from 'react';

const Button1 = ({ text ,style , toggle }) => {
    return (
        <>
            <link rel="stylesheet" type="text/css" href="/assets/css/Button.css" />

            <button onClick={toggle} className={style}>
                {text}
            </button>
        </>
    );
};

export default Button1;