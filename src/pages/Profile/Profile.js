import React, { useContext, useEffect } from 'react';
import { UserContext } from '../../utils/UserContext';
import axios from 'axios';

const Profile = () => {
    const { user, setUser } = useContext(UserContext);

	useEffect(() => {
		// user condition is for testing purposes
		if (user && (user.username !== 'spongebob')) {
			const personalURL = 'http://localhost:8000/users/me/';
			axios({
				method: 'get',
				url: personalURL,
				headers: {
					Authorization: `Token ${user.token}`,
				},
			}).then((res) => {
				console.log(res);
				setUser({
                    ...user,
                    id: res.data.id
				});
			});
			// eslint-disable-next-line react-hooks/exhaustive-deps
		}
	}, []);

	return (
		<div>
			<h1>Profile</h1>
			{/* quick way to see user without having to console log */}
			{JSON.stringify(user)}
		</div>
	);
};

export default Profile;
