
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
import SimpleSlider from '../../components/Navbars/Slider';
import { Link } from 'react-router-dom';



export default function Orderrequest() {
    const [random, setRandom] = useState();

    return (
        <div style={{ margin: "0px", backgroundColor: "hsl(0, 0%, 98%)" }} >
            <div style={{}}>
                <Carousel>
                    <img
                        height={400}
                        className="d-block w-100"
                        src="https://png.pngtree.com/background/20210710/original/pngtree-blue-fresh-background-picture-picture-image_1053509.jpg"
                        alt="Carousel Image"
                    />
                    <Carousel.Caption style={{ color: "black" }}>
                        <h2>ĐẶT HÀNG - YÊU CẦU</h2>
                    </Carousel.Caption>
                </Carousel>
                <h5 style={{
                    display: "flex",
                    textAlign: "center",
                    justifyContent: "center",
                    padding: "15px",
                    backgroundColor: "hsl(30, 87%, 94%)"
                }}><Link to="/" style={{ textDecoration: "none", color: "black" }}>Trang chủ</Link>/< Link to="/translasion" style={{ textDecoration: "none", color: "black" }}>Dịch vụ</Link>/<Link to="/shipping" style={{ color: "red" }}>


                        Đặt hàng - Yêu cầu
                    </Link></h5>
            </div>
            <div style={{ height: "750px", width: "50%", textAlign: "center", justifyItems: "center", lineHeight: "50px", margin: "auto", padding: "30px" }}>
                <img height={500} src='https://tuongchibi3d.com/wp-content/uploads/2020/12/qua-luu-niem-chib-3d-2.png'></img>

                <h4 style={{ marginTop: "20px" }}>Dịch vụ giao hàng có phí (COD)
                </h4>
                <h6>Dịch vụ cho các sản phẩm có sẵn tại cửa hàng
                </h6>
                <button style={{ backgroundColor: "black", color: "white", height: "50px", width: "100px", fontSize: "20px", marginTop: "25px", textAlign: "center" }}>Xem thêm</button>

            </div>
            <div style={{ height: "750px", width: "50%", textAlign: "center", justifyItems: "center", lineHeight: "50px", margin: "auto", padding: "30px" }}>
                <img height={500} src='https://tankashop.com/wp-content/uploads/2020/03/dat-hang-theo-yeu-cau-tankashop.jpg'></img>
                <h4 style={{ marginTop: "20px" }}>Dịch vụ vận chuyển nước hoa
                </h4>
                <h6>Nước hoa – món đồ làm đẹp không thể thiếu với bất kỳ ai hiện nay khi muốn tạo dấu ấn của sự quý phái, thành công và mang đến đẳng cấp doanh nhân thành đạt.

                </h6>
                <button style={{ backgroundColor: "black", color: "white", height: "50px", width: "100px", fontSize: "20px", marginTop: "25px", textAlign: "center" }}>Xem thêm</button>

            </div>

        </div>
    );
}
