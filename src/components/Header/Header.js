import React, { useContext } from 'react';
import { UserContext } from '../../utils/UserContext';
import { HeaderWrapper, HomeLink, NavBar, NavLink } from './SCHeader';

const Header = () => {
	const { user, setUser } = useContext(UserContext);
	console.log(user);

	return (
		<HeaderWrapper>
			<h1>Header</h1>
			<HomeLink to='/'>Landing Page</HomeLink>
			<br />
			<HomeLink to='/home'>Home</HomeLink>
			{ user ? (
				<button onClick={() => {
					//logout logic
					setUser(null)
				}}>logout</button>
			) : (
				<button>login</button>
			)}
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
