// import React from 'react'
// import { Link, useNavigate } from 'react-router-dom'


// export default function Navbar() {
//     const navigator = useNavigate();
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <div className="container-fluid">
//             <a className="navbar-brand" href="#">
//             Navbar
//             </a>
//             <button
//                 className="navbar-toggler"
//                 type="button"
//                 data-bs-toggle="collapse"
//                 data-bs-target="#navbarSupportedContent"
//                 aria-controls="navbarSupportedContent"
//                 aria-expanded="false"
//                 aria-label="Toggle navigation"
//             >
//             <span className="navbar-toggler-icon" />
//             </button>
//             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                 <li className="nav-item">
//                     <Link className="nav-link active" aria-current="page" to="">
//                         Home
//                     </Link>
//                 </li>
//                 <li className="nav-item dropdown">
//                     <span
//                         className="nav-link dropdown-toggle"
//                         id="navbarDropdown"
//                         role="button"
//                         data-bs-toggle="dropdown"
//                         aria-expanded="false"
//                         onClick={() => {
//                             navigator('/about')
//                         }}
//                     >
//                         About
//                     </span>
//                     <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//                         <span onClick={() => {
//                             navigator('about/my-infor')
//                         }}>
//                             <span className="dropdown-item">
//                                 My Infor
//                             </span>
//                         </span>
//                     </ul>
//                 </li>
//             </ul>
//             <form className="d-flex">
//                 <input
//                 className="form-control me-2"
//                 type="search"
//                 placeholder="Search"
//                 aria-label="Search"
//                 />
//                 <button className="btn btn-outline-success" type="submit">
//                 Search
//                 </button>
//             </form>
//             </div>
//         </div>
//     </nav>
//   )
// }
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
 import './Navbar.scss'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link, useNavigate, } from 'react-router-dom';

