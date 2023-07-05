// import React, { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import { convertToVND } from '@mieuteacher/meomeojs';

// export default function Productcart() {
//   const cartStore = useSelector(store => store.cartStore);
//   const [totalPrice, setTotalPrice] = useState(0);

//   useEffect(() => {
//     calculateTotal();
//   }, [cartStore]);

//   const calculateTotal = () => {
//     let total = 0;
//     cartStore.forEach((item) => {
//       if (item.price && item.quantity) {
//         total += item.price * item.quantity;
//       }
//     });
//     return total;
//   };

//   const total = calculateTotal();
//   return (
//     <div>
//       <section className="h-100 h-custom" style={{ backgroundColor: "hsl(30, 87%, 94%)" }}>
//         <div className="container py-5 h-100">
//           <div className="row d-flex justify-content-center align-items-center h-100">
//             <div className="col-12">
//               <div
//                 className="card card-registration card-registration-2"
//                 style={{ borderRadius: 15 }}
//               >
//                         {cartStore.map((item, index) => (
//                 <div className="card-body p-0">
//                   <div className="row g-0">
//                     <div className="col-lg-8">
//                       <div className="p-5">
//                         <div className="d-flex justify-content-between align-items-center mb-5">
//                           <h1 className="fw-bold mb-0 text-black">Shopping Cart</h1>
//                           <h6 className="mb-0 text-muted">{cartStore.length} items</h6>
//                         </div>
//                         <hr className="my-4" />
//                           <div key={index} className="row mb-4 d-flex justify-content-between align-items-center">
//                             <div className="col-md-2 col-lg-2 col-xl-2">
//                               <img
//                                 src={item.src}
//                                 className="img-fluid rounded-3"
//                                 alt={item.name}
//                               />
//                             </div>
//                             <div className="col-md-3 col-lg-3 col-xl-3">
//                               <h6 className="text-black mb-0">{item.name}</h6>
//                             </div>
//                             <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
//                               <input
//                                 id="form1"
//                                 min={0}
//                                 name="quantity"
//                                 defaultValue={1}
//                                 type="number"
//                                 className="form-control form-control-sm"
//                               />
//                             </div>
//                             <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
//                               <h6 className="mb-0">{convertToVND(item.price)}</h6>
//                             </div>
//                             <div className="col-md-1 col-lg-1 col-xl-1 text-end">
//                               <a href="#!" className="text-muted">
//                                 <i className="fas fa-times" />
//                               </a>
//                             </div>
//                           </div>
//                         <hr className="my-4" />
//                         <div className="pt-5">
//                           <h6 className="mb-0">
//                             <a href="#!" className="text-body">
//                               <i className="fas fa-long-arrow-alt-left me-2" />
//                               Back to shop
//                             </a>
//                           </h6>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-lg-4 bg-grey">
//                       <div className="p-5">
//                         <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
//                         <hr className="my-4" />
//                         <div className="d-flex justify-content-between mb-4">
//                           <h5 className="text-uppercase">Items {cartStore.length}</h5>
//                           <h5>{convertToVND(totalPrice)}</h5>
//                         </div>
//                         <h5 className="text-uppercase mb-3">Shipping</h5>
//                         <div className="mb-4 pb-2">
//                           <select className="select">
//                             <option value={1}>Standard-Delivery- €5.00</option>
//                             <option value={2}>Two</option>
//                             <option value={3}>Three</option>
//                             <option value={4}>Four</option>
//                           </select>
//                         </div>
//                         <h5 className="text-uppercase mb-3">Give code</h5>
//                         <div className="mb-5">
//                           <div className="form-outline">
//                             <input
//                               type="text"
//                               id="form3Examplea2"
//                               className="form-control form-control-lg"
//                               />
//                             <label className="form-label" htmlFor="form3Examplea2">
//                               Enter your code
//                             </label>
//                           </div>
//                         </div>
//                         <hr className="my-4" />
//                         <div className="d-flex justify-content-between mb-5">
//                           <h5 className="text-uppercase">Total price</h5>
//                           <h5>{convertToVND(totalPrice)}</h5>
//                         </div>
//                         <button
//                           type="button"
//                           className="btn btn-dark btn-block btn-lg"
//                           data-mdb-ripple-color="dark"
//                         >
//                           Register
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//               </div>
//             </div>
//             </div>
//             </div>
//       </section>
//     </div >
//   )
// }

