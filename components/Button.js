import React from 'react';

const Button = ({title, type, styles}) => {
    return (
        <button style={styles} className={`btn ${type}`}>
            {title}
        </button>
    );
};

export default Button;