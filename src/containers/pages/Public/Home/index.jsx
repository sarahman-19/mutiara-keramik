import AppBar from "../../../../components/molecules/AppBar";
import { Box } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TeksturList from "../../../template/TeksturList";
import {connect} from 'react-redux';

function Home(props) {
  const navigate = useNavigate();

  useEffect(() => {
    if (props.statusLogin !== true) {
      navigate("/");
    }
  }, [navigate, props.statusLogin]);

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

export default connect(reduxState, null)(Home);
