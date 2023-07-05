import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
export default function Carousel1() {
  return (
    <div >
        <Carousel  style={{marginTop:"70px!important"}}>
      <Carousel.Item>
        <img 
         height={610}
          className="d-block w-100"
          src="https://hali.vn/wp-content/uploads/2020/07/thiet-ke-banner-my-pham19.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          height={610}
          className="d-block w-100"
          src="https://rubicmarketing.com/wp-content/uploads/2021/08/thiet-ke-banner-my-pham-3.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          height={610}
          className="d-block w-100"
          src="https://shoop.vn/shoop_vn/uploads/2019/09/thiet-ke-banner-3.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}
