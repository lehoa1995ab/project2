import React from 'react'
import { Footer } from 'antd/es/layout/layout'
import './Footer.scss'

export default function Footers() {
  return (
    <div  className="footer"style={{
      backgroundColor: 'hsl(30, 87%, 94%)!important',
      marginTop: "0px",


    }}>

      {/* Footer */}
      <Footer className="text-center text-lg-start bg-white text-muted">
        {/* Section: Social media */}
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          {/* Left */}
          <div style={{
            display: "flex",
            justifyContent: 'space-around',
            width: '100%',
            margin: 'auto',

          }}>
            <div style={{ display: 'flex', marginRight: "80px" }}>
              <div>
                <i className="fa-solid fa-rotate-right" style={{ margin: " 20px 20px", justifyContent: "center", textAlign: "center", }}></i>
              </div >
              <div style={{lineHeight:"30px"}}>
                <b>50 ngày đổi trả</b>
                <p>Chính sách nổi bật</p>
              </div>
            </div>
            <div style={{ display: 'flex', marginRight: "80px", }} >
              <div>
                <i className="fa-solid fa-headphones" style={{ margin: " 20px 20px", justifyContent: "center", textAlign: "center", }}></i>
              </div>
              <div style={{lineHeight:"30px"}}>
                <b>Hỗ trợ 24/7</b>
                <p>Gọi ngay 19001001</p>
              </div>
            </div>
            <div style={{ display: 'flex', }}>
              <div>
                <i className="fa-solid fa-truck" style={{ margin: " 20px 20px", justifyContent: "center", textAlign: "center", }} ></i>
              </div>
              <div style={{lineHeight:"30px"}}>
                <b>Miễn phí vận chuyển</b>
                <p>Đặt hàng trên 100.000 đồng</p>
              </div>
            </div>
          </div>
          {/* Left */}
          {/* Right */}
          {/* Right */}
        </section>
        {/* Section: Social media */}
        {/* Section: Links  */}
        <div >
          <section className="">
            <div className="container text-center text-md-start mt-5">
              {/* Grid row */}
              <div className="row mt-3">
                {/* Grid column */}
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4" style={{lineHeight:"30px"}}>
                  {/* Content */}
                  <h6 className="text-uppercase fw-bold mb-4">
                    <i className="fas fa-gem me-3 text-secondary" />
                    LIÊN HỆ CHÚNG TÔI
                  </h6>
                  <p>
                    Nếu bạn có bất kỳ câu hỏi nào, vui lòng liên<br />
                    hệ với chúng tôi theo địa chỉ
                  </p>
                  <a href=''>rikkeiacademy@gmail.vn</a>
                  <p>Gọi cho chúng tôi</p>
                  <p>19001001</p>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4" style={{lineHeight:"30px"}}>
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold mb-4">VỊ TRÍ CỬA HÀNG</h6>
                  <p>
                    <a href="#!" className="text-reset">
                      Tự Cường,Quận Tân Bình, Tp. Hồ Chí Minh
                    </a>
                  </p>
                  <h6 className="text-uppercase fw-bold mb-4">GIỜ MỞ CỬA</h6>
                  <p>
                    Thứ Hai - Thứ Bảy: 8.00 - 17.00<br/>
                    Chủ nhật: Đóng cửa
                  </p>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4" style={{lineHeight:"30px"}}>
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold mb-4">HỖ TRỢ KHÁCH HÀNG</h6>
                  <ul>
                  <li>
                    <a href="#!" className="text-reset"style={{textDecoration:"none"}}>
                    Trang chủ
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-reset"style={{textDecoration:"none"}}>
                      Giới thiệu
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-reset"style={{textDecoration:"none"}}>
                      Sản phẩm 
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-reset"style={{textDecoration:"none"}}>
                    Dịch vụ
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-reset" style={{textDecoration:"none"}}>
                    Liên hệ
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-reset"style={{textDecoration:"none"}}>
                    Thư viện ảnh
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-reset"style={{textDecoration:"none"}}>
                    Thư viện video
                    </a>
                  </li>
                  </ul>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold mb-4">LIÊN HỆ</h6>
                  <p>
                    <i className="fas fa-home me-3 text-secondary" />Tân Bình Hồ Chí Minh Việt Nam
                  </p>
                  <p>
                    <i className="fas fa-envelope me-3 text-secondary" />
                    info@example.com
                  </p>
                  <p>
                    <i className="fas fa-phone me-3 text-secondary" /> + 01 234 567 88
                  </p>
                  <p>
                    <i className="fas fa-print me-3 text-secondary" /> + 01 234 567 89
                  </p>
                </div>
                {/* Grid column */}
              </div>
              {/* Grid row */}
            </div>
          </section>
        </div>
        {/* Section: Links  */}
        {/* Copyright */}
        <Footer className="bg-light text-center text-white">
          {/* Grid container */}
          <div className="container p-4 pb-0">
            {/* Section: Social media */}
            <section className="mb-4">
              {/* Facebook */}
              <a
                className="btn text-white btn-floating m-1"
                style={{ backgroundColor: "#3b5998" }}
                href="https://vi-vn.facebook.com/"
                role="button"
              >
                <i className="fab fa-facebook-f" />
              </a>
              {/* Twitter */}
              <a
                className="btn text-white btn-floating m-1"
                style={{ backgroundColor: "#55acee" }}
                href="https://twitter.com/i/flow/login?redirect_after_login=%2F%3Flang%3Dvi"
                role="button"
              >
                <i className="fab fa-twitter" />
              </a>
              {/* Google */}
              <a
                className="btn text-white btn-floating m-1"
                style={{ backgroundColor: "#dd4b39" }}
                href="https://www.google.com/search?q=Google&rlz=1C5CHFA_enVN1053VN1053&oq=Google&aqs=chrome..69i57j35i39j69i59j35i39i650j69i60j69i65l2j69i60.2710j"
                role="button"
              >
                <i className="fab fa-google" />
              </a>
              {/* Instagram */}
              <a
                className="btn text-white btn-floating m-1"
                style={{ backgroundColor: "#ac2bac" }}
                href="https://www.instagram.com/"
                role="button"
              >
                <i className="fab fa-instagram" />
              </a>
              {/* Linkedin */}
              <a
                className="btn text-white btn-floating m-1"
                style={{ backgroundColor: "#0082ca" }}
                href="linkedin.com learning"
                role="button"
              >
                <i className="fab fa-linkedin-in" />
              </a>
              {/* Github */}
              <a
                className="btn text-white btn-floating m-1"
                style={{ backgroundColor: "#333333" }}
                href="Github.com"
                role="button"
              >
                <i className="fab fa-github" />
              </a>
            </section>
            {/* Section: Social media */}
          </div>
          {/* Grid container */}
          {/* Copyright */}
          {/* Copyright */}
        </Footer>

        {/* Copyright */}
      </Footer>
      {/* Footer */}


    </div>
  )
}
