import { React, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MainContainer, PageWrapper } from './AppStyles';
import Landing from './pages/Landing/Landing'
import Dashboard from './pages/Dashboard/Dashboard'
import Login from './pages/Login/Login'
import Home from './pages/Home/Home'
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
	const [test, setTest] = useState()

	return (
		<PageWrapper>
				<Router>
				<Header />
			<MainContainer>
				main
					<Switch>
						<Route
							path='/'
							exact 
							component={Landing} />
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
					</Switch>
			</MainContainer>
				<Footer />
				</Router>
		</PageWrapper>
	);
}

export default App;
