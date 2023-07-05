import React from 'react'
import { Button, Image, Space } from 'antd';
import { useState } from 'react';


export default function Body1() {
  const [random, setRandom] = useState();
  return (
    <div style={{ paddingTop: "30px" }} >
      <div size={12} style={{
        backgroundColor: 'hsl(354, 89%, 80%)',
        display: "flex",
        paddingTop: "30px",
        justifyContent: 'center',
        marginTop: "60px",
        marginBottom: "60px"

      }}>
        <img
          className='imgbody'
          width={500}
          height={400}

          src={`https://cdn.tgdd.vn/Files/2022/03/01/1417785/my-pham-focallure-co-tot-khong-top-cac-san-pham-dang-mua-nhat-cua-focallure-202203011218209921.jpg?${random}`}
          placeholder={
            <img className='imgbodys'
              preview={false}
              src="https://cdn.tgdd.vn/Files/2022/03/01/1417785/my-pham-focallure-co-tot-khong-top-cac-san-pham-dang-mua-nhat-cua-focallure-202203011218209921.jpg"
              width={200}

            />
          }
        />
        <div style={{ margin: " 100px 100px",textAlign: "center",lineHeight:"40px" }}>
        <h6>A NATURE'S TOUCH</h6>
          <h3>Được Giảm Giá 20%<br />
            Cho Tất Cả Các Gói Kem <br />
            Mỹ Phẩm</h3>
          
          <Button style={{
            backgroundColor: 'hsl(3, 76%, 49%)',
            border: 'none',
            borderRadius: '8px ',
            paddingLeft: '2rem',
            paddingRight: '2rem',
            fontSize: '1.2rem',
            textAlign:"center",
            height:"40px",
            marginLeft:"80px"

          }}
            type="primary"
            onClick={() => {
              setRandom(Date.now());
            }}
          >
            XEM NGAY
          </Button>
        </div>
      </div>
      <div size={12} style={{

        display: "flex",
        paddingTop: "30px",
        justifyContent: 'center',
        margin:"30px 100px"
      }}>
        <div style={{ margin: " 100px 100px" ,textAlign: "center",lineHeight:"40px"}}>
      
            <h6>Phương pháp truyền thống
</h6>
          <h3>Sữa Dưỡng Thể Thảo Dược</h3>
        
          <p>Đẩy lùi các vết hỗ trợ trị thâm nám tàn nhang da mụn để lại. Dưỡng da căng bóng, mịn màng. Cải thiện kết cấu da,
             giúp da đàn hồi tốt hơn. Ngăn ngừa lão hóa da, loại bỏ các yếu tố gây nám từ sâu bên trong da.</p>
          <Button style={{
            backgroundColor: "hsl(357, 51%, 69%)",
            border: 'none',
            borderRadius: '8px ',
            paddingLeft: '2rem',
            paddingRight: '2rem',
            fontSize: '1.2rem',
            textAlign:"center",
            height:"40px"
          }}
            type="primary"
            onClick={() => {
              setRandom(Date.now());
            }}
          >
            Xem chi tiết
          </Button>
        </div>

        <img
          className='imgbody'
          width={500}
          height={400}

          src={`https://inhat.vn/wp-content/uploads/2022/05/my-pham-phu-quoc-7-min.png?${random}`}
          placeholder={
            <img className='imgbodys'
              preview={false}
              src="https://inhat.vn/wp-content/uploads/2022/05/my-pham-phu-quoc-7-min.png"
              width={200}

            />
          }
        />

      </div>
      <div size={12} style={{
        display: "flex",
        paddingTop: "30px",
        justifyContent: 'center',
        margin:"30px 100px"
      }}>
        <img
          className='imgbody'
          width={500}
          height={400}

          src={`https://bizweb.dktcdn.net/100/413/259/articles/my-pham-danh-cho-da-nhay-cam.jpg?v=1676866821547?${random}`}
          placeholder={
            <img className='imgbodys'
              preview={false}
              src="https://bizweb.dktcdn.net/100/413/259/articles/my-pham-danh-cho-da-nhay-cam.jpg?v=1676866821547"
              width={200}

            />
          }
        />
        <div style={{ margin: " 100px 100px" ,textAlign: "center",lineHeight:"40px"}}>
            <h6 style={{color:"red"}}>Cuộc cách mạng mỹ phẩm
Organic Serium</h6>
          <h3>Organic Serium</h3>
             <p>Đẩy lùi các vết hỗ trợ trị thâm nám tàn nhang da mụn để lại. Dưỡng da căng bóng, mịn màng. Cải thiện kết cấu da,
             giúp da đàn hồi tốt hơn. Ngăn ngừa lão hóa da, loại bỏ các yếu tố gây nám từ sâu bên trong da.</p>
          <Button style={{
            backgroundColor: "hsl(357, 51%, 69%)",
            color: "white",
            border: 'none',
            borderRadius: '8px ',
            paddingLeft: '2rem',
            paddingRight: '2rem',
            fontSize: '1.2rem',
            textAlign:"center",
            height:"40px"
          }}
            type="primary"
            onClick={() => {
              setRandom(Date.now());
            }}
          >
            Xem chi tiết
          </Button>
        </div>
      </div>
      <div size={12} style={{
        display: "flex",
        paddingTop: "30px",
        justifyContent: 'center',
        margin:"30px 100px"
      }}>
        <div style={{ margin: "100px 100px",textAlign: "center",lineHeight:"40px" }}>
          <h6 style={{color:"red"}}>
            Phương pháp truyền thống
           
          </h6>
          <h3> Kem Dưỡng Da Mặt Thảo Dược</h3>
          <p>Đẩy lùi các vết hỗ trợ trị thâm nám tàn nhang da mụn để lại. Dưỡng da căng bóng, mịn màng. Cải thiện kết cấu da,
             giúp da đàn hồi tốt hơn. Ngăn ngừa lão hóa da, loại bỏ các yếu tố gây nám từ sâu bên trong da.</p>
          <Button style={{
            backgroundColor: "hsl(357, 51%, 69%)",
            border: 'none',
            borderRadius: '8px ',
            paddingLeft: '2rem',
            paddingRight: '2rem',
            fontSize: '1.2rem',
            textAlign:"center",
            height:"40px"
          }}
            type="primary"
            onClick={() => {
              setRandom(Date.now());
            }}
          >
            Xem chi tiết
          </Button>
        </div>
        <img
          className='imgbody'
          width={500}
          height={400}

          src={`https://media.loveitopcdn.com/2534/nuoc-hoa-cho-co-nang-bi-an.jpg?${random}`}
          placeholder={
            <img className='imgbodys'
              preview={false}
              src="https://media.loveitopcdn.com/2534/nuoc-hoa-cho-co-nang-bi-an.jpg"
              width={200}

            />
          }
        />

      </div>
    </div>
  )
}
