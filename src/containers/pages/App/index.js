import "./style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Public/Home";
import Login from "../Public/Login";
import Register from "../Public/Register";
import { Provider } from "react-redux";
import Store from "../../../config/Redux/Store";

function App() {
  return (
    <Provider store={Store}>
      <Router>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
