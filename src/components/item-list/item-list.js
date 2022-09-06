import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service'
import Spinner from '../spinner';

import './item-list.css';

export default class ItemList extends Component {

	state = {
		// peopleList: null
		itemList: null
	}

	componentDidMount() {

		const { getData } = this.props;

		getData()
		// this.swapiService
		// 	.getAllPeople()
			.then((itemList) => {
				// console.log(peopleList);
				this.setState({
					itemList
				})
			})
	}

	renderItems(arr) {
		return arr.slice(0, 5).map((item) => {
			const { id } = item;

			// const label = this.props.renderItems(item);
			const label = this.props.children(item);
			return (
				<li className="list-group-item"
					key={id}
					onClick={() => this.props.onItemSelected(id)}>
					{label}
				</li>
			)
		})
	}

	render() {

		const { itemList } = this.state;

		if(!itemList) {
			return <Spinner/>
		}

		const items = this.renderItems(itemList);

		return (
			<ul className="item-list list-group">
				{items}
			</ul>
		);
	}
}