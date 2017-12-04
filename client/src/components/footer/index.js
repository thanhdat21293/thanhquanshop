import React, { Component } from 'react';
import Address from './address';
import Info from './info';
import Logo from './logo';
import ReceiveMail from './receive-mail';

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="container">
                    <div className="row">
                        <Logo />
                        <Address />
                        <Info />
                        <ReceiveMail />
                    </div>
                </div>
            </footer>
        );
    }
}