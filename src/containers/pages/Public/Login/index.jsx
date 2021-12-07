import { Box, CardMedia } from "@mui/material";
import loginImage from "../../../../assets/svg/login.svg";
import FormSignIn from "../../../organisms/FormSignIn";
import { connect } from "react-redux";
import {
  loginWithEmailApi,
  loginWithFacebookApi,
  loginWithGoogleApi,
} from "../../../../config/Redux/Action";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AppBarLogin from "../../../../components/molecules/AppBarLogin";

const Login = (props) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (props.isLogin) {
      navigate("/");
    }
  });

  const handleLoginFacebook = () => {
    props.loginWithFacebook();
  };

  const handleLoginWithGoole = () => {
    props.loginWithGoole();
  };

  const handleLogin = (email, password) => {
    props.loginWithEmail({ email, password });
  };

  return (
    <Box sx={{ height: "100vh", width: "100vw" }}>
      <AppBarLogin link="/register" title="Daftar" />
      <Box sx={{ display: "flex", mt: 2 }}>
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
          <FormSignIn
            handleLoginWithGoole={handleLoginWithGoole}
            handleLoginWithFacebook={handleLoginFacebook}
            handleInput={handleLogin}
          />
        </Box>
      </Box>
    </Box>
  );
};

const stateRedux = (state) => ({
  isLogin: state.isLogin,
});

const actionRedux = (dispatch) => ({
  loginWithEmail: (data) => dispatch(loginWithEmailApi(data)),
  loginWithFacebook: () => dispatch(loginWithFacebookApi()),
  loginWithGoole: () => dispatch(loginWithGoogleApi()),
});

export default connect(stateRedux, actionRedux)(Login);
