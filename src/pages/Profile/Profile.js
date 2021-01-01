import React, { useContext } from 'react';
import { UserContext } from '../../utils/UserContext';

const Profile = () => {
    const { user } = useContext(UserContext);

    return (
        <div>
            <h1>Profile</h1>
        </div>
    );
};

export default Profile;