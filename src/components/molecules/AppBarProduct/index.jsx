// module
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

// local module
import AppBarSearchPrivate from "../../atoms/AppBarSearchPrivate";
import AppBarSearch from "../../atoms/AppBarSearch";
import { LogoutAccount } from "../../../config/Redux/Action";

const AppBarProduct = (props) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    props.logout();
    navigate("/");
  };

  if (props.loginStatus) {
    return <AppBarSearchPrivate LogoutAccount={handleLogout} />;
  }

  return <AppBarSearch />;
};

const stateRedux = (state) => ({
  loginStatus: state.isLogin,
});

const reduxAction = (dispatch) => ({
  logout: () => dispatch(LogoutAccount()),
});

export default connect(stateRedux, reduxAction)(AppBarProduct);
