import React, { Component } from "react";
import PersonDetails from '../person-details';
import ItemList from "../item-list";
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapi-service";

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

        return (
            <div className="row mb2">
                <div className="col-md-6">
                    <ItemList 
                        onItemSelected={this.onPersonSelected}
						getData={this.swapiService.getAllPeople}
                        />
                </div>
                <div className="col-md-6">
                    <PersonDetails personId={selectedPerson}/>
                </div>
            </div>
        )
    }
}