export default function Navbar1() {
    const navigator=useNavigate();
    return (
        <div className='navbar' style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor:"hsl(0, 0%, 100%)"
        }}>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>

                    <Navbar.Brand href="#" className='logo'
                        style={{
                            marginLeft: "30px",
                            fontWeight: "bold",
                            fontSize: "150%",

                        }}>HANA</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{
                                maxHeight: '100px',
                            }}
                            navbarScroll
                        >
                            <Link
                                to="/"
                                style={{
                                    justifyContent: "center",
                                    alignItems: "center",
                                    margin: "20px 25px",
                                    fontWeight: "bold",
                                    fontSize: "100%",
                                    color: "black",
                                    textDecoration:"none"
                                }}
                                className="hover-link"
                                

                            >
                                Trang chủ
                            </Link>

                            <Link to="/introduce"
                                style={{
                                    justifyContent: "center",
                                    alignItems: "center",
                                    margin: "20px 25px",
                                    fontWeight: "bold",
                                    fontSize: "100%",
                                    color: "black",
                                    textDecoration:"none",


                                }}
                               
                            >Giới thiệu</Link>
                            <div className="dropdown">

                                <Button
                                    className="btn btn-primary dropdown-toggle"
                                    type="button"
                                    id="dropdownMenuButton"
                                    data-mdb-toggle="dropdown"
                                    aria-expanded="false"
                                    style={{
                                        backgroundColor: 'white',
                                        border: 'none',
                                        color: "black",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        margin: "12px 25px",
                                        fontWeight: "bold",
                                        fontSize: "100%",
                                    }}
                                ><Link to="/allproduct" style={{ textDecoration: "none", color: "black" }}>Sản phẩm</Link>
                                    
                                </Button>
                                {/* <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a className="dropdown-item" href="#" style={{ : "1.5rem" }}>
            SKINCARE
        </a>
        <a className="dropdown-item" href="#">
            Kem dưỡng trắng body
        </a>
        <a className="dropdown-item" href="#">
            Chăm sóc da mặt
        </a>
        <a className="dropdown-item" href="#">
            Chăm sóc da toàn thân
        </a>
    </div> */}
                                {/* <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a className="dropdown-item" href="#" style={{ : "1.5rem" }}>
            MAKEUP
        </a>
        <a className="dropdown-item" href="#">
            Lips
        </a>
        <a className="dropdown-item" href="#">
            Hair
        </a>
        <a className="dropdown-item" href="#">
            Eyes
        </a>
    </div> */}
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    {/* <a className="dropdown-item" href="#" style={{ : "1.5rem" }}>
            FRAGRANCE
        </a> */}
                                    {/* <a className="dropdown-item" href="#">
            Nưước hoa Pháp
        </a>
        <a className="dropdown-item" href="#">
            Nước hoa nam
        </a>
        <a className="dropdown-item" href="#">
            Nước hoa nữ
        </a> */}
                                    <Link className="dropdown-item" to="skincare/SKINCARE">
                                        SKINCARE
                                    </Link><hr />
                                    <Link className="dropdown-item" to="skincare/MAKEUP">
                                        MAKEUP
                                    </Link><hr />
                                    <Link className="dropdown-item" to="skincare/FRAGRANCE">
                                        FRAGRANCE
                                    </Link><hr />
                                </div>
                            </div>

                            <div className="dropdown">
                                <Link to="/translasion"
                                    className="btn btn-primary dropdown-toggle"
                                    type="button"
                                    id="dropdownMenuButton"
                                    data-mdb-toggle="dropdown"
                                    aria-expanded="false"
                                    style={{
                                        backgroundColor: 'hsl(0, 0%, 100%)',
                                        border: 'none',
                                        color: "black",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        margin: "12px 25px",
                                        fontWeight: "bold",
                                        fontSize: "100%",
                                    }}
                                >
                                    Dịch vụ
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <li>
                                        <Link to="/shipping" className="dropdown-item" href="#">
                                            Vận chuyển giao hàng
                                        </Link>
                                    </li><hr />
                                    <li>
                                        <Link to="/advise" className="dropdown-item" href="#">
                                            Tư vấn
                                        </Link>
                                    </li><hr />
                                    <li>
                                        <Link to="orderrequest" className="dropdown-item" href="#">
                                            Đặt hàng-Yêu cầu
                                        </Link>
                                    </li><hr />
                                </ul>
                            </div>
                            <div className="dropdown">
                                <Button
                                    className="dropdown-toggle"
                                    type="button"
                                    id="dropdownMenuButton"
                                    data-mdb-toggle="btn btn-primary "
                                    aria-expanded="false"
                                    style={{
                                        backgroundColor: 'hsl(0, 0%, 100%)',
                                        border: 'none',
                                        color: "black",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        margin: "12px 15px",
                                        fontWeight: "bold",
                                        fontSize: "100%",
                                    }}
                                >
                                    Tin tức
                                </Button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Tin tức đời sống
                                        </a>
                                    </li><hr />
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Tin tức làm đẹp
                                        </a>
                                    </li><hr />
                                </ul>
                            </div>
                            <div className="dropdown">
                                <Button
                                    className="btn btn-primary dropdown-toggle"
                                    type="button"
                                    id="dropdownMenuButton"
                                    data-mdb-toggle="dropdown"
                                    aria-expanded="false"
                                    style={{
                                        backgroundColor: 'hsl(0, 0%, 100%)',
                                        border: 'none',
                                        color: "black",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        margin: "12px 25px",
                                        fontWeight: "bold",
                                        fontSize: "100%",
                                    }}
                                >
                                    Thư viện
                                </Button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Thư viện hình ảnh
                                        </a>
                                    </li><hr />
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Thư viện video
                                        </a>
                                    </li><hr />

                                </ul>
                            </div>
                            <Nav.Link href="#action2"
                                style={{
                                    backgroundColor: 'white',
                                    color: "black",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    margin: "12px 15px",
                                    fontWeight: "bold",
                                    fontSize: "100%",
                                }}

                            >Liên hệ </Nav.Link>

                            <div class="dropdown">
                                <IconButton
                                    size="large"
                                    edge="start"
                                    color="inherit"
                                    aria-label="menu"
                                    sx={{ mr: 2 }}
                                    style={{
                                        backgroundColor: 'hsl(0, 0%, 100%)',
                                        color: "black",
                                        justifyContent: "center",
                                        alignItems: "center",

                                        fontWeight: "bold",
                                        fontSize: "100%",
                                    }}
                                >
                                  <Link to="/productcart"> <AddShoppingCartIcon id="cartIcon" /></Link>
                                </IconButton>
                                <IconButton
                                    size="large"
                                    edge="start"
                                    color="inherit"
                                    aria-label="menu"
                                    sx={{ mr: 2 }}
                                    style={{
                                        backgroundColor: 'white',
                                        color: "black",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        fontWeight: "bold",
                                        fontSize: "100%",
                                    }}
                                >
                                    <SearchIcon />
                                </IconButton>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <Form className="d-flex">
                                        <Form.Control
                                            type="search"
                                            placeholder="Search"
                                            className="me-2"
                                            aria-label="Search"
                                        />
                                        <Button variant="outline-success">Search</Button>
                                    </Form>
                                </ul>
                            </div>
                            <div className="dropdown">
                                <IconButton

                                    size="large"
                                    edge="start"
                                    color="inherit"
                                    aria-label="menu"
                                    sx={{ mr: 2 }}
                                    style={{
                                        backgroundColor: 'hsl(0, 0%, 100%)',
                                        color: "black",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        fontWeight: "bold",
                                        fontSize: "100%",
                                    }}
                                >
                                    <MenuIcon />
                                </IconButton>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <li>
                                        <Link className="dropdown-item" to="/login">
                                            Đăng nhập
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/register">
                                            Đăng kí
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="#">
                                            So sánh
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="#">
                                            Yêu thích
                                        </Link>
                                    </li>
                                    <li>
                                        <i className="fa-thin fa-folder-magnifying-glass"></i>
                                        <Link className="dropdown-item" to="#" >
                                            Tra cứu đơn hàng
                                        </Link>
                                    </li>

                                </ul>


                            </div>
                            <div style={{
                                backgroundColor: "hsl(0, 0%, 100%)",
                                justifyContent: "center",
                                alignItems: "center",
                                fontWeight: "bold",
                                fontSize: "100%",
                                marginTop: "15px"

                            }}>
                                <button className='image' style={{ backgroundColor: "hsl(0, 0%, 100%)", marginRight:"10px"}}><img className='img' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAACWCAMAAAAfSh8xAAAAe1BMVEXaJR3//wD64gTvoQ3bLRzqhBDyrwv//ADodRL++AH75gPePhr52wXbKRz98AL98gL86wPjWhbiVRftkg72zQf30gbfRBndNhvhThjriw/umQ741gXmbRPmaRT53wT1wwjxqwvqgRHkYhX0vAnyswrvnw3rihDpexL1wQgVQJAdAAAC/UlEQVR4nO3c2XLiQAwF0DSGsGN2DAQwJEzm/79wwCzx0tC2aUUtzz3vU3VVUUVOSzVvbwAAAAAAAAAAAAAAAABCfXAHoFYf1rkjENuoDXcEYl/qnTsCrf5A+X3uEKQOSqkDdwhS4anCkDsEpVOTKjWocpuem7TabRpGFYbcMQgNowqH3DHojNTFiDsIGe9aoccdhEznWmGHOwiVsboZc0chcrxXuOKOQqR2r7CibRqoHwF3GBKrWIXVbNNerMItdxgK8SatZptOEhVOuOMQ6CUqXHPHsW+ukubcgaxbpipccgeybpaqcMYdyLauSqtamzYyFTa4I1k2zVQ45Y5kV7ZJlepyh7Jqr6lwzx2qiLpXe87XVOgb/o3n1paq0dbU8Iqmc991wdZqgTUHHzrqnjl3bu9udejNx8BSfX6Lu5RHutmpV8bM4c+d/qT5eoGe27upUcdcwlND5zdTi8+XCtxJ+NJplR+NbSGf48G6ZIE9Me9TJUejo0NQb1N8NPrC7sEKj8apw0PwgWWR0dhcuT0E9cY1c2VXHaF778VXzgI/F9xRS8s1GqUMQb25eTTKGYJ6ddNPsS1pCOqMDAXKP64xf91IP64ZGisUfgNmblLpxzVHc4HqyB3yJXn+4hd9XDM21ye8TVfm8pTs45p87+A17pjlBebqInK/2ybm4iLOLWFy62WL2bY0ndvjDlpW+oRGRY9NumcqeS8YF5kmvW5cshscqW2a/tvwvnHJPFMJvQFLN2ls45LZ4Mhs0+SdV2rjktrg/GHK+JrEnVdm45Lc4Ii8AYuf0GgfmxLPVBJWTmmxO68Hj01BbF5KfG/7+X35cOMSG40Cb8C6t9+WTzcu9w1OU16b7m+/Q54PgvtoFHUDFtldfjTmjct1g7P7jVA2LaLcuTYulw1OU9ru4vucOufG5bLB+SZOZNuu0MblPBr/EqYhcGrSQhuX+Vpam7aKnh2cRqOzx2xaYfH/weQQ2o9BqEzHyepSAAAAAAAAAAAAAAAAAAAAgP/SPxPhHExNDPgFAAAAAElFTkSuQmCC'></img></button>
                                <button className='image' style={{ backgroundColor: "hsl(0, 0%, 100%)", marginRight:"10px"}}><img className='img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHrmnqUGO6289bu3f1ru9YoV9azO52bYvL8QacuxRV7RVoMRGmLiIfy43Vk7rY_wWyfwo&usqp=CAU'></img></button>
                                <button className='image' style={{ backgroundColor: "hsl(0, 0%, 100%)",marginRight:"10px" }}><img className='img' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAACuCAMAAAClZfCTAAAAgVBMVEX////dISHbAADdHBzcFBTcCgrcDw/cGxv75+fcFhb++PjcERHcBgb98/PztbXpfn7xrq73z8/64uLwpKTlXl7jTk787e3eJibxqqr52tr2x8fmaGjgNDTvnp7si4vnd3fjUFDfLy/1wMDtlpbgOjrlW1vfMjLpdHT3zMzqhob429t1TFpeAAAD3UlEQVR4nO3cWXuqMBAGYBMgbCqCIKC4dUP9/z/wYO1iba0LE9Mzfu+tN8k8mclG7HQAAAAAAAAAAAAAAAAAAAAAAAAAAADgBoJe3J/Oonldz6PZtB/3AtMt+lvKwTzzpXRUaDdC5UjpZ/NBabpdf0QQR5V0bFcccG1HVlGMweRNF1ZoHYbnXfPTYuqZbqNRyWzpfBs+B4PJWc4S0+00xltbztEBtDeUHGt9nyOpN8yPZ9hhvuXDnun23l6cnhugXZDS2HSLb20o7PMDtGWLoek235Q3kRcMobeBJCd3VJHi7MIh9DaQsrtJtnLpXxMhIfzlnay3V9aJpdBxrrUy3fpbeBBXR6iJkXgw3X794rxFhJoY5ezrUbJsFaEmRkvm25HR4qq5bJ+9GJnuhVZz1TZCQqi56V7oNLxytv/KZ7zO9sTFa+qfWILvMjttXYh27NR0T3Tpd2kiJES3b7oveoyylvP9JzfjOas9OlQREsJ5NN0bHbyKpFbvWBXHij0lqtU79tR0fzSgHETbYWS6P/QeJGWEhJD8tvwTkoX1J39iukfUvJw0z5pMy7kV7II4z5pMK0z3iRh1nvHLNO+JOM+aTHvilWkx+SBqhhGvI1rKzcc7ZpsQ+lLErhjRl6JtMTLdK0oj+gBtcToRKTXkWZNpnK6vx6S7/Hf22HS/CPUJ7oa+U5yOZwca5vxm1mcVIrKD/X3dgel+ESr0hIjTRhYhOklTLeKUaH2U61Me9Ez6nI6vV3qWjpw+fEw07GKbfSyn79UC6sP91wjlrN6q0X3x8MnNTPeK1FxDMQp5fdCnY9ZnNed3OmVOH6Kc03FRp9OjL0ZuxuwV34x88ahmpvtEbEx/Yc3pzHGrR30HYj0xyzP6y0ZmF41bCfUnWJx2H29S0osin+PX6WPaEHEr1q+onjdsMX3iMKb87prlIKJ5jLbD9klaYhGNI4vVYdoXQ6KJXzJ+s/dM86rx2XQ/NCpfCDb87guvU5AD/bB9iEJeR2nfTFuXI8nxDdEXdcuZX9Wme6BdkLaKkUpZ3Qz9LJi0yDU5uYMINTGqr46RrO8iQo3av2qZbfn869CHx1N/ePkTl+FB4y9WLxcXbfXC6UOQMyS1f9FAcv2a7db1mKCoLlhph1VxL4V63ygKz8w2FUacnntcooyEOjm3WUpErPetJ5RRpX6tSa6q7jpAW16ROc7P6yTLd5ys4PUC9kqbwSSXXeW7H4GyXF91ZT4ZbEy37e8I4mKdZpVQsqFElaXrAn+7/00w8pJN2dgk3gjhAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACA/8w/rZg21islIPAAAAAASUVORK5CYII='></img></button>
                                <button className='image' style={{ backgroundColor: "hsl(0, 0%, 100%)", }}><img className='img' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAACWCAMAAAAfSh8xAAAAgVBMVEXuHCX//wD2hhT//QDzWRv1fxX+9AL3jhLvKCP4pA/vLCL5rQ3/+wHvMCL/+QH+9gHzYxn7wwr96QT6vgv4nRDzXhr70AjxSR7+8ALwOyDyUhz0cRf5swz6uAz95wT81gf4qA73lRH83Qb7ygn1eRb80wfxQx/0ahj1gBX7ywj94AV8jcCbAAADPElEQVR4nO3baVfqMBAGYCKlpECBLnSxgIJFrvz/H3i7orLYiXRJ6vt88HiOjWfGpklmioMBAAAA1GvZdQBNW3ldR9AYbcSTr77udB1IczzdeDe3bNp1HM3xh4wFjO26jqNBBkutJ13H0ZzJPEtxYbx3HcnvHCuvGLPSVMX7yG1ecUWUZ/fiHsNWIqrbklVs5dqM6Vay2JjtxFO/acU2YBqxny02LcVTv4DphKsmQdB4JA1ZJU/YinBdvG88lIa8Jhm+Ui5UdsO3kwxJE7BqxZWVlm0EmtCYUKlVNT+QGUJjwpdi31fittpZhrbYoPkhTVFzVDjgPBensWehUXv2wZcee2ooqFq5RYau0KgNY3py45WYpNsiw63QqHU2Jm4oplr556LBpw+K9nktJeUt1J6+c84ZOhc/ubt/FPmlQ9qMnGw8ZCR3n0v+HLtWkF+0bjNyMs0m5BdUHVSTmn/j6ZL2pkynMkGr8syyZ2/J13ApaVdjNPsxv9m4+lc4ghto2/zTDwmeKLG7cq4yn/j0boK0lmEssLl0JNJv5rcY0YZLuRVeCD9uJHhQs5d2z/XWKHY4VcDh8g52HVDdzKtJ2q85Ohj8u8qQuMwo4+0qw7euQ6qXeX0GHyrVYaoU39gt6DWtCp9asMq0PM0rv7XIozdi/ccuTMrjd7oJllsjfZrqchZOXxXvBO28Eiyrxog4WpO0h/FVXiWeK8GiaqSWDG7xx5C4YcrTSfqtEsyqxll1yE/GepO2MXQ7GC6qX5B3Jp2kF5WgvydNU747bzMnSUv8zCapBC+fJG4wtiGM1Yomq9RNfb7Qb92tYzCnLCA8ayiKNZHbdvRun7LDD9KTlZfPUtf593sxlC6NllRa0x6Wk59cNuWD1VbwlZxKXrIyixuUDzgoiZcPYL9KkT+h97fM7+/amR8CzG1/M4yc9BhgMcIbG1VZzN69MjU+evE7oS7YxVHPKMtw7khcDj7InBcV4XYnc8X0gKIvpztx3xr/BVesTaWeiJ2MpceYzD2Lh/AonZrv8969mro0Vve/EagO0veAHyV1WwYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFTyH3WiHVN8niUxAAAAAElFTkSuQmCC'></img></button>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>




        </div>
    )
}
