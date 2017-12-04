import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class MainMenuBox extends Component {
    render() {
        return (
            <div className="main-menu-box">
                <nav className="main-menu">
                    <ul>
                        <li className="dkdn">
                            <span>ĐĂNG KÍ - ĐĂNG NHẬP</span>
                            <ul className="logged-box dkdn-box">
                                <li></li>
                                <li></li>
                            </ul>
                        </li>
                        <li className="usn"></li>
                        <li className="mm-tc">
                            <Link to={'/'}>Trang Chủ</Link>
                        </li>
                        <li className="mm-dt">
                            <Link to={'/danhsach'}>Điện Thoại</Link>
                            <div className="menu-dropdown menu-dropdown1">
                                <ul>
                                    <li>Hãng Sản Xuất</li>
                                    <li>Apple</li>
                                    <li>Sam Sung</li>
                                    <li>Nokia</li>
                                </ul>
                                <ul>
                                    <li>Giá Tiền</li>
                                    <li>1m</li>
                                    <li>2m</li>
                                </ul>
                                <ul>
                                    <li>Loại Điện Thoại</li>
                                    <li>IOS</li>
                                    <li>Android</li>
                                </ul>
                            </div>
                        </li>
                        <li className="mm-pk">
                        <Link to={'/phukien'}>Phụ Kiện</Link>
                            <div className="menu-dropdown menu-dropdown2">
                                <ul>
                                    <li>Phụ kiện 1</li>
                                    <li>Phụ kiện 2</li>
                                    <li>Phụ kiện 3</li>
                                </ul>
                                <ul>
                                    <li>Phụ kiện 4</li>
                                    <li>Phụ kiện 5</li>
                                    <li>Phụ kiện 6</li>
                                </ul>
                            </div>
                        </li>
                        <li className="mm-tt">
                            <Link to={'/tintuc'}>Tin Tức</Link>
                        </li>
                        <li className="mm-lh">
                            <Link to={'/lienhe'}>Liên Hệ</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}