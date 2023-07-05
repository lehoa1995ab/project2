import { convertToVND } from '@mieuteacher/meomeojs';
import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { addToCart } from '../../stores/slices/cart.slice';
import { Card, Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ProductList.scss'

function ProductList({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    toast.success('Sản phẩm đã được thêm vào giỏ hàng!', {
      position: toast.POSITION.TOP
    });
  };

  return (
    <div>
      <Card style={{ width: '18rem', height: '32rem' }}>
        <Card.Img variant="top" src={product.src} style={{ height: '20rem' }} />
        <Card.Body style={{ height: '12rem', textAlign: 'center' }}>
          <Card.Title style={{ textAlign: 'center' }}>{product.name}</Card.Title>
          <Card.Text>{product.text}</Card.Text>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <p>{convertToVND(product.price)}</p>
            <Button variant="primary" onClick={handleAddToCart}>
              Mua
            </Button>
          </div>
        </Card.Body>
      </Card>
      <ToastContainer />
    </div>
  );
}

export default connect(null, null)(ProductList);
