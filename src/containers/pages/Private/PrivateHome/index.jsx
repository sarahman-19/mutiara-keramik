import AppBarPrivate from "../../../../components/molecules/AppBarPrivate";
import {connect} from 'react-redux';
import { LogoutAccount } from "../../../../config/Redux/Action";

function PrivateHome(props) {
  return (
    <div className="PrivateHome">
      <AppBarPrivate handleLogout={props.logout} />
    </div>
  );
}

const reduxState = (state) => ({
  isLogin: state.isLogin
})

const reduxAction = (dispatch) => ({
  logout: () => dispatch(LogoutAccount())
})

export default connect(reduxState, reduxAction)(PrivateHome)