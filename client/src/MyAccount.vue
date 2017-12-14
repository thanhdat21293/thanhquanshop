<template>
  <section class="user-account container"><!-- body -->
    <div class="row mot-hang">
      <a class="big-title" href="">QUẢN LÝ TÀI KHOẢN</a>
      <span></span>
    </div>
    <div class="row">
      <aside class="list-menu-box col-md-3">
        <ul>
          <li class="menu-box">
            <span class="title-list sap-xep-title">TÀI KHOẢN THÀNH VIÊN</span>
            <ul class="sap-xep">
              <li class=" onclick list-group-default" showSmallTabs="user-info-default"><span class="special">Thông tin tài khoản</span>
              </li>
              <li class=" onclick" showSmallTabs="security"><span class="special">Bảo mật và mật khẩu</span></li>
              <li class=" onclick" showSmallTabs="recent"><span class="special">Hoạt động gần đây</span></li>
              <li class=" onclick" showSmallTabs="order"><span class="special">Lịch sử giao dịch</span></li>
            </ul>
          </li>
        </ul>
      </aside>
      <article class="member account-content col-md-9">
        <div class="account-information tab">
          <div class="user-info-default sm-tab">
            <div>
              <div class="tab-title">
                <h3>Thông tin cơ bản</h3>
              </div>
              <div>
                <div class="sm-tab-title">
                  <span>Thông tin cá nhân</span>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <table class="table table-bordered">
                      <tr>
                        <td>Tên đăng nhập</td>
                        <td>username</td>
                      </tr>

                      <tr>
                        <td>Ngày sinh</td>
                        <td>date</td>
                      </tr>
                      <tr>
                        <td>Giới tính</td>
                        <td>gender</td>
                      </tr>
                    </table>
                  </div>
                </div>
                <div class="row">
                  <div class="address-textarea col-md-6">
                    <div class="sm-tab-title">
                      <span>Địa chỉ nhận hàng</span>
                    </div>
                    <textarea disabled rows="3" class="" placeholder="oldAdress"></textarea>
                  </div>
                </div>
              </div>
              <div>
                <button class="btn btn-primary customize-button">Chỉnh sửa</button>
              </div>
            </div>
          </div>
          <div class="user-info-customize sm-tab">
            <div>
              <div class="tab-title">
                <h3>Thay đổi thông tin cá nhân</h3>
              </div>
              <div>
                <form action="" class="">
                  <div class="form-group row">
                    <div class="col-md-6">
                      <label for="memberName">Tên hiển thị</label>
                      <input id="memberName" type="text" class="form-control" name="memberName"
                             placeholder="memberName">
                    </div>
                  </div>
                  <div class="form-group birth-container row">
                    <div class="birth-item col-md-2">
                      <label for="memberDayOfBirth">Sinh Ngày</label>
                      <select id="memberDayOfBirth" class="form-control">
                      </select>
                    </div>
                    <div class="birth-item col-md-2">
                      <label for="memberMonthOfBirth">Tháng</label>
                      <select id="memberMonthOfBirth" class="form-control">
                      </select>
                    </div>
                    <div class="birth-item col-md-2">
                      <label for="memberYearOfBirth">Năm</label>
                      <select id="memberYearOfBirth" class="form-control">
                      </select>
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="gender-item col-md-2">
                      <label for="memberGender">Giới tính</label>
                      <select id="memberGender" class="form-control">
                        <option>Nam</option>
                        <option>Nữ</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="address-textarea col-md-6">
                      <div class="sm-tab-title">
                        <span>Địa chỉ nhận hàng</span>
                      </div>
                      <textarea rows="3" class="" placeholder="oldAdress"></textarea>
                    </div>
                  </div>
                  <div class="form-group">
                    <button type="submit" class="btn btn-primary">Cập nhật</button>
                    <button type="button" class="btn btn-default customize-cancel-button">Bỏ qua</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="user-security tab">
          <div class="security sm-tab">
            <div>
              <div class="tab-title">
                <h3>Bảo Mật</h3>
              </div>
              <div class="sm-tab-title">
                <span>Thông tin bảo mật</span>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <table class="table table-bordered">
                    <tr>
                      <td>
                        userName
                      </td>
                      <td>

                      </td>
                    </tr>
                    <tr>
                      <td>email</td>
                      <td>
                        <span data-toggle="modal" data-target="#fixEmail" class="fix fixEmail">Sửa</span>
                      </td>
                    </tr>
                    <tr>
                      <td>userPhoneNumber</td>
                      <td>
                        <span data-toggle="modal" data-target="#fixPhoneNumber" class="fix fixPhoneNumber">Sửa</span>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
            <div>
              <div class="sm-tab-title">
                <span>Mật khẩu</span>
              </div>
              <div class="form-group">
                <span>Mật khẩu chưa được thay đổi</span>
              </div>
              <div>
                <button type="button" class="btn btn-primary changePasswordButton">Thay đổi mật khẩu</button>
              </div>
            </div>
          </div>
          <div class="password-customize sm-tab">
            <div class="tab-title">
              <h3>Đổi Mật Khẩu</h3>
            </div>
            <div class="sm-tab-title">
              <span>Tài khoản</span>
            </div>
            <div>
              <form action="" class="">
                <div class="curEmail-container row">
                  <p class="form-control-static col-md-6">Tên đăng nhập</p>
                </div>
                <div class="form-group row">
                  <div class="col-md-6">
                    <label for="UPassword">Mật Khẩu cũ</label>
                    <input id="UPassword" type="password" name="UPass" placeholder="Nhập Mật Khẩu cũ"
                           class="form-control">
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-md-6">
                    <label for="newUPassword">Mật Khẩu mới</label>
                    <input id="newUPassword" type="password" name="newUPass" placeholder="Nhập mật khẩu mới"
                           class="form-control">
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-md-6">

                    <label for="confirmNewPass">Nhập lại Mật khẩu mới</label>
                    <input id="confirmNewPass" type="password" name="newConfirm" placeholder="Nhập lại mật khẩu mới"
                           class="form-control">
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-md-6">
                    <button type="submit" class="btn btn-primary">Thay Đổi Mật Khẩu</button>
                    <button type="button" class="btn btn-default cancelChangePassBtn">Bỏ Qua</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="recent-activities tab">
          <div class="recent sm-tab">
            <div class="tab-title">
              <h3>Xem lịch sử hoạt động của tài khoản</h3>
            </div>
            <div>
              <table class="table table-bordered table-hover">
                <tr>
                  <th>#</th>
                  <th>Mô tả</th>
                  <th>Ngày</th>
                </tr>
                <tr>
                  <td>1</td>
                  <td>descripe1</td>
                  <td>date1</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>descripe2</td>
                  <td>date2</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>descripe3</td>
                  <td>date3</td>
                </tr>

              </table>
            </div>
          </div>
        </div>
        <div class="order-history tab">
          <div class="order sm-tab">
            <div class="tab-title">
              <h3>Lịch sử đơn hàng và giao dịch</h3>
            </div>
            <div class="sm-tab-title">
              <span>Tìm kiếm</span>
            </div>
            <div>
              <form class="form-inline">
                <div class="form-group-container">
                  <div class="form-group">
                    <label for="fromDate">Xem từ</label>
                    <input id="fromDate" type="datetime" name="fromDate" class="form-control">
                  </div>
                  <div class="form-group">
                    <label for="toDate">Xem đến</label>
                    <input id="toDate" type="datetime" name="toDate" class="form-control">
                  </div>
                  <div class="form-group">
                    <label for="payCheck">Thanh toán</label>
                    <select id="payCheck" class="form-control">
                      <option checked="checked">Trực tiếp</option>
                      <option>Chuyển khoản</option>
                      <option>Khác</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label id="ship">Giao hàng</label>
                    <select id="ship" class="form-control">
                      <option checked="checked">Trực tiếp tại cửa hàng</option>
                      <option>Giao hàng tận nhà</option>
                    </select>
                  </div>
                </div>
                <div class="form-group">
                  <button type="submit" class="btn btn-primary">Tìm kiếm</button>
                </div>
              </form>
            </div>
            <div>
              <div class="sm-tab-title">
                <span>Đơn hàng</span>
              </div>
              <div>
                <table class="table table-hover">
                  <tr>
                    <th>Mã đơn hàng</th>
                    <th>Ngày đặt hàng</th>
                    <th>Ngày giao hàng</th>
                    <th>Tên người nhận</th>
                    <th>Địa chỉ giao hàng</th>
                    <th>Trạng thái</th>
                  </tr>
                  <tr>
                    <td>productID</td>
                    <td>bookDay</td>
                    <td>receiveDay</td>
                    <td>userName</td>
                    <td>receiveAddress</td>
                    <td>status</td>
                  </tr>
                  <tr>
                    <td>productID</td>
                    <td>bookDay</td>
                    <td>receiveDay</td>
                    <td>userName</td>
                    <td>receiveAddress</td>
                    <td>status</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
