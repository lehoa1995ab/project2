import Carousel from 'react-bootstrap/Carousel';

export default function Sidebar() {
  return (
    <Carousel style={{marginBottom:"50px"}}>
        <img
          className="d-block w-100"
          src="https://png.pngtree.com/background/20210709/original/pngtree-cosmetic-pink-background-simple-literary-picture-image_914316.jpg"
          alt="First slide"
          style={{opacity:"0.7"}}
        />
        <Carousel.Caption style={{color:"black"}}>
          <h3>Rosea Crystal</h3>
          <h1>100% Nguyên Bản & Hữu Cơ</h1>
          <h4>Chúng tôi cung cấp dịch vụ đa chủng loại hàng thời trang,
             mỹ phẩm, thực phẩm cao cấp, hàng công nghệ... Là 1 trong những doanh nghiệp hàng đầu trong ngành xuất nhập 
            khẩu hàng hiệu cho nhiều hãng nổi tiếng trên thế giới.</h4>
        </Carousel.Caption>
    </Carousel>
  );
}
