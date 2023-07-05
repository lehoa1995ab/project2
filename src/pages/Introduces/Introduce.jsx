import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
import SimpleSlider from '../../components/Navbars/Slider';
import { Link } from 'react-router-dom';



export default function Introduce() {
    const [random, setRandom] = useState();

    return (
        <div  style={{margin:"0px",backgroundColor:"hsl(0, 0%, 98%)"}} >
            <div style={{}}>
                <Carousel>
                    <img 
                         height={400}
                        className="d-block w-100"
                        src="https://png.pngtree.com/background/20210710/original/pngtree-blue-fresh-background-picture-picture-image_1053509.jpg"
                        alt="Carousel Image"
                    />
                    <Carousel.Caption style={{ color: "black" }}>
                        <h2>Giới thiệu</h2>
                    </Carousel.Caption>
                </Carousel>
                <h5 style={{
                    display: "flex",
                    textAlign: "center",
                    justifyContent: "center",
                    padding: "15px",
                    backgroundColor:"hsl(30, 87%, 94%)"
                    
                    
                }}><Link to="/" style={{textDecoration:"none",color:"black"}}>Trang chủ/</Link><a style={{color:"red"}}>Giới thiệu</a></h5>
            </div>
            <div style={{ height:"400px" }}>
                <div size={12} style={{
                    display: "flex",
                    justifyContent: 'center',
                    height:"400px",
                    margin:"50px 50px",
                }}>
                    <img style={{marginLeft:"40px"}}
                        className='imgbody'
                        width={500}
                        height={400}
                        src={`https://dichthuatmientrung.com.vn/wp-content/uploads/2020/07/mypham-1-600x388.jpg?${random}`}
                        placeholder={
                            <img className='imgbodys'
                                preview={false}
                                src="https://dichthuatmientrung.com.vn/wp-content/uploads/2020/07/mypham-1-600x388.jpg"
                                width={200}
                                alt="Placeholder Image"
                            />
                        }
                        alt="Image"
                    />
                    <div style={{ margin: " 100px 100px" }}>
                        <h4>
                            Giới thiệu về chúng tôi</h4>
                        <p>Chúng tôi cung cấp dịch vụ đa chủng loại hàng thời trang, mỹ phẩm, thực phẩm cao cấp, hàng công nghệ... Là 1 trong những doanh nghiệp hàng đầu trong ngành xuất nhập khẩu hàng hiệu cho nhiều hãng nổi tiếng trên thế giới.</p>
                        <p>“ IVA luôn tôn trọng khách hàng, lấy niềm vui, sự hài lòng của khách hàng để làm động lực, không ngừng tìm kiếm các sản phẩm tốt nhất để mỗi khách hàng đều có thể trở nên tự tin và xinh đẹp hơn. ”</p>
                    </div>
                </div>
            </div>
            <div style={{ paddingTop: "30px" }}>
                <div size={12} style={{
                    display: "flex",
                    paddingTop: "30px",
                    justifyContent: 'center',
                }}>
                    <img
                        className='imgbody'
                        width={800}
                        height={300}
                        src={`https://cdn.tgdd.vn/Files/2021/10/08/1388863/my-pham-thuan-chay-my-pham-sach-va-my-pham-huu-co-co-phai-la-mot-202110082321000878.jpg?${random}`}
                        placeholder={
                            <img className='imgbodys'
                                preview={false}
                                src="https://cdn.tgdd.vn/Files/2021/10/08/1388863/my-pham-thuan-chay-my-pham-sach-va-my-pham-huu-co-co-phai-la-mot-202110082321000878.jpg"
                                width={200}
                                alt="Placeholder Image"
                            />
                        }
                        alt="Image"
                        style={{
                            marginRight: "50px",
                        }}
                    />
                    <img
                        className='imgbody'
                        width={400}
                        height={300}
                        src={`https://bizweb.dktcdn.net/100/413/259/articles/my-pham-sinh-hoc-thumb.jpg?v=1673510139747${random}`}
                        placeholder={
                            <img className='imgbodys'
                                preview={false}
                                src="https://bizweb.dktcdn.net/100/413/259/articles/my-pham-sinh-hoc-thumb.jpg?v=1673510139747"
                                width={200}
                                alt="Placeholder Image"
                            />
                        }
                        alt="Image"
                    />
                </div>
            </div>
            <div style={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
                lineHeight: "25px",
                padding: "30px 70px"

            }}>
                <div>
                    <h5>Nhiệm vụ của chúng tôi</h5>
                    <p>IVA  luôn nỗ lực không ngừng nhằm nâng cao chất lượng sản phẩm & dịch vụ để khách hàng có được những trải nghiệm mua sắm tốt nhất.</p>
                </div>
                <div style={{ marginRight: "20px" }}>
                    <h5>Sáng tạo</h5>
                    <p>Tại IVA luôn có đầy đủ mẫu thử của mỗi sản phẩm và nhân viên tư vấn, giúp khách hàng dễ dàng chọn lựa và tăng trải nghiệm mua sắm.</p>
                </div>
                <div>
                    <h5>Sự bền vững</h5>
                    <p>IVA  đều được cam kết 100% chính hãng, đảm bảo nguồn gốc xuất xứ, có đầy đủ hóa đơn mua hàng VAT và tem phụ Tiếng Việt, với mức giá luôn tốt hàng đầu thị trường trong mọi thời điểm.</p>
                </div>
            </div>
            <div>
            <div style={{
                textAlign:"center"
            }}>
            <h1>Đội Ngũ Của Chúng Tôi</h1>
            <p>Luôn nỗ lực không ngừng nhằm nâng cao chất lượng sản phẩm & dịch vụ để khách hàng</p>
            </div>
            <div style={{display:"flex",
            justifyContent:"space-around",
            flexWrap:"wrap",
            alignItems:"center",
            padding:"50px",


        }}>
                <div><img
                    src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
                    className="rounded-circle mb-3"
                    style={{ width: 350 }}
                    alt="Avatar"
                />
                    <h5 className="mb-2">
                        <strong>Cody Fisher</strong>
                    </h5>
                    <p className="text-muted">
                    McDonald's
                    </p></div>
                <div><img
                    src="https://supperclean.vn/wp-content/uploads/2020/12/190934878_186127183413349_1568062301335862440_n.jpg"
                    className="rounded-circle mb-3"
                    style={{ width: 350 }}
                    alt="Avatar"
                />
                    <h5 className="mb-2">
                        <strong>Cody Fisher</strong>
                    </h5>
                    <p className="text-muted">
                    Nintendo
                    </p></div>
                <div><img
                    src="https://samkyvuong.vn/wp-content/uploads/2022/05/gai-tay-lanh-lung.jpg"
                    className="rounded-circle mb-3"
                    style={{ width: 350 }}
                    alt="Avatar"
                />
                    <h5 className="mb-2">
                        <strong>Floyd Miles</strong>
                    </h5>
                    <p className="text-muted">
                    MasterCard
                    </p></div>
                <div><img
                    src="https://i.pinimg.com/550x/63/cf/39/63cf397ac6bcf58def8bbce8d6fcf048.jpg"
                    className="rounded-circle mb-3"
                    style={{ width: 350 }}
                    alt="Avatar"
                />
                    <h5 className="mb-2">
                        <strong>Cameron Williamson</strong>
                    </h5>
                    <p className="text-muted">
                    Sony
                    </p></div>
                <div><img
                    src="https://bytuong.com/wp-content/uploads/2021/06/Trai-T%C3%A2y-khi-y%C3%AAu-th%E1%BA%ADt-l%C3%B2ng-th%C3%AC-c%C3%B3-nh%E1%BB%AFng-bi%E1%BB%83u-hi%E1%BB%87n-nh%C6%B0-th%E1%BA%BF-n%C3%A0o.jpg"
                    className="rounded-circle mb-3"
                    style={{ width: 350 }}
                    alt="Avatar"
                />
                    <h5 className="mb-2">
                        <strong>Jenny Wilson</strong>
                    </h5>
                    <p className="text-muted">
                    Johnson & Johnson
                    </p></div>
                <div><img
                    src="https://i.pinimg.com/736x/ec/c3/a7/ecc3a7968fcb4d1c04ba20cbe4845d7b.jpg"
                    className="rounded-circle mb-3"
                    style={{ width: 350 }}
                    alt="Avatar"
                />
                    <h5 className="mb-2">
                        <strong>JRonald Richards</strong>
                    </h5>
                    <p className="text-muted">
                    The Walt Disney Company
                    </p></div>
            </div>
            </div>
        </div>
    );
}
