import React, { Component } from 'react';

export default class SearchBox extends Component {
    render() {
        return (
            <div className="search-box">
                <form action="">
                    <div>
                        <input type="text" placeholder="Enter what you want to search" />
                        <button className="search-button glyphicon glyphicon-search" type="submit"></button>
                    </div>
                </form>
            </div>
        );
    }
}