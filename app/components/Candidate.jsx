import React, { Component } from 'react';
import { string, number } from 'prop-types';
import CSSModules from 'react-css-modules';
import Styles from '../styles/candidate.css';

import Rating from 'react-star-rating-component';

class Candidate extends Component {
	constructor(props){
		super(props);
		this.state = {
			done: false,
		};
	}
	onAction(intent){
		if(intent === 'yes'){
			alert(`You said yes to ${this.props.name}`);
		}
		if(intent === 'no'){
			alert(`You said no to ${this.props.name}`);
		}
		this.setState({done: true});
	}
	render(){
		const { name, photo, rating } = this.props;
		const { done } = this.state;
		return !done &&
			<section styleName="container">
				<img src={`/app/images/${photo}`} styleName="image"/>
				<h1 styleName="name">{name}</h1>
				<div styleName="rating">
					<Rating
						name="rating"
						value={rating}
						starCount={5}
						editing={false}
					/>
				</div>
				<div styleName="intent">
					<button onClick={() => this.onAction('yes')}>Yes</button>
					<button onClick={() => this.onAction('no')}>No</button>
				</div>
			</section>;
	}
}

Candidate.propTypes = {
	name: string.isRequired,
	position: string.isRequired,
	formation_place: number.isRequired,
};

export default CSSModules(Candidate, Styles);