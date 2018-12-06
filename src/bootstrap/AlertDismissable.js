import {Alert, Button} from "react-bootstrap";
import React from 'react';

export class AlertDismissable extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleDismiss = this.handleDismiss.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleAlert = this.handleAlert.bind(this);

        this.state = {
            show: true
        };
    }

    handleDismiss() {
        this.setState({show: false});
    }

    handleShow() {
        this.setState({show: true});
    }

    handleAlert() {
        alert("Show state: " + this.state.show);
    }

    render() {
        if (this.state.show) {
            return (
                <Alert bsStyle="danger" onDismiss={this.handleDismiss}>
                    <h4>Ошибка! Что то случилось!</h4>
                    <p>
                        Текст ужасной ошибки
                    </p>
                    <p>
                        <Button bsStyle="danger" onClick={this.handleAlert}>Нажмите на кнопку</Button>
                        <span> или </span>
                        <Button onClick={this.handleDismiss}>Спрятать ошибку</Button>
                    </p>
                </Alert>
            );
        }

        return <Button onClick={this.handleShow}>Show Alert</Button>;
    }
}