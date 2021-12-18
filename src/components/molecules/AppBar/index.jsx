// module
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

// local module
import AppBarPrivate from "../../atoms/AppBarPrivate";
import AppBarLogin from "../../atoms/AppBarLogin";
import { LogoutAccount } from "../../../config/Redux/Action";

const AppBar = (props) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    props.logout();
    navigate("/");
  };

  if (props.loginStatus) {
    return <AppBarPrivate LogoutAccount={handleLogout} />;
  }

  return <AppBarLogin link={props.link} title={props.title} />;
};

const stateRedux = (state) => ({
  loginStatus: state.isLogin,
});

const reduxAction = (dispatch) => ({
  logout: () => dispatch(LogoutAccount()),
});

export default connect(stateRedux, reduxAction)(AppBar);
