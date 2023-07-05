
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { productActions } from '../../stores/slices/product.slice';
import ProductList from '../../components/Products/ProductList';
import Content from '../../components/Navbars/Content';

export default function Skincare() {
    const { type } = useParams();
    const dispatch = useDispatch();
    const productStore = useSelector(store => store.productStore);
    console.log(productStore);
    useEffect(() => {
        dispatch(productActions.filterProduct(type));
    }, [type]);
    
  return (
    <div style={{
      display: "flex",
      justifyContent: 'space-around',
      alignItems: 'center',
      marginTop:"100px",
      marginBottom:"60px"
  }}>
        {
            productStore.listProducts?.map((product)=>
            // <React.Fragment key={product.id}>
            <ProductList product={product} key={product.id}
            style={{
                display: "flex",
                justifyContent: 'space-around',
                alignItems: 'center',
            }}/>
        //     <Content product={product} />
        // </React.Fragment>
        )}
    </div>
  )
}
