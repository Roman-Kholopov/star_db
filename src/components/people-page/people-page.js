import React, { Component } from "react";
import PersonDetails from '../person-details';
import ItemList from "../item-list";
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapi-service";
import Row from "../row";
import ErrorBoundry from "../error-boundry";

import './people-page.css';

export default class PeoplePage extends Component {

    swapiService = new SwapiService()

    state = {
        selectedPerson: 3
    }

    onPersonSelected = (id) => {
		this.setState({
			selectedPerson: id
		})
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
                // renderItems={({ name, gender, birthYear }) => (
                //             `${name} (${gender}, ${birthYear})`)}
            >
                {(i) => (
                    `${i.name} (${i.birthYear})`
                )}

            </ItemList>
        )

        const personDetails = (
            <ErrorBoundry>
                <PersonDetails personId={selectedPerson}/>
            </ErrorBoundry>
        )

        return (
            <Row left={itemList} right={personDetails}/>
        );
    }
}