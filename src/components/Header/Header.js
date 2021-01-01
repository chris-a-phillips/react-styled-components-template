import React, { useContext } from 'react';
import { UserContext } from '../../utils/UserContext';
import { HeaderWrapper, HomeLink, NavBar, NavLink } from './SCHeader';
import axios from 'axios'

const Header = () => {
	const { user, setUser } = useContext(UserContext);
	const logout = () => {
		setUser(null);
		const logoutURL = 'http://localhost:8000/token/logout/';
		
		axios({
			method: 'post',
			url: logoutURL,
			headers: {
				Authorization: `Token ${user.token}`,
			},
		});
	};

	console.log(user);

	return (
		<HeaderWrapper>
			<h1>Header</h1>
			<HomeLink to='/'>Landing Page</HomeLink>
			<br />
			<HomeLink to='/home'>Home</HomeLink>
			{!user ? (
				<NavLink to='/login'>login</NavLink>
			) : (
				<NavLink to='/' onClick={logout}>logout</NavLink>
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
