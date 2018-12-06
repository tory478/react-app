import React from 'react';
import {Avatar} from "./Avatar";
import "./Comment.css";
import {UserInfo} from "./UserInfo";
import {AlertDismissable} from "../bootstrap/AlertDismissable";
import {FormExample} from "../bootstrap/FormExample";



function formatDate(obj) {
    return obj.toLocaleString()
}

export class Comment extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            author: props.author,
            date: props.date
        };
        this.click = this.click.bind(this);
    }
    render() {
        return <div className="Comment">
            <UserInfo user={this.state.author}/>
            <div className="Comment-text">
                {this.state.text}
            </div>
            <div className="Comment-date" onClick={this.click}>
                {Comment.formatDate(this.state.date)}
            </div>
            /*<AlertDismissable/>
            <FormExample/>*/
        </div>
    }

    click() {
        let date = new Date();
        this.setState({
            date: date
        })
    }
    static formatDate(obj) {
        return obj.toLocaleString()
    }
}