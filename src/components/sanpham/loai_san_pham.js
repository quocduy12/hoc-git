import React from 'react';
import TheSanPham from "./the_san_pham";

export default function LoaiSanPham(props){
    const listSanPham = props.data.ds_san_pham.map(function(item, index){
        return (
            <TheSanPham key={index} data={item} />
        );
    });

    return (
        <>
            <h1 className="ten-loai-san-pham">{props.data.ten}</h1>
            <div className="content" style={{ display: "flex" }} > {listSanPham} </div>
            
        </>
    );
}