import React from 'react';
import HinhAnh from "./hinh_anh";
import Ten from "./ten";
import Gia from "./gia";

export default function TheSanPham(props) {
  const img = props.data?.img;
  const ten = props.data?.ten;
  const gia = props.data?.gia;
  
  return (
    <div className="card"  style={{ width: "18rem" }}>
      <HinhAnh url={img} />
      <div className="card-body" style={{ textAlign: "center" }}>
        <Ten ten={ten} />
        <Gia gia={gia} />
        <a href="#" className="btn btn-primary">
          Mua
        </a>
      </div>
    </div>
  );
}
