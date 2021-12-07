import "./style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Public/Home";
import PrivateHome from "../Private/PrivateHome";
import Login from "../Public/Login";
import Register from "../Public/Register";
import { connect } from "react-redux";
import ProductPage from "../Public/Product";
import NotFound from '../Public/NotFound';

function App(props) {
  return (
      <Router>
        <Routes>
          <Route path="/" index element={props.Login ? <PrivateHome /> : <Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
  );
}

const stateRedux = (state) => ({
  Login: state.isLogin
})

export default connect(stateRedux, null)(App);
