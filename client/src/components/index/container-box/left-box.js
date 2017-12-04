import React, { Component } from 'react';

export default class LeftBox extends Component {
    render() {
        return (
            <div className="col-md-9 no-padding">
                <div id="carousel-example-generic" data-ride="carousel" className="carousel1 slide">
                    <div className="carousel-inner">
                        <div className="item active">
                            <a href="">
                                <img src="/images/b3.jpg" alt="loi cmnr"/>
                            </a>
                        </div>
                        <div className="item">
                            <a href="">
                                <img src="/images/b2.jpg" alt="loi cmnr"/>
                            </a>
                        </div>
                        <div className="item">
                            <a href="">
                                <img src="/images/b1.jpg" alt="loi cmnr"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}