import "./style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Public/Home";
import PrivateHome from "../Private/PrivateHome";
import Login from "../Public/Login";
import Register from "../Public/Register";
import { connect } from "react-redux";
import ProductPage from "../Public/Product";
import ProductByTekstur from "../Public/Product/ProductByTekstur";
import NotFound from "../Public/NotFound";
import ProductPagePrivate from "../Private/ProductPrivate";

function App(props) {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          index
          element={props.Login ? <PrivateHome /> : <Home />}
        />
        <Route path="/masuk" element={<Login />} />
        <Route path="/daftar" element={<Register />} />
        <Route
          path="/produk"
          element={props.Login ? <ProductPagePrivate /> : <ProductPage />}
        />
        <Route path="tekstur/:IDTekstur" element={<ProductByTekstur />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

const stateRedux = (state) => ({
  Login: state.isLogin,
});

export default connect(stateRedux, null)(App);
