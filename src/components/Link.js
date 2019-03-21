import React from 'react';

const Link = ({ isActive, children, onClick }) => {
    if (isActive) {
        return <span>{children}</span>
    }
    return (
        <button
            onClick={onClick}
            disabled={isActive}
        >
            {children}
        </button>
    );
};

export default Link;