import { React, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { FooterContainer, HeaderContainer, MainContainer, PageWrapper } from './AppStyles';
import Landing from './pages/Landing/Landing'
import Home from './pages/Home/Home'
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';

function App() {
	const [test, setTest] = useState()

	return (
		<PageWrapper>
				<Header />
				<NavBar />
			<MainContainer>
				main
				<Router>
					<Switch>
						<Route path='/' exact component={Landing} />
						<Route
							path='/home'
							exact
							render={() => <Home test={test} />}
						/>
					</Switch>
				</Router>
			</MainContainer>
				<Footer />
		</PageWrapper>
	);
}

export default App;
