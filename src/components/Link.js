import React from 'react';

const Link = ({ active, children, onClick }) => {
    if (active) {
        return <span>{children}</span>
    }
    return (
        <button
            onClick={onClick}
            disabed={active}
        >
            {children}
        </button>
    );
};

export default Link;