import styled from 'styled-components'

export const PageWrapper = styled.div`
	height: -moz-available; /* WebKit-based browsers will ignore this. */
	height: -webkit-fill-available; /* Mozilla-based browsers will ignore this. */
	height: fill-available;
	display: grid;
	grid-template-rows: auto 1fr auto;
	background-color: ${({ primaryColor }) =>
		primaryColor ? primaryColor : '#e9c46a'};
`;

export const HeaderContainer = styled.header``;

export const MainContainer = styled.main`
	/* height: 800px; */

`;

export const FooterContainer = styled.footer``