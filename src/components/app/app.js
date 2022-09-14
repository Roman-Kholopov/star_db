import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';
import ErrorBoundry from '../error-boundry';
import { PeoplePage, PlanetsPage, StarshipsPage } from '../pages';

import { SwapiServiceProvider } from '../swapi-service-context';

import './app.css';

export default class App extends Component {

	state = {
		swapiService: new SwapiService()
	};

	onServiceChange = () => {
		this.setState(({swapiService}) => {
			const Servise = swapiService instanceof SwapiService ? DummySwapiService : SwapiService;

			return {
				swapiService: new Servise(),
			}
		})
	}

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

		return (
			<ErrorBoundry>
				<SwapiServiceProvider value={this.state.swapiService}>
					<div className="stardb-app">
						<Header onServiceChange={this.onServiceChange}/>

						<RandomPlanet/>

						<PeoplePage />

						<PlanetsPage />

						<StarshipsPage />

					</div>
				</SwapiServiceProvider>
			</ErrorBoundry>
		  );
	}
}