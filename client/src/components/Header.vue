<template>
  <header>
    <div class="search-bar">
      <div class="container">
        <div class="row no-bg">
          <div class="col4 dia-chi">
            <p><b>Địa chỉ: </b>  169 Ga Đỗ Xá - Thường Tín - Hà Nội</p>
            <p><b>Liên hệ:</b>  0943271111 _ 0963948686</p>
          </div>
          <div class="search-box">
            <form role="search">
              <div>
                <input type="text" name="search" placeholder="Bạn muốn tìm gì ?">
                <button class="search-button glyphicon glyphicon-search" type="submit"></button>
              </div>
            </form>
          </div>

          <div class="sign col4 log-in">
            <span id="login" class="show-login" >Đăng nhập - Đăng ký tài khoản</span>
            <ul class="logged-box log-in-box">
              <li>

                <span data-toggle="modal" data-target="#loginModal">Đăng nhập </span>
              </li>
              <li>
                <span data-toggle="modal" data-target="#registerModal">Đăng Ký</span>
              </li>

            </ul>
          </div>
          <div class="sign col4 logged">
            <span id="login"> $ Tên người dùng</span>
            <ul class="logged-box">
              <li><a href="user.html">Quản lý tài khoản</a></li>
              <li><a href="gio-hang.html">Đơn hàng của tôi</a></li>
              <li><span href="" class="onclick-loggoff show-logged loggoff-button">Đăng xuất</span></li>
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
            <a class="logo" href="index.html"></a>
          </div>
          <div class="main-menu-box">
            <nav class="main-menu">
              <ul class="">
                <li class="dkdn"><a href="#">ĐĂNG KÍ - ĐĂNG NHẬP</a></li>
                <li class="mm-tc"><a class="active" href="index.html">TRANG CHỦ</a></li>
                <li class="mm-dt"><a href="danh-sach.html">ĐIỆN THOẠI</a>
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
                <li class="mm-pk"><a href="phu-kien.html">PHỤ KIỆN</a>
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
                <li class="mm-km"><a href="khuyen-mai.html">KHUYẾN MẠI</a></li>
                <li class="mm-tt"><a href="tin-tuc.html">TIN TỨC</a></li>
                <li class="mm-lh"><a href="lien-he.html">LIÊN HỆ</a></li>
              </ul>
            </nav>
          </div>
          <div class="gh-box">
            <a class="gh" href="gio-hang.html"></a>
          </div>
        </div> <!-- end row -->
      </div> <!-- end container -->
    </div> <!-- end main-menu -->
  </header>
</template>
<script>

</script>
