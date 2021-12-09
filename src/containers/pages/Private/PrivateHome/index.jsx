import AppBarPrivate from "../../../../components/molecules/AppBarPrivate";
import {connect} from 'react-redux';
import { LogoutAccount} from "../../../../config/Redux/Action";
import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

function PrivateHome(props) {
  const navigate = useNavigate();

  useEffect(() => {
    if(props.statusLogin !== true){
      navigate('/')
    }
  }, [navigate, props.statusLogin])

  return (
    <div className="PrivateHome">
      <AppBarPrivate handleLogout={props.logout} />
      <h2>nama : {props.dataUser.nama}</h2>
      <p>UID: {props.dataUser.uid}</p>
      <p>image: <img src={props.dataUser.photoURL} alt="photourl" /></p>
    </div>
  );
}

const reduxState = (state) => ({
  statusLogin: state.isLogin,
  dataUser: state.dataUser
})

const reduxAction = (dispatch) => ({
  logout: () => dispatch(LogoutAccount())
})

export default connect(reduxState, reduxAction)(PrivateHome)