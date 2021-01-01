import React, { useContext } from 'react';
import { UserContext } from '../../components/UserContext';

const Profile = () => {
    const { user } = useContext(UserContext);

    return (
        <div>
            <h1>Profile</h1>
            {user}
        </div>
    );
};

export default Profile;