<template>
  <header>
    <div class="search-bar">
      <div class="container">
        <div class="row no-bg">
          <div class="col4 dia-chi">
            <p><b>Địa chỉ: </b> 169 Ga Đỗ Xá - Thường Tín - Hà Nội</p>
            <p><b>Liên hệ:</b> 0943271111 _ 0963948686</p>
          </div>
          <div class="search-box">
            <form role="search">
              <div>
                <input type="text" name="search" placeholder="Bạn muốn tìm gì ?">
                <button class="search-button glyphicon glyphicon-search" type="submit"></button>
              </div>
            </form>
          </div>


          <div class="sign col4 logged" v-if="user">
            <span id="login">{{user}}</span>
            <ul class="logged-box">
              <li><a href="/#/my-account">Quản lý tài khoản</a></li>
              <li><a href="/#/my-account/orders">Đơn hàng của tôi</a></li>
              <li><span href="" class="onclick-loggoff show-logged loggoff-button" @click.stop.prevent="logout">Đăng xuất</span></li>
            </ul>
          </div>

          <div class="sign col4 log-in" style="display:block" v-else>
            <span id="login" class="show-login">Đăng nhập - Đăng ký tài khoản</span>
            <ul class="logged-box log-in-box">
              <li>
                <span data-toggle="modal" data-target="#loginModal">Đăng nhập </span>
              </li>
              <li>
                <span data-toggle="modal" data-target="#registerModal">Đăng Ký</span>
              </li>
            </ul>
          </div>

        </div> <!-- end row -->
      </div> <!-- end container -->
    </div> <!-- end search-bar -->


    <div class="main-menu-bar">
      <div class="container">
        <div class="row">
          <div class="menu-button-box">
            <button class="menu-button" type="button">
            </button>
          </div>
          <div class="logo-box">
            <a class="logo" href="/"></a>
          </div>
          <div class="main-menu-box">
            <nav class="main-menu">
              <ul class="">
                <li class="dkdn"><a href="#">ĐĂNG KÍ - ĐĂNG NHẬP</a></li>
                <li class="mm-tc"><a class="active" href="index.html">TRANG CHỦ</a></li>
                <li class="mm-dt"><a href="/#/dien-thoai">ĐIỆN THOẠI</a>
                  <div class="menu-dropdown">
                    <ul>
                      <li>HÃNG SẢN XUẤT</li>
                      <li><a href="danh-sach.html">APPLE</a></li>
                      <li><a href="danh-sach.html">SAMSUNG</a></li>
                      <li><a href="danh-sach.html">SONY</a></li>
                      <li><a href="danh-sach.html">OPPO</a></li>
                      <li><a href="danh-sach.html">ASUS</a></li>
                      <li><a href="danh-sach.html">LENOVO</a></li>
                      <li><a href="danh-sach.html">CÁC HÃNG KHÁC</a></li>
                    </ul>
                    <ul>
                      <li>GIÁ TIỀN</li>
                      <li><a href="danh-sach.html">Dưới 1 Triệu</a></li>
                      <li><a href="danh-sach.html">Từ 1 đến 3 triệu</a></li>
                      <li><a href="danh-sach.html">Từ 3 đến 5 triệu</a></li>
                      <li><a href="danh-sach.html">Từ 3 đến 7 triệu</a></li>
                      <li><a href="danh-sach.html">Từ 7 đến 10 triệu</a></li>
                      <li><a href="danh-sach.html">Từ 10 đến 15 triệu</a></li>
                      <li><a href="danh-sach.html">Trên 15 triệu</a></li>
                    </ul>
                    <ul>
                      <li>LOẠI ĐIỆN THOẠI</li>
                      <li><a href="danh-sach.html">IOS (iPhone) </a></li>
                      <li><a href="danh-sach.html">Android</a></li>
                      <li><a href="danh-sach.html">Hệ điều hành khác</a></li>
                      <li><a href="danh-sach.html">Phổ thông</a></li>
                    </ul>
                  </div>
                </li>
                <li class="mm-pk"><a href="/#/phu-kien">PHỤ KIỆN</a>
                  <div class="menu-dropdown menu-dropdown2">
                    <ul>
                      <li><a href="phu-kien.html" class="pk-icon-1">Pin sạc</a></li>
                      <li><a href="phu-kien.html" class="pk-icon-2">Cáp sạc</a></li>
                      <li><a href="phu-kien.html" class="pk-icon-3">Thẻ nhớ</a></li>
                      <li><a href="phu-kien.html" class="pk-icon-4">Tai nghe</a></li>
                      <li><a href="phu-kien.html" class="pk-icon-5">Loa</a></li>
                      <li><a href="phu-kien.html" class="pk-icon-6">Ốp lưng</a></li>
                      <li><a href="phu-kien.html" class="pk-icon-8">Gậy chụp ảnh</a></li>
                      <li><a href="phu-kien.html" class="pk-icon-7">Phụ kiện Apple</a></li>
                      <li><a href="phu-kien.html" class="pk-icon-9">Phụ kiện Sony</a></li>
                    </ul>
                  </div>
                </li>
                <li class="mm-tt"><a href="/#/tin-tuc">TIN TỨC</a></li>
                <li class="mm-lh"><a href="/#/lien-he">LIÊN HỆ</a></li>
              </ul>
            </nav>
          </div>
          <div class="gh-box">
            <a class="gh" href="/#/cart"></a>
          </div>
        </div> <!-- end row -->
      </div> <!-- end container -->
    </div> <!-- end main-menu -->
    <nav>
      <div class="modal fade accountModal" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog" role="document">
          <div class="modal-content">

            <div class="modal-body">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                aria-hidden="true">&times;</span></button>
              <h4 class="modal-title" id="myModalLabel">Đăng nhập tài khoản</h4>
              <form id="loginform">
                <div class="form-group accountFormGroupStyle">
                  <label>Tên đăng nhập</label>
                  <input type="text" name="username" class="form-control" placeholder="Email hoặc Số điện thoại">
                </div>
                <div class="form-group  accountFormGroupStyle">
                  <label>Mật khẩu</label>
                  <input type="password" name="password" class="form-control" placeholder="Mật khẩu">
                </div>
                <div class="checkbox accountFormGroupStyle form-group accountCheckbox">
                  <div>
                    <label>
                      <input type="checkbox" name="remember"> <span class="checkboxText">Lưu đăng nhập</span>
                    </label>
                  </div>
                  <div>
                    <span data-toggle="modal" data-target="#lostPassword" data-dismiss="modal"
                          class="checkboxText lostPassword">Tìm lại mật khẩu</span>
                  </div>
                </div>
                <div class="form-group accountFormGroupStyle submitButton">
                  <button type="submit" class="btn btn-submit-account" @click.stop.prevent="login">Đăng Nhập</button>
                </div>
                <div class="form-group accountFormGroupStyle">
                  <div class="sub-container">
                    <div class="sub-left sub-item"></div>
                    <div class="sub-text sub-item"><span>Hoặc</span></div>
                    <div class="sub-right sub-item"></div>
                  </div>
                </div>
              </form>
              <div class=" form-group oauth-container">
                <div class="oauth-item fb">
                  <img src="/src/assets/images/facebook.png">
                  <button @click.stop.prevent="authenticate('facebook')">Đăng nhập bằng Facebook</button>
                </div>
                <div class="oauth-item gg">
                  <img src="/src/assets/images/google.png">
                  <button @click.stop.prevent="authenticate('google')">Đăng nhập bằng Google</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal fade accountModal" id="registerModal" tabindex="-1" role="dialog"
           aria-labelledby="myModalLabel">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-body">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                aria-hidden="true">&times;</span></button>
              <h4 class="modal-title" id="myModalLabel">Đăng ký tài khoản</h4>
              <p class="bg-warning" v-if="errMsg">{{ errMsg }}</p>
              <p class="bg-success" v-if="msg">{{ msg }}</p>
              <form id="registerform">
                <div class="form-group accountFormGroupStyle">
                  <label>Tên đăng nhập</label>
                  <input type="text" name="username" class="form-control" placeholder="Tên đăng nhập">
                </div>
                <div class="form-group accountFormGroupStyle">
                  <label>Email</label>
                  <input type="text" name="email" class="form-control" placeholder="Địa chỉ email">
                </div>
                <div class="form-group accountFormGroupStyle">
                  <label>Mật khẩu</label>
                  <input type="password" name="password" class="form-control"
                         placeholder="Mật khẩu phải lớn hơn 6 và nhỏ hơn 30 ký tự">
                </div>
                <div class="form-group accountFormGroupStyle">
                  <label>Nhập lại Mật khẩu</label>
                  <input type="password" name="password_confirm" class="form-control"
                         placeholder="Nhập lại Mật khẩu phải giống Mật khẩu">
                </div>
                <div class="checkbox form-group accountFormGroupStyle">
                  <label>
                    <input type="checkbox" name="agree"> Tôi đồng ý với các điều khoản của shop
                  </label>
                </div>
                <div class="form-group accountFormGroupStyle submitButton">
                  <button type="button" class="btn btn-submit-account" @click.stop.prevent="register">Đăng Ký</button>
                </div>
                <div class="form-group accountFormGroupStyle">
                  <div class="sub-container">
                    <div class="sub-left sub-item"></div>
                    <div class="sub-text sub-item"><span>Hoặc</span></div>
                    <div class="sub-right sub-item"></div>
                  </div>
                </div>
              </form>
              <div class=" form-group oauth-container">
                <div class="oauth-item fb">
                  <img src="/src/assets/images/facebook.png">
                  <button><a href="http://localhost:3000/api/login/facebook">Đăng nhập bằng Facebook</a></button>
                </div>
                <div class="oauth-item gg">
                  <img src="/src/assets/images/google.png">
                  <button @click.stop.prevent="logingoogle()">Đăng nhập bằng Google</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal fade accountModal" id="lostPassword" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-body">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                aria-hidden="true">&times;</span></button>
              <h4 class="modal-title" id="myModalLabel">Tìm lại Mật khẩu</h4>
              <form>
                <div class="form-group accountFormGroupStyle">
                  <label>Nhập lại Email hoặc Số điện thoại</label>
                  <input type="text" name="" class="form-control" placeholder="Email hoặc Số điện thoại">
                </div>
                <div class="form-group  lostPasswordBtn">
                  <button type="submit" class="btn btn-primary">Gửi thông tin</button>
                  <button type="button" data-dismiss="modal" data-toggle="modal" data-target="#loginModal"
                          class="btn btn-danger">Bỏ qua
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <span data-toggle="modal" data-target="#addtocart-modal" id="btn-addtocart-modal" style="display:none;">Đăng nhập </span>
      <div class="modal fade addtocartModal" id="addtocart-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-body">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                aria-hidden="true">&times;</span></button>
              <h4 class="modal-title" id="myModalLabel">Thông báo</h4>
              <form>
                <div class="form-group accountFormGroupStyle">
                  <p class="bg-warning"></p>
                </div>
                <div class="form-group  lostPasswordBtn" style="overflow: hidden;">
                  <button type="submit" class="btn btn-primary" style="float:right" data-dismiss="modal" aria-label="Close">Đóng</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
