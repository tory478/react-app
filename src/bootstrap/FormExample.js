import {FormGroup, ControlLabel, FormControl, HelpBlock, Button} from "react-bootstrap";
import React from 'react';

export class FormExample extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleChange = this.handleChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            value: '',
            password: ''
        };
    }

    getValidationState(value) {
        //alert(value);
        const length = value.length;
        if (length > 10) return 'success';
        else if (length > 5) return 'warning';
        else if (length > 0) return 'error';
        return null;
    }

    handleChange(e) {
        this.setState({value: e.target.value});
    }

    handlePasswordChange(e) {
        this.setState({value: e.target.password});
    }

    onSubmit(e) {
        console.log('A name was submitted: ' + this.state.value);
        this.setState({value: ""});
        e.preventDefault();
    }

    render() {
        const valid = this.getValidationState(this.state.value) === 'success'
            && this.getValidationState(this.state.password) === 'success'
        return (
            <form onSubmit={this.onSubmit}>
                <h1>{this.state.value}</h1>
                <h1>{this.state.password}</h1>
                <FormGroup
                    controlId="formBasicText"
                    validationState={this.getValidationState(this.state.value)}

                >
                    <ControlLabel>Working example with validation</ControlLabel>
                    <FormControl
                        type="text"
                        value={this.state.value}
                        placeholder="Enter text"
                        onChange={this.handleChange}
                    />
                    <FormControl.Feedback/>
                    <HelpBlock>Validation is based on string length.</HelpBlock>
                </FormGroup>
                <FormGroup
                    controlId="formBasicText1"
                    validationState={this.getValidationState(this.state.password)}

                >
                    <ControlLabel>Working example with validation</ControlLabel>
                    <FormControl
                        type="text"
                        value={this.state.password}
                        placeholder="Enter text"
                        onChange={this.handlePasswordChange}
                    />
                    <FormControl.Feedback/>
                    <HelpBlock>Validation is based on string length.</HelpBlock>

                </FormGroup>
                <Button type="submit" disabled={!valid} onClick={this.onSubmit}>Submit</Button>
            </form>
        );
    }
}