import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { convertToVND } from '@mieuteacher/meomeojs';

export default function ProductCart() {
  const cartStore = useSelector(store => store.cartStore);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const total = calculateTotal();
    setTotalPrice(total);
  }, [cartStore]);

  const calculateTotal = () => {
    let total = 0;
    cartStore.forEach(item => {
      if (item.price && item.quantity) {
        total += item.price * item.quantity;
      }
    });
    return total;
  };

  return (
    <div>
      <section className="h-100 h-custom" style={{ backgroundColor: "hsl(30, 87%, 94%)" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12">
              <div className="card card-registration card-registration-2" style={{ borderRadius: 15 }}>
                <div className="card-body p-0">
                  <div className="row g-0">
                    <div className="col-lg-8">
                      <div className="p-5">
                        <div className="d-flex justify-content-between align-items-center mb-5">
                          <h1 className="fw-bold mb-0 text-black">Shopping Cart</h1>
                          <h6 className="mb-0 text-muted">{cartStore.length} items</h6>
                        </div>
                        <hr className="my-4" />
                        {cartStore.map((item, index) => (
                          <div key={index} className="row mb-4 d-flex justify-content-between align-items-center">
                            <div className="col-md-2 col-lg-2 col-xl-2">
                              <img
                                src={item.src}
                                className="img-fluid rounded-3"
                                alt={item.name}
                              />
                            </div>
                            <div className="col-md-3 col-lg-3 col-xl-3">
                              <h6 className="text-black mb-0">{item.name}</h6>
                            </div>
                            <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                              <input
                                id={`form${index}`}
                                min={0}
                                name="quantity"
                                defaultValue={1}
                                type="number"
                                className="form-control form-control-sm"
                              />
                            </div>
                            <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                              <h6 className="mb-0">{convertToVND(item.price)}</h6>
                            </div>
                            <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                              <a href="#!" className="text-muted">
                                <i className="fas fa-times" />
                              </a>
                            </div>
                          </div>
                        ))}
                        <hr className="my-4" />
                        <div className="pt-5">
                          <h6 className="mb-0">
                            <a href="#!" className="text-body">
                              <i className="fas fa-long-arrow-alt-left me-2" />
                              Back to shop
                            </a>
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 bg-grey">
                      <div className="p-5">
                        <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                        <hr className="my-4" />
                        <div className="d-flex justify-content-between mb-4">
                          <h5 className="text-uppercase">Items {cartStore.length}</h5>
                          <h5>{convertToVND(totalPrice)}</h5>
                        </div>
                        <h5 className="text-uppercase mb-3">Shipping</h5>
                        <div className="mb-4 pb-2">
                          <select className="select">
                            <option value={1}>Standard-Delivery- €5.00</option>
                            <option value={2}>Two</option>
                            <option value={3}>Three</option>
                            <option value={4}>Four</option>
                          </select>
                        </div>
                        <h5 className="text-uppercase mb-3">Give code</h5>
                        <div className="mb-5">
                          <div className="form-outline">
                            <input
                              type="text"
                              id="form3Examplea2"
                              className="form-control form-control-lg"
                            />
                            <label className="form-label" htmlFor="form3Examplea2">
                              Enter your code
                            </label>
                          </div>
                        </div>
                        <hr className="my-4" />
                        <div className="d-flex justify-content-between mb-5">
                          <h5 className="text-uppercase">Total price</h5>
                          <h5>{convertToVND(totalPrice)}</h5>
                        </div>
                        <button
                          type="button"
                          className="btn btn-dark btn-block btn-lg"
                          data-mdb-ripple-color="dark"
                        >
                          Register
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