<script>
  import $ from 'jquery'
  export default {
    created () {
      $(document).ready(function () {
        var date = new Date()
        var toDay = date.getDate()
        var toMonth = date.getMonth()
        var toYear = date.getFullYear()
        var monthsOfYear = getDaysOfMonth()
        for (let i = 1; i <= monthsOfYear; i++) {
          if (toDay === i) {
            $('#memberDayOfBirth').append('<option selected="selected"> ' + i + ' </option>')
          } else {
            $('#memberDayOfBirth').append('<option>' + i + '</option>')
          }
        }
        for (let i = 0; i < 12; i++) {
          if ((toMonth + 1) === i + 1) {
            $('#memberMonthOfBirth').append('<option selected="selected"> ' + (i + 1) + ' </option>')
          } else {
            $('#memberMonthOfBirth').append('<option>' + (i + 1) + '</option>')
          }
        }
        for (let i = 1900; i <= toYear; i++) {
          if (toYear === i) {
            $('#memberYearOfBirth').append('<option selected="selected"> ' + toYear + ' </option>')
          } else {
            $('#memberYearOfBirth').append('<option> ' + i + ' </option>')
          }
        }
        function getDaysOfMonth () {
          return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
        }

        $('.user-info-default').show()
        $('.onclick').on('click', function () {
          let thisTab = $(this).attr('showSmallTabs')
          $('.sm-tab').hide()
          $('.' + thisTab).slideDown()
        })
        $('.customize-button').on('click', function () {
          $('.user-info-default').slideToggle()
          $('.user-info-customize').slideToggle()
        })
        $('.customize-cancel-button').on('click', function () {
          $('.user-info-default').slideToggle()
          $('.user-info-customize').slideToggle()
        })
        $('.changePasswordButton').on('click', function () {
          $('.security').slideToggle()
          $('.password-customize').slideToggle()
        })
        $('.cancelChangePassBtn').on('click', function () {
          $('.security').slideToggle()
          $('.password-customize').slideToggle()
        })
      })
    }
  }
</script>
<style scope>
  @import url('./assets/css/login-form-style.css');
  @import url('./assets/css/user-style.css');
  @import url('./assets/css/danh-sach-style.css');
</style>
