import React, { useState, useContext } from 'react';
import { UserContext } from '../../utils/UserContext'
import { login } from '../../utils/UserLogic'
import { Redirect } from 'react-router-dom';
import axios from 'axios'
import {
	FormInput,
	FormLabel,
	LoginForm,
	LoginH1,
	LoginPage,
	LoginPageButton,
	SubmitButton,
} from './SCLogin';

const Login = () => {
    const { user, setUser } = useContext(UserContext)
    const [redirect, setRedirect] = useState(false);
    const [newUser, setNewUser] = useState(false)
    const [error, setError] = useState('');
    const [token, setToken] = useState(null)
    const [credentials, setCredentials] = useState({
        name: '',
        email: '',
        password: '',
        re_password: '',
    });

    const handleChange = (event) => {
        event.preventDefault();
        setCredentials({
            ...credentials,
            [event.target.name]: event.target.value,
        });
    };

    const handleClick = () => {
        setNewUser(!newUser);
        setError('');
    };

    const signUpURL = 'http://localhost:8000/users/';
    const signInURL = 'http://localhost:8000/token/login/';

    const handleSubmit = (event) => {
        if (!newUser) {
            event.preventDefault();
            axios({
                method: 'post',
                url: signInURL,
                data: credentials,
            })
                .then((res) => {
                    if (res.data.auth_token) {
                        setToken(res.data.auth_token);
                        setUser(credentials.email);
                        setRedirect(true);
                    } else {
                        setError(res.data);
                        throw new Error('There was an error signing in');
                    }
                    return res;
                })
                .catch(setError('There was an error signing in'));
        } else if (newUser) {
            event.preventDefault();
            axios({
                method: 'post',
                url: signUpURL,
                data: credentials,
            })
                .then((res) => {
                    setUser('');
                    setNewUser(false);
                })
                .catch(setError('There was an error signing up'));
        }
    };

    if (redirect) {
        return <Redirect to='/profile' />;
    }

    return (
		<div>
			<h1>Login</h1>
			<button
				onClick={async () => {
					const user = await login();
					setUser(user);
				}}>
				change
			</button>
			<LoginPage>
				{!newUser ? (
					<LoginForm onSubmit={handleSubmit}>
						<LoginH1>Sign In</LoginH1>
						<FormInput
							type='email'
							name='email'
							placeholder='name@email.com'
							value={credentials.email}
							onChange={handleChange}></FormInput>
						<FormLabel htmlFor='email'>Email</FormLabel>
						<FormInput
							type='password'
							name='password'
							placeholder='Enter Password'
							value={credentials.password}
							onChange={handleChange}></FormInput>
						<FormLabel htmlFor='password'>Password</FormLabel>
						<SubmitButton>Log In</SubmitButton>
						<LoginPageButton onClick={handleClick}>
							Need A New Profile?
						</LoginPageButton>
						{error}
					</LoginForm>
				) : (
					<LoginForm onSubmit={handleSubmit}>
						<LoginH1>Sign Up</LoginH1>
						<FormInput
							type='text'
							name='name'
							placeholder='Enter Name'
							value={credentials.name}
							onChange={handleChange}></FormInput>
						<FormLabel htmlFor='name'>Name</FormLabel>
						<FormInput
							type='email'
							name='email'
							placeholder='name@email.com'
							value={credentials.email}
							onChange={handleChange}></FormInput>
						<FormLabel htmlFor='email'>Email</FormLabel>
						<FormInput
							type='password'
							name='password'
							placeholder='Enter Password'
							value={credentials.password}
							onChange={handleChange}></FormInput>
						<FormLabel htmlFor='password'>Password</FormLabel>
						<FormInput
							type='password'
							name='re_password'
							placeholder='Re-Enter Password'
							value={credentials.re_password}
							onChange={handleChange}></FormInput>
						<FormLabel htmlFor='retypePassword'>
							Retype Password
						</FormLabel>
						<SubmitButton>Register</SubmitButton>
						<LoginPageButton onClick={handleClick}>
							Already Have A Profile?
						</LoginPageButton>
						{error}
					</LoginForm>
				)}
                <button onClick={() => setRedirect(true)}>test redirect</button>
			</LoginPage>
		</div>
	);
};

export default Login;