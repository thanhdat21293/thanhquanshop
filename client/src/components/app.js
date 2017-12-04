import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import BaiViet from './bai-viet';
import ChiTiet from './chi-tiet';
import DanhSach from './danh-sach';
import GioHang from './gio-hang';
import HomePage from './index';
import KhuyenMai from './khuyen-mai';
import LienHe from './lien-he';
import PhuKien from './phu-kien';
import Staff from './staff';
import TinTuc from './tin-tuc';
import User from './user';

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header></Header>
                    <Switch>
                        <Route exact path="/baiviet" component={BaiViet} />
                        <Route exact path="/chitiet" component={ChiTiet} />
                        <Route exact path="/danhsach" component={DanhSach} />
                        <Route exact path="/giohang" component={GioHang} />
                        <Route exact path="/tintuc" component={TinTuc} />
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/khuyenmai" component={KhuyenMai} />
                        <Route exact path="/lienhe" component={LienHe} />
                        <Route exact path="/phukien" component={PhuKien} />
                        <Route exact path="/staff" component={Staff} />
                        <Route exact path="/user" component={User} />
                    </Switch>
                    <Footer></Footer>
                </div>
            </BrowserRouter>
        );
    }
}