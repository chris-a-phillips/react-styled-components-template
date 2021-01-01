import React, { useContext } from 'react';
import { UserContext } from '../../utils/UserContext';
import {
	HeaderContainer,
	HeaderWrapper,
	HomeLink,
	NavBar,
	NavLink,
} from './SCHeader';
import axios from 'axios';

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
			<HeaderContainer>
				<br />
				<HomeLink to='/home'>Home</HomeLink>
				{!user ? (
					<NavLink to='/login'>login</NavLink>
					) : (
						<NavLink to='/' onClick={logout}>
						logout
					</NavLink>
				)}
				{user ? user.email : null}
			</HeaderContainer>
			<NavBar>
				<NavLink to='/'>Landing Page</NavLink>
				<NavLink to='/dashboard'>Dashboard</NavLink>
				<NavLink to='/login'>Login</NavLink>
				<NavLink to='/profile'>Profile</NavLink>
			</NavBar>
		</HeaderWrapper>
	);
};

export default Header;
