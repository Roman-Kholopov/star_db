import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import ErrorButton from '../error-button';
import ErrorIndicator from '../error-indicator';
import PeoplePage from '../people-page';
import SwapiService from '../../services/swapi-service';
import Row from '../row';

import './app.css';

export default class App extends Component {

	swapiService = new SwapiService();

	state = {
		showRandomPlanet: true,
		// selectedPerson: 5, // Это исправить !!!
		// selectedPerson: null,
		hasError: false
	};

	toggleRandomPlanet = () => {
		this.setState((state) => {
		return {
			showRandomPlanet: !state.showRandomPlanet
		}
		});
	};

	onPersonSelected = (id) => {
		this.setState({
			selectedPerson: id
		})
		// console.log(id);

		console.log(this.state.selectedPerson);
	}

	componentDidCatch() {
		console.log('componentDidCatch');
		this.setState({hasError: true});
	}

  	render() {

		if(this.state.hasError) {
			return <ErrorIndicator/>
		}

		const { showRandomPlanet, selectedPerson } = this.state;

		const planet = showRandomPlanet ?
		<RandomPlanet/> :
		null;

		const { getPerson,
				getStarship,
				getPersonImage,
				getStarshipImage } = this.swapiService;

		const personDetails = (
			<ItemDetails 
				itemId={11}
				getData={getPerson}
				getImageUrl={getPersonImage}
				/>
		)

		const starshipDetails = (
			<ItemDetails 
				itemId={5}
				getData={getStarship}
				getImageUrl={getStarshipImage}
				/>
		)

		return (
			<div className="stardb-app">
				<Header />
					<Row
						left={personDetails}
						right={starshipDetails}
					/>
				{/* { planet }

				<div className="row mb2 button-row">
					<button
						className="toggle-planet btn btn-warning btn-lg"
						onClick={this.toggleRandomPlanet}>
						Toggle Random Planet
					</button>
					<ErrorButton />
				</div>

				<PeoplePage/> */}

				{/* <div className="row mb2">
					<div className="col-md-6">
						<ItemList onItemSelected={this.onPersonSelected}
							getData={this.swapiService.getAllPlanets}
							renderItems={(item) => (<span>{item.name}<button>!</button></span>)}/>

					</div>
					<div className="col-md-6">
						<PersonDetails personId={selectedPerson}/>
					</div>
				</div>

				<div className="row mb2">
					<div className="col-md-6">
						<ItemList onItemSelected={this.onPersonSelected}
							getData={this.swapiService.getAllStarships}
							renderItems={(item) => item.name}/>

					</div>
					<div className="col-md-6">
						<PersonDetails personId={selectedPerson}/>
					</div>
				</div> */}
			</div>
		);
	}
}