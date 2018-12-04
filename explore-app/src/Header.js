import React from "react"
import {FormGroup, Form, FormControl, ControlLabel, PageHeader, ButtonToolbar, Button} from 'react-bootstrap';

export class Header extends React.Component{
    render() {
        return (
            <div>
                <PageHeader>
                    Daily Counts
                </PageHeader>
                <h2> Calories: { this.props.userData.calories }</h2>
                <h2> Protein: { this.props.userData.protein } </h2>
                <h2> Carbohydrates: { this.props.userData.carbohydrates }</h2>
                <h2> Fat: { this.props.userData.fats }</h2>            
            </div>
        )
    }
}

          