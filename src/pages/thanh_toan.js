import Header from "../components/my_header";
import Footer from "../components/my_footer";

export default function ThanhToan() {
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
          </tr>
          
        </tbody>
        
      </table>
      <button className="btn btn-primary" type="button">Thanh Toan</button>
      <Footer/>
    </>
  );
}
