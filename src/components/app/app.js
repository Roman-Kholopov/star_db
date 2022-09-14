import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service';
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

	swapiService = new SwapiService();

	state = {
		showRandomPlanet: true,
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

		return (
			<ErrorBoundry>
				<SwapiServiceProvider value={this.swapiService}>
					<div className="stardb-app">
						<Header />

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