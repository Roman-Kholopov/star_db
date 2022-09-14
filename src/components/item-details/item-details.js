import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import ErrorButton from '../error-button';

import './item-details.css';

const Record = ({ item, field, label }) => {
	return (
		<li className="list-group-item">
			<span className="term">{label}</span>
			<span>{item[field]}</span>
		</li>
	);
};

export {
	Record
};

export default class ItemDetails extends Component {

	swapiService = new SwapiService();

	state = {
		person: null,
		image: null
	};

	componentDidMount() {
		this.updateItem();
	}

	componentDidUpdate(prevProps) {
		if (this.props.itemId !== prevProps.itemId || 
			this.props.getData !== prevProps.getData ||
			this.props.getImageUrl !== prevProps.getImageUrl) {
			this.updateItem();
		}
	}

	updateItem() {
		const { itemId, getData } = this.props;
		if(!itemId) {
			return;
		}

		getData(itemId)
		.then(this.onItemLoaded)
		.catch(this.onError);
	}


	onItemLoaded = (item) => {
		const { getImageUrl } = this.props;
		
		this.setState({
			item,
			image: getImageUrl(item)
		})
	}

	onError = (err) => {
		this.setState({
			error: true,
			loading: false
		})
	}

	render() {

		// const { item, loading, error, hasError } = this.state;
		const { item, image } = this.state;


		// if(hasError) {
		// 	return <ErrorIndicator/>
		// }

		// const hasData = !(loading || error);


		// const spinner = loading ? <Spinner/> : null;
		// const content = !loading ? <PersonView person={person}/> : null;

		if(!item) {
			return <span>Select a person from a list</span>
		}

		// const { id, name, gender, birthYear, eyeColor } = this.state.item;
		const { name } = item;


		// const content = <PersonView person={this.state.person}/>;


		return (
			<div className="item-details card">
				{/* <Spinner/> */}
				{/* {spinner} */}
				{/* {content} */}
				<img className="item-image"
					// src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />
					src={image} />


				<div className="card-body">
					<h4>{name}</h4>
					<ul className="list-group list-group-flush">
						{
							React.Children.map(this.props.children, (child) => {
								{/* return <li>{idx}</li>; */}
								return React.cloneElement(child, { item });
							})
						}
						{/* {this.props.children} */}
						{/* <li className="list-group-item">
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
						</li> */}
					</ul>
					<ErrorButton/>
				</div>
			</div>
		)
	}
}

// const PersonView = (person) => {

// 	const { id, name, gender, birthYear, eyeColor } = person;

// 	return (
// 		<>
// 			<img className="person-image"
// 					src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />
// 					{/* src={`https://starwars-visualguide.com/assets/img/characters/1.jpg`} /> */}
// 					{/* https://starwars-visualguide.com/assets/img/characters/1.jpg */}
// 			<div className="card-body">
// 				<h4>{name}</h4>
// 				<ul className="list-group list-group-flush">
// 					<li className="list-group-item">
// 						<span className="term">Gender</span>
// 						<span>{gender}</span>
// 					</li>
// 					<li className="list-group-item">
// 						<span className="term">Birth Year</span>
// 						<span>{birthYear}</span>
// 					</li>
// 					<li className="list-group-item">
// 						<span className="term">Eye Color</span>
// 						<span>{eyeColor}</span>
// 					</li>
// 				</ul>
// 			</div>
// 		</>
// 	)
// }