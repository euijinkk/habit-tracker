import React, { useState } from 'react';

const Header = (props) => {

    
        return (
            <header className="header">
                <span className="header-logo"></span>
                <span>Habit Tracker</span>
                <span className="habit-count habit-count-sum">{props.habitSum}</span>
            </header>
        );
        
    };

export default Header;