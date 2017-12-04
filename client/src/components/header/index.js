import React, { Component } from 'react';
import Address from './searchBar/address';
import SearchBox from './searchBar/search-box';
import LogIn from './searchBar/login';
import Cart from './mainMenu/cart';
import LogoBox from './mainMenu/logo-box';
import MainMenuBox from './mainMenu/main-menu-box';
import MenuButtonBox from './mainMenu/menu-button-box';

export default class Header extends Component {
    render() {
        return (
            <header>
                <div className="search-bar">
                    <div className="container">
                        <div className="row no-bg">
                            <Address />
                            <SearchBox />
                            <LogIn />
                        </div>
                    </div>
                </div>
                <div className="main-menu-bar">
                    <div className="container">
                        <div className="row">
                            <MenuButtonBox />
                            <LogoBox />
                            <MainMenuBox />
                            <Cart />
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}