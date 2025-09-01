import React from 'react';

const Button1 = ({ text ,style }) => {
    return (
        <>
            <link rel="stylesheet" type="text/css" href="/assets/css/Button.css" />

            <button className={style}>
                {text}
            </button>
        </>
    );
};

export default Button1;