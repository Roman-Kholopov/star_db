import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';
import ErrorBoundry from '../error-boundry';
import {
	PersonDetails,
    PlanetDetails,
    StarshipDetails,
    PersonList,
    PlanetList,
    StarchipList
} from "../sw-components";
import { SwapiServiceProvider } from '../swapi-service-context';

import './app.css';

export default class App extends Component {

	state = {
		showRandomPlanet: true,
		hasError: false,
		swapiService: new DummySwapiService()
	};

	onServiceChange = () => {
		this.setState(({swapiService}) => {
			
			const Servise = swapiService instanceof SwapiService ? DummySwapiService : SwapiService;

			console.log(`switched to ${Servise.name}`);

			return {
				swapiService: new Servise(),
			}
		})
	}

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

		const {
			getPerson,
			getStarship,
			getPersonImage,
			getAllpeople,
			getAllPlanets } = this.state.swapiService

		return (
			<ErrorBoundry>
				<SwapiServiceProvider value={this.state.swapiService}>
					<div className="stardb-app">
						<Header onServiceChange={this.onServiceChange}/>

						<PersonDetails itemId={11}/>

						<PlanetDetails itemId={5}/>

						<StarshipDetails itemId={9}/>
			
						<PersonList/>

						<PlanetList/>

						<StarchipList/>
			
					</div>
				</SwapiServiceProvider>
			</ErrorBoundry>
		  );
	}
}