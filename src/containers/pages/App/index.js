import "./style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Public/Home";
import Login from "../Public/Login";
import Register from "../Public/Register";
import ProductPage from "../Public/Product";
import ProductByTekstur from "../Public/Product/ProductByTekstur";
import NotFound from "../Public/NotFound";
import DetailProductPage from "../Public/DetailProduct";

function App(props) {
  return (
    <Router>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/masuk" element={<Login />} />
        <Route path="/daftar" element={<Register />} />
        <Route path="/produk" element={<ProductPage />} />
        <Route path="/produk/:IDProduct" element={<DetailProductPage />} />
        <Route path="tekstur/:IDTekstur" element={<ProductByTekstur />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
