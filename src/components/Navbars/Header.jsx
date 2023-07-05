import React from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


export default function Header() {
  return (
    <div style={{marginBottom:"50px"

    }}>
        <Container>
      <Row style={{
        justifyContent:"center",
        alignItems: "center",
        width:"100%",
        height:"35vh",
        marginTop:"35px",
        marginBottom:"70px",
        textAlign:"center"
        
      }}>
        <Col xs={6} md={4}>
          <img style={{
            marginBottom:"40px",  
            marginLeft:"20px", 
          }} height={300}
          width={400}
           src="https://media.loveitopcdn.com/2629/thumb/600x600/gia-cong-my-pham-tron-goi.png?zc=2" rounded />
        <h2>SKINCARE</h2>
        </Col>
        <Col xs={6} md={4}>
          <img style={{
           
            marginBottom:"40px",
            marginLeft:"20px",
            marginRight:"10px !important" 

           
          }} height={300}
          width={400}
          src="https://nguyenlieulammypham.net/wp-content/uploads/2020/11/T%C3%ACnh-h%C3%ACnh-s%E1%BB%AD-d%E1%BB%A5ng-m%E1%BB%B9-ph%E1%BA%A9m-%E1%BB%9F-Vi%E1%BB%87t-Nam-hi%E1%BB%87n-nay.png" rounded />
        <h2>MAKEUP</h2>
        </Col>
        <Col xs={6} md={4}>
          <img style={{
            width:"105%",
            marginBottom:"40px",
            marginLeft:"20px",
           
          }} height={300}
          width={400}
          src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Perfume_Bottles.JPG" rounded />
        <h2>FRAGRANCE</h2>
        </Col>
      </Row>
      
    </Container>
    </div>
  )
}
