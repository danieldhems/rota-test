import React from 'react';
import { arrayOf, object } from 'prop-types';
import CSSModules from 'react-css-modules';

import Styles from '../styles/candidate-stack.css';
import Candidate from 'components/Candidate';

const data = require('../candidates.json');

class CandidateStack extends React.Component {
	render() {
		return (
			<div styleName="container">
				{data.map( (d,i) => (
					<Candidate {...d} key={`candidate-${i}`} index={i} />
				))}
			</div>
		);
	}
}

CandidateStack.propTypes = {
	children: arrayOf(object).isRequired,
};

export default CSSModules(CandidateStack, Styles);
