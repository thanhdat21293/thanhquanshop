import React, { Component } from 'react';

export default class ReceiveMail extends Component {
    render() {
        return (
            <div className="col-md-4 col-xs-12">
                <form action="">
                    <label htmlFor=""></label>
                    <input type="text" placeholder="Địa chỉ email của bạn"/>
                    <button>Gửi</button>
                </form>
                <div className="facebook"></div>
            </div>
        );
    }
}