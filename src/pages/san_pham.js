import React from 'react';
import Header from "../components/my_header";
import Footer from "../components/my_footer";
import LoaiSanPham from "../components/sanpham/loai_san_pham";


export default function SanPham() {
  const dsLoaiSanPham = [
    {
      'ten': 'Loai san pham 1',
      'ds_san_pham': [
        {
          'img': 'aothun.jpeg',
          'ten': 'San pham 15',
          'gia': 1000,
        },
        {
          'img': 'aothun.jpeg',
          'ten': 'Iphone 14',
          'gia': 2000,
        },
      ],
    },
    {
      'ten': 'Loai san pham 2',
      'ds_san_pham': [
        {
          'img': 'aothun.jpeg',
          'ten': 'Iphone 13',
          'gia': 11000,
        },
        {
          'img': 'aothun.jpeg',
          'ten': 'San pham oppo',
          'gia': 22000,
        },
      ],
    },
  ];

  const listLoaiSanPhams = dsLoaiSanPham.map(function(item, index) {
    return <LoaiSanPham key={index} data={item} />;
  });

  return (
    <>
      <Header />
      {listLoaiSanPhams}
      
      <Footer />
    </>
  );
}
