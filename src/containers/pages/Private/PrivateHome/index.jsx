import AppBarPrivate from "../../../../components/molecules/AppBarPrivate";
import {connect} from 'react-redux';
import { LogoutAccount} from "../../../../config/Redux/Action";
import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import TeksturList from "../../../template/TeksturList";
import {Box} from '@mui/material';

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
      <Box sx={{ display: "flex", justifyContent: "center", mt: {xs: 1, md: 2}}}>
        <TeksturList />
      </Box>
    </div>
  );
}

const reduxState = (state) => ({
  statusLogin: state.isLogin
})

const reduxAction = (dispatch) => ({
  logout: () => dispatch(LogoutAccount())
})

export default connect(reduxState, reduxAction)(PrivateHome)