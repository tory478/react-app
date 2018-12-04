import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import {Comment} from "./component/Comment";

const
    value = {
        avatarUrl: "https://dh.img.tyt.by/552x368c/n/ekonomika/04/1/dengi_pensiya_zarplata_monety_valyuta.jpg",
        name: "sample",
        text: "text"
    };

ReactDOM
    .render(
        <Comment author={value} date={new Date()}/>,
        document
            .getElementById(
                'root'
            ))
;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker
    .register();
