import React, { useContext } from 'react';
import { UserContext } from '../../components/SharedContext'

const Login = () => {
    // const user = useContext(UserContext)
    const { userInfo, SetUser } = useContext(UserContext);
    console.log(userInfo)
    return (
        <div>
            <h1>Login</h1>
            {/* {user.name} */}

        </div>
    );
};

export default Login;