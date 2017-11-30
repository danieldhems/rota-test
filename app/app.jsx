import React from 'react';
import CSSModules from 'react-css-modules';
import Styles from './styles/app.css';

import CandidateStack from 'components/CandidateStack';

const App = () => (
	<div styleName="container">
		<h1 styleName="title">Rota</h1>
		<CandidateStack />
	</div>
);

export default CSSModules(App, Styles);
