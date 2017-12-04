import React, { Component } from 'react';

export default class Info extends Component {
    render() {
        return (
            <div className="col-md-3 col1 thong-tin">
                <div className="thong-tin1">
                    <a href="">Mua Online</a>
                    <a href="">Thanh Toán</a>
                    <a href="">Giao Hàng</a>
                </div>
                <div className="thong-tin2">
                    <a href="">Mua Trả Góp</a>
                    <a href="">Bảo Hành</a>
                    <a href="">Tuyển dụng</a>
                </div>
            </div>
        );
    }
}