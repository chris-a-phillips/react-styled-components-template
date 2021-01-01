import React, { useContext } from 'react';
import { UserContext } from '../../components/UserContext'

const Login = () => {
    const { user, setUser } = useContext(UserContext)

    return (
        <div>
            <h1>Login</h1>
                <button onClick={() => setUser('hello')}>change</button>
                {user}
        </div>
    );
};

export default Login;