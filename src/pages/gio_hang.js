import Header from "../components/my_header";
import Footer from "../components/my_footer";
import {NavLink} from "react-router-dom";
export default function GioHang() {
  return (
    <>
        <Header/>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Ten</th>
            <th scope="col">HinhAnh</th>
            <th scope="col">SoLuong</th>
            <th scope="col">Gia</th>
            <th scope="col">ThanhTien</th>
            <th scope="col">X</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>sanpham1</td>
            <td><img className="img" src="aothun.jpeg" alt="Card image cap"style={{width:"100px"}}/></td>
            <td>2</td>
            <td>100</td>
            <td>1000</td>
            <td><button className="btn btn-primary" type="button">Sua</button>-<button className="btn btn-primary" type="button">Sua</button></td>
          </tr>
          
        </tbody>
        
      </table>
      <button className="btn btn-primary" type="button">Tiếp tục mua</button>-<NavLink className="btn btn-primary" type="button" to="/thanh-toan">Thanh toán</NavLink>
      <Footer/>
    </>
  );
}
