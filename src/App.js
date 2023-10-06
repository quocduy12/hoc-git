import TrangChu from "./pages/trang_chu";
import SanPham from "./pages/san_pham";
import GioHang from "./pages/gio_hang";
import ThanhToan from "./pages/thanh_toan";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<TrangChu />}></Route>
        <Route path="/san-pham" element={<SanPham />}></Route>
        <Route path="/gio-hang" element={<GioHang />}></Route>
        <Route path="/thanh-toan" element={<ThanhToan />}></Route>
      </Routes>
    </>
  );
}

export default App;