<script>
  import axios from 'axios'
  let SERVER = process.env.SERVER
  let $ = require('jquery')
  //  Vue.use(VueAuthenticate, {
  //    baseUrl: SERVER, // Your API domain
  //    providers: {
  //      facebook: {
  //        clientId: '724038607649657',
  //        clientSecret: 'ee909a7ea7210e8c3fa3aeb3716366e5',
  //        name: 'facebook',
  //        url: '/api/login/facebook',
  //        authorizationEndpoint: 'https://www.facebook.com/v2.5/dialog/oauth',
  //        redirectUri: 'http://localhost:8080/',
  //        requiredUrlParams: ['display', 'scope'],
  //        scope: ['email'],
  //        scopeDelimiter: ',',
  //        display: 'popup',
  //        oauthType: '2.0',
  //        popupOptions: { width: 580, height: 400 }
  //      }
  //    }
  //  })
  export default {
    data () {
      return {
        errMsg: '',
        msg: '',
        user: localStorage.user || ''
      }
    },
    methods: {
      register () {
        this.errMsg = ''
        this.msg = ''
        let data = $('#registerform').serialize()
        axios.post(`${SERVER}/api/register`, data)
          .then(res => {
            if (res.data.errMsg) {
              this.errMsg = res.data.errMsg
            } else {
              this.msg = res.data.msg
            }
          })
      },
      login () {
        this.errMsg = ''
        this.msg = ''
        let data = $('#loginform').serialize()
        axios.post(`${SERVER}/api/login`, data)
          .then(res => {
            if (res.data.errMsg) {
              this.errMsg = res.data.errMsg
            } else {
              $('#loginModal .close').click()
              this.user = res.data.user
              localStorage.user = res.data.user
              localStorage.token = res.data.token
            }
          })
      },
      logout () {
        this.user = localStorage.user = localStorage.token = ''
      }
    }
  }
</script>
