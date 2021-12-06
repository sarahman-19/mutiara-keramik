import { Box, CardMedia } from "@mui/material";
import loginImage from "../../../../assets/svg/login.svg";
import FormSignIn from "../../../organisms/FormSignIn";
import { connect } from "react-redux";
import { loginWithEmailApi } from "../../../../config/Redux/Action";

const Login = (props) => {

  const handleLogin = (email, password) => {
    props.loginWithEmail({email, password})
  };

  return (
    <Box sx={{ display: "flex", height: "100vh", width: "100vw" }}>
      <Box
        sx={{
          flexGrow: 1,
          display: { xs: "none", md: "flex" },
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CardMedia
          sx={{ width: "580px", height: "580px" }}
          component="img"
          src={loginImage}
          alt="login image"
        />
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FormSignIn handleInput={handleLogin} />
      </Box>
    </Box>
  );
};

const stateRedux = (state) => ({
  isLogin: state.isLogin,
});

const actionRedux = (dispatch) => ({
  loginWithEmail: (data) => dispatch(loginWithEmailApi(data))
});

export default connect(stateRedux, actionRedux)(Login);
