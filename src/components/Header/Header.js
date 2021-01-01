import React from 'react';
import { HeaderWrapper, HomeLink, NavBar, NavLink } from './SCHeader'

const Header = () => {

    return (
		<HeaderWrapper>
            <h1>Header</h1>
			<HomeLink to='/'>Landing Page</HomeLink><br/>
			<HomeLink to='/home'>Home</HomeLink>
			<NavBar>
				<h1>NavBar</h1>
                <NavLink to='/dashboard'>Dashboard</NavLink>
                <NavLink to='/login'>Login</NavLink>
                <NavLink to='/profile'>Profile</NavLink>
			</NavBar>
		</HeaderWrapper>
	);
};

export default Header;