import AppBar from "../../../../components/molecules/AppBar";
import { Box } from "@mui/material";
import { useEffect } from "react";
import TeksturList from "../../../template/TeksturList";
import {connect} from 'react-redux';
import {userHaveLogin} from '../../../../config/Redux/Action';
import {useNavigate} from 'react-router';

function Home(props) {
  const navigate = useNavigate()

  useEffect(() => {
    if(props.loginStatus === false){
      navigate('/')
    }
    props.loginValidate()
  }, [navigate, props]);

  return (
    <div className="Home">
      <AppBar loginStatus={props.loginStatus} link='/masuk' title='masuk' />
      <Box sx={{ display: "flex", justifyContent: "center", mt: {xs: 1, md: 2}}}>
        <TeksturList />
      </Box>
    </div>
  );
}

const reduxState = (state) => ({
  loginStatus: state.isLogin
})

const reduxAction = (dispatch) => ({
  loginValidate: () => dispatch(userHaveLogin())
})

export default connect(reduxState, reduxAction)(Home);
