import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expensify</h1>&nbsp;
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>&nbsp;
        <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>&nbsp;
    </header>
);

export default Header;