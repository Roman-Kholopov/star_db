import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './person-details.css';

export default class PersonDetails extends Component {

	swapiService = new SwapiService();

	state = {
		person: null,
		loading: true,
		error: false
	};

	componentDidMount() {
		console.log('componentDidMount');
		this.updatePerson();
	}

	componentDidUpdate(prevProps) {
		console.log('componentDidUpdate');
		console.log(prevProps);

		if (this.props.personId !== prevProps.personId) {
			this.updatePerson();
		}
	}

	onPersonLoaded = (person) => {
		console.log('onPersonLoaded');
		
		this.setState({
			person,
			loading: false
		})

		// this.setState(( state ) => {
		// 	return {
		// 		person,
		// 		loading: !state.loading
		// 	}
		// })

		console.log(this.state.loading)
	}

	onError = (err) => {
		console.log('onError');

		this.setState({
			error: true,
			loading: false
		})
	}

	updatePerson() {
		console.log('updatePerson');
		const { personId } = this.props;
		console.log(personId);
		if(!personId) {
			return;
		}

		this.swapiService
			.getPerson(personId)
			.then(this.onPersonLoaded)
			.catch(this.onError);
	}

	render() {

		const { person, loading, error } = this.state;

		// const hasData = !(loading || error);


		const spinner = loading ? <Spinner/> : null;
		// const content = !loading ? <PersonView person={person}/> : null;

		if(!person) {
			return <span>Select a person from a list</span>
		}

		const { id, name, gender, birthYear, eyeColor } = this.state.person;

		const content = <PersonView person={this.state.person}/>;


		return (
			<div className="person-details card">
				{/* <Spinner/> */}
				{/* {spinner} */}
				{/* {content} */}
				<img className="person-image"
					src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />

				<div className="card-body">
					<h4>{name}</h4>
					<ul className="list-group list-group-flush">
						<li className="list-group-item">
							<span className="term">Gender</span>
							<span>{gender}</span>
						</li>
						<li className="list-group-item">
							<span className="term">Birth Year</span>
							<span>{birthYear}</span>
						</li>
						<li className="list-group-item">
							<span className="term">Eye Color</span>
							<span>{eyeColor}</span>
						</li>
					</ul>
				</div>
			</div>
		)
	}
}

const PersonView = (person) => {

	const { id, name, gender, birthYear, eyeColor } = person;

	return (
		<>
			<img className="person-image"
					src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />
					{/* src={`https://starwars-visualguide.com/assets/img/characters/1.jpg`} /> */}
					{/* https://starwars-visualguide.com/assets/img/characters/1.jpg */}
			<div className="card-body">
				<h4>{name}</h4>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">
						<span className="term">Gender</span>
						<span>{gender}</span>
					</li>
					<li className="list-group-item">
						<span className="term">Birth Year</span>
						<span>{birthYear}</span>
					</li>
					<li className="list-group-item">
						<span className="term">Eye Color</span>
						<span>{eyeColor}</span>
					</li>
				</ul>
			</div>
		</>
	)
}