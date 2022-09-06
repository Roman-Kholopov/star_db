import React, { Component } from "react";
import PersonDetails from '../person-details';
import ItemList from "../item-list";
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapi-service";
import Row from "../row";

import './people-page.css';

export default class PeoplePage extends Component {

    swapiService = new SwapiService()

    state = {
        selectedPerson: 3,
        hasError: false
    }

    componentDidCatch(error, info) {
        debugger;
        this.setState({hasError: true});
    }

    onPersonSelected = (id) => {
		this.setState({
			selectedPerson: id
		})
		// console.log(id);

		console.log(this.state.selectedPerson);
	}

    render() {

        const { selectedPerson, hasError } = this.state;

        if(hasError) {
			return <ErrorIndicator/>
		}

        const itemList = (
            <ItemList 
                onItemSelected={this.onPersonSelected}
                getData={this.swapiService.getAllPeople}
                renderItems={({ name, gender, birthYear }) => (
                            `${name} (${gender}, ${birthYear})`)}/>
        )

        const personDetails = (
            <PersonDetails personId={selectedPerson}/>
        )

        return (
            <Row left={itemList} right={personDetails}/>
        );
    }
}