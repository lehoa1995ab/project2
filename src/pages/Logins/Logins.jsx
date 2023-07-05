import React, { useEffect } from 'react'
import './Login.scss'
import { LeftOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '@components/Loadings/Loading'
import { userLoginActions } from '@stores/slices/userLogin.slice'
import { useNavigate, Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

export default function Login() {
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
                        <h2>ĐĂNG NHẬP</h2>
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
                        Đăng nhập
                    </Link></h5>
            </div>
            <div style={{ display: "flex", justifyContent: "center", marginTop: "40px" }}>
                <div>
                    <img
                        height={600}
                        width={300}
                        className="d-block w-100"
                        src="https://images.squarespace-cdn.com/content/v1/53883795e4b016c956b8d243/793187b9-6545-4f1e-8246-d1e4c42803ae/maki22309_r2.jpg"
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
                            <h2>ĐĂNG NHẬP</h2>
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
                                style={{ width: "600px" }}
                            />
                            <div className='btnLogin'>
                                <div style={{ width: "300px", margin: "30px 30px", lineHeight: "25px" }}>
                                    <MDBBtn className='m-1' style={{ backgroundColor: '#333333',marginBottom: "30px" }} type="submit" href='#'>
                                    <Link to="/" style={{textDecoration:"none",color:"white"}}>ĐĂNG NHẬP</Link>
                                    </MDBBtn>
                                    {/* <button type="submit" class="btn btn-dark">ĐĂNG NHẬP</button> */}
                                    <p style={{ marginTop: "25px" }}>- Bạn quên mật khẩu? </p>
                                    <p>- Bạn chưa có tài khoản?<Link to="/register"></Link></p>
                                    <Link to="/" style={{ textDecoration: "none", color: "red" }}> Đăng ký ngay</Link>
                                </div>
                                <MDBBtn className='m-1' style={{ backgroundColor: '#3b5998' }} href='https://vi-vn.facebook.com/'>
                                    <MDBIcon fab icon='facebook-f' />
                                </MDBBtn>

                                <MDBBtn className='m-1' style={{ backgroundColor: '#55acee' }} href='https://twitter.com/i/flow/login?redirect_after_login=%2F%3Flang%3Dvi'>
                                    <MDBIcon fab icon='twitter' />
                                </MDBBtn>

                                <MDBBtn className='m-1' style={{ backgroundColor: '#dd4b39' }} href='https://www.google.com.vn/?hl=vi'>
                                    <MDBIcon fab icon='google' />
                                </MDBBtn>

                                <MDBBtn className='m-1' style={{ backgroundColor: '#ac2bac' }} href='https://www.instagram.com/'>
                                    <MDBIcon fab icon='instagram' />
                                </MDBBtn>
                                
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>


    )
}