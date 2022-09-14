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

		const { item, image } = this.state;

		if(!item) {
			return <span>Select a person from a list</span>
		}

		const { name } = item;

		return (
			<div className="item-details card">
				<img className="item-image"
					src={image} />


				<div className="card-body">
					<h4>{name}</h4>
					<ul className="list-group list-group-flush">
						{
							React.Children.map(this.props.children, (child) => {
								return React.cloneElement(child, { item });
							})
						}
					</ul>
					<ErrorButton/>
				</div>
			</div>
		)
	};
};