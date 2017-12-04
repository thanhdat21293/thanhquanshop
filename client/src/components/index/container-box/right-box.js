import React, { Component } from 'react';

export default class LeftBox extends Component {
    render() {
        return (
            <div className="col-md-3 news-box trangchu">
                <a href="">
                    <img src="images/news1.jpg" alt=""/>
                    <p>iPhone 6 32GB chính thức lên kệ tại TQSP</p>
                    <span>28/03/2017</span>
                </a>
                <a href="">
                    <img src="images/news2.jpg" alt=""/>
                    <p>iPhone 6 32GB chính thức lên kệ tại TQSP</p>
                    <span>28/03/2017</span>
                </a>
                <a href="">
                    <img src="images/news3.jpg" alt=""/>
                    <p>iPhone 6 32GB chính thức lên kệ tại TQSP</p>
                    <span>28/03/2017</span>
                </a>
                <a href="" className="more">More</a>
            </div>
        );
    }
}