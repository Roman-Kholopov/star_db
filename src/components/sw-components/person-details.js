import React from "react";
import { ItemDetails, Record } from "../item-details";
import { withSwapiService } from "../hoc-helpers";


// const PersonDetails = ({ itemId, getData, getImageUrl }) => {
const PersonDetails = (props) => {

    return (
        // <ItemDetails 
        //     itemId={itemId}
        //     getData={getData}
        //     getImageUrl={getImageUrl}>
        <ItemDetails {...props}>
            <Record field="gender" label="Gender"/>
            <Record field="eyeColor" label="Eye Color"/>
        </ItemDetails>
    );
};

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPerson,
        getImageUrl: swapiService.getPersonImage
    }
}

export default withSwapiService(PersonDetails, mapMethodsToProps);