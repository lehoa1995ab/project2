import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
import SimpleSlider from '../../components/Navbars/Slider';
import { Link } from 'react-router-dom';



export default function Advise() {
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
                        <h2>TƯ VẤN</h2>
                    </Carousel.Caption>
                </Carousel>
                <h5 style={{
                    display: "flex",
                    textAlign: "center",
                    justifyContent: "center",
                    padding: "15px",
                    backgroundColor: "hsl(30, 87%, 94%)"
                }}><Link to="/" style={{ textDecoration: "none", color: "black" }}>Trang chủ</Link >/< Link to="/translasion" style={{ textDecoration: "none", color: "black" }}>Dịch vụ</Link>/<a style={{ color: "red" }}>

Tư vấn
</a></h5>
            </div>
            <div style={{ height: "750px", width: "50%", textAlign: "center",justifyItems:"center",lineHeight:"50px",margin:"auto",padding:"30px"}}>
                <img height={500} src='https://career.gpo.vn/uploads/images/395799810/images/gpo.nhung-luu-y-can-biet-khi-lam-tu-van-spa.jpg'></img>
                <h4 style={{marginTop:"20px"}}>Tư vấn làm đẹp

                </h4>
                <h6>Phụ nữ khi bắt đầu sử dụng thường loay hoay chọn sản phẩm để phù hợp với da. Chúng tôi có đội nhân viên hỗ trợ tư vấn miễn phí

                </h6>
                <button style={{ backgroundColor: "black", color: "white" ,height:"50px",width:"100px",fontSize:"20px",marginTop:"25px",textAlign:"center"}}>Xem thêm</button>

            </div>
            <div style={{ height: "750px", width: "50%", textAlign: "center",justifyItems:"center",lineHeight:"50px",margin:"auto",padding:"30px"}}>
                <img height={500} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsfjgeLq8p8QgvD3eedcwR3HCOwll29LNWpg&usqp=CAU'></img>
                <h4 style={{marginTop:"20px"}}>Tư vấn dịch vụ vận chuyển 
                </h4>
                <h6>Nước hoa – món đồ làm đẹp không thể thiếu với bất kỳ ai hiện nay khi muốn tạo dấu ấn của sự quý phái, thành công và mang đến đẳng cấp doanh nhân thành đạt.

                </h6>
                <button style={{ backgroundColor: "black", color: "white" ,height:"50px",width:"100px",fontSize:"20px",marginTop:"25px",textAlign:"center"}}>Xem thêm</button>

            </div>
            
        </div>
    );
}
