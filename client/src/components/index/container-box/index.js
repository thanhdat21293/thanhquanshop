import React, { Component } from 'react';
import RightBox from './right-box';
import LeftBox from './left-box';

export default class ContainerBox extends Component {
    render() {
        return (
            <div className="container banner-box">
                <div className="row">
                    <LeftBox />
                    <RightBox />
                </div>
            </div>
        );
    }
}