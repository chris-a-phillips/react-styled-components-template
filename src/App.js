import { React, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MainContainer, PageWrapper } from './AppStyles';
import Landing from './pages/Landing/Landing';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { UserContext } from './components/SharedContext';
import './App.css';

function App() {
	const [test, setTest] = useState();

	return (
		<PageWrapper>
			<Router>
				<UserContext.Provider value={UserContext}>
					<Header />
					<MainContainer>
						main
						<Switch>
							<Route path='/' exact component={Landing} />
							<Route
								path='/home'
								exact
								render={() => <Home test={test} />}
							/>
							<Route
								path='/dashboard'
								exact
								render={() => <Dashboard test={test} />}
							/>
							<Route
								path='/login'
								exact
								render={() => <Login test={test} />}
							/>
							<Route
								path='/profile'
								exact
								render={() => <Profile test={test} />}
							/>
						</Switch>
					</MainContainer>
					<Footer />
				</UserContext.Provider>
			</Router>
		</PageWrapper>
	);
}

export default App;
