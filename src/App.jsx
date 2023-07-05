import './App.scss'
import {Routes, Route} from 'react-router-dom'
import LazyLoad from './LazyLoad'
import Navbar1 from './components/Navbars/Navbar';
import Footers from './components/Navbars/Footer';
import Allproduct from './pages/Skincare/Allproduct';
import Loading from './components/Loadings/Loading';
import Shipping from './pages/Translasions/Shipping';
import Productcart from './pages/Carts/Productcart';
import Logins from './pages/Logins/Logins';


function App() {
  return (
    <div className="App">
      <div className='app_container'>
        {/* <Loading/> */}
    
      
        {/* <Navbar></Navbar> */}
        <Navbar1/>
        {/* Content Router */}
        <Routes>
          <Route path="/" element={LazyLoad(() => import("@pages/Homes/Home"))()} />
          <Route path="/translasion" element={LazyLoad(() => import("@pages/Translasions/Translasion"))()} />
          <Route path="/productcart" element={LazyLoad(() => import("@pages/Carts/Productcart"))()} />

          <Route path="/shipping" element={LazyLoad(() => import("@pages/Translasions/Shipping"))()} />
          <Route path="/advise" element={LazyLoad(() => import("@pages/Translasions/Advise"))()} />
          <Route path="/orderrequest" element={LazyLoad(() => import("@pages/Translasions/Orderrequest"))()} />




          <Route path="/skincare/:type" element={LazyLoad(() => import("@pages/Skincare/Skincare"))()} />
          <Route path="/allproduct" element={LazyLoad(() => import("@pages/Skincare/Allproduct"))()} />

          <Route path="/login" element={LazyLoad(() => import("@pages/Logins/Logins"))()} />
          <Route path="/register" element={LazyLoad(() => import("@pages/Registers/Register"))()} />



          <Route path="/introduce" element={LazyLoad(() => import("@pages/Introduces/Introduce"))()} />
          <Route path="/about" element={LazyLoad(() => import("@pages/Abouts/About"))()}>
            {/* Router Con Của About */}
             <Route path='my-infor' element={LazyLoad(() => import("@pages/Abouts/MyInfors/MyInfor"))()}></Route>

          </Route>
        </Routes>
        <Footers/>
      </div>
    </div>
  );
}
                           
export default App;
