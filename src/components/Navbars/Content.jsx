import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productActions } from '../../stores/slices/product.slice';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { convertToVND } from '@mieuteacher/meomeojs';

export default function Content() {
  const dispatch = useDispatch();
  const productStore = useSelector(store => store.productStore);

  useEffect(() => {
    dispatch(productActions.filterProduct("HOT"));
  }, []);

  return (
    <div>
      <div style={{ justifyContent: "center", textAlign: "center" ,marginBottom:"40px",}}>
        <h3>Bộ sưu tập</h3>
        <h1>Sản phẩm bán chạy</h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        {productStore.listProducts?.map((product) => (
          <Card key={product.id} style={{ width: '18rem', height: '32rem' }}>
            <Card.Img variant="top" src={product.src} style={{ height: '20rem' }} />
            <Card.Body style={{ height: '12rem', textAlign: 'center' }}>
              <Card.Title style={{ textAlign: 'center' }}>{product.name}</Card.Title>
              <Card.Text>{product.text}</Card.Text>
              <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <p>{convertToVND(product.price)}</p>
                <Button variant="primary">Mua</Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}
