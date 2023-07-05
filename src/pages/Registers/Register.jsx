import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '@components/Loadings/Loading'
import { userLoginActions } from '@stores/slices/userLogin.slice'
import { useNavigate, Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

export default function Register() {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const userLoginStore = useSelector(store => store.userLoginStore);

    useEffect(() => {
        if (userLoginStore.userInfor == null) {
            if (localStorage.getItem("token")) {
                dispatch(userLoginActions.checkTokenLocal(localStorage.getItem("token")))
            }
        } else {
            navigate('/')
        }
    }, [userLoginStore.userInfor])
    return (
        <div >

            <div style={{}}>
                <Carousel>
                    <img
                        height={400}
                        className="d-block w-100"
                        src="https://png.pngtree.com/background/20210710/original/pngtree-blue-fresh-background-picture-picture-image_1053509.jpg"
                        alt="Carousel Image"
                    />
                    <Carousel.Caption style={{ color: "black" }}>
                        <h2>ĐĂNG KÝ</h2>
                    </Carousel.Caption>
                </Carousel>
                <h5 style={{
                    display: "flex",
                    textAlign: "center",
                    justifyContent: "center",
                    padding: "15px",
                    backgroundColor: "hsl(30, 87%, 94%)"
                }}>
                    < Link to="/" style={{ textDecoration: "none", color: "black" }}>Trang chủ</Link>/<Link to="/shipping" style={{ color: "red", textDecoration: "none", }}>

                        Đăng ký
                    </Link></h5>
            </div>
            <div style={{ display: "flex", justifyContent: "center", marginTop: "40px" }}>
                <div>
                    <img
                        height={600}
                        width={300}
                        className="d-block w-100"
                        src="https://noithattruongsa.com/wp-content/uploads/2021/03/thiet-ke-shop-my-pham-nho-dep-17.jpg"
                        alt="Carousel Image"
                    />
                </div>
                <div className='login_container'>
                    {
                        userLoginStore.loading ? <Loading></Loading> : <></>
                    }
                    <form onSubmit={(eventForm) => {
                        eventForm.preventDefault(); // vô hiệu hành vi mặc định form

                        if (eventForm.target.inputUserName.value == "" || eventForm.target.inputPassword.value == "") {
                            alert("vui lòng điền đầy đủ các trường")
                            return
                        }

                        dispatch(userLoginActions.login(
                            {
                                userName: eventForm.target.inputUserName.value,
                                password: eventForm.target.inputPassword.value
                            }
                        ))

                    }} className='login_form'>
                        <div style={{ width: "600px", margin: "30px 30px", lineHeight: "25px" }}>
                            <h2>ĐĂNG KÝ</h2>
                            <input
                                class="form-control"
                                type="text"
                                placeholder="Họ và tên"
                                name='inputUserName'
                                style={{ width: "600px", marginBottom: "30px" }}
                            />
                             <input
                                class="form-control"
                                type="text"
                                placeholder="Điện thoại"
                                name='inputUserName'
                                style={{ width: "600px", marginBottom: "30px" }}
                            />
                             <input
                                class="form-control"
                                type="text"
                                placeholder="Địa chỉ"
                                name='inputUserName'
                                style={{ width: "600px", marginBottom: "30px" }}
                            />
                             <input
                                class="form-control"
                                type="email"
                                placeholder="Email"
                                name='inputUserName'
                                style={{ width: "600px", marginBottom: "30px" }}
                            />
                            <input
                                class="form-control"
                                type="text"
                                placeholder="Tên truy cập"
                                name='inputUserName'
                                style={{ width: "600px", marginBottom: "30px" }}
                            />
                            <input
                                class="form-control"
                                type="password"
                                placeholder="Mật khẩu"
                                name='inputPassword'
                                style={{ width: "600px", marginBottom: "30px" }}
                            />
                             <input
                                class="form-control"
                                type="password"
                                placeholder="Xác nhận mật khẩu"
                                name='inputPassword'
                                style={{ width: "600px" }}
                            />
                            <div className='btnLogin'>
                                <div style={{ width: "300px", margin: "30px 30px", lineHeight: "25px",height:"60px" }}>
                                    <MDBBtn className='m-1' style={{ backgroundColor: '#333333', marginBottom: "30px" }} type="submit" href='#'>
                                        ĐĂNG KÍ
                                    </MDBBtn>
                                    <MDBBtn className='m-1' style={{ backgroundColor: '#333333', marginBottom: "30px" }} type="submit" href='#'>
                                        LÀM LẠI
                                    </MDBBtn>
                                </div>

                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>


    )
}
