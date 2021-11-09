import React, { memo } from 'react';

const Navbar = memo(
    ({ totalCount }) => (
        <div className="navbar">
            <span>Habit Tracker : </span>
            <span className="navbar-count">{totalCount}</span>
        </div>
        

    )
);

export default Navbar;