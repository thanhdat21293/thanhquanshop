import React, { Component } from 'react';

export default class LogIn extends Component {
    render() {
        return (
            <div className="sign logged display-none">
                <span id="login"> User Name</span>
                <ul className="logged-box">
                    <li>Function 1</li>
                    <li>Function 2</li>
                    <li>Function 3</li>                   
                </ul>
            </div>
        );
    }
}