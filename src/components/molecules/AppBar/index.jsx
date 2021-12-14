import AppBarPrivate from "../../atoms/AppBarPrivate";
import AppBarLogin from "../../atoms/AppBarLogin";
import {LogoutAccount} from '../../../config/Redux/Action';
import {connect} from 'react-redux';

const AppBar = (props) => {
  if (props.loginStatus) {
    return <AppBarPrivate handleLogout={props.logout} />;
  }

  return <AppBarLogin link={props.link} title={props.title} />;
};

const reduxAction = (dispatch) => ({
    logout: () => dispatch(LogoutAccount())
  })

export default connect(null, reduxAction)(AppBar);
