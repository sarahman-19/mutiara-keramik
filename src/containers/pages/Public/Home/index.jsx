// module
import { Box } from "@mui/material";
import { useEffect } from "react";
import { connect } from "react-redux";

// local module
import TeksturList from "../../../template/TeksturList";
import { userHaveLogin } from "../../../../config/Redux/Action";
import AppBar from "../../../../components/molecules/AppBar";

const Home = (props) => {
  useEffect(() => {
    props.loginValidate();
  }, [props]);

  return (
    <>
      <AppBar link="/masuk" title="masuk" />
      <Box
        sx={{ display: "flex", justifyContent: "center", m: { xs: 1, md: 2 } }}
      >
        <TeksturList />
      </Box>
    </>
  );
};

const reduxAction = (dispatch) => ({
  loginValidate: () => dispatch(userHaveLogin()),
});

export default connect(null, reduxAction)(Home);
