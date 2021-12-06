import { Box, CardMedia } from "@mui/material";
import loginImage from "../../../../assets/svg/login.svg";
import FormSignIn from "../../../organisms/FormSignIn";
import { connect } from "react-redux";
import { loginWithEmailApi, loginWithFacebookApi } from "../../../../config/Redux/Action";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (props.isLogin) {
      navigate("/");
    }
  });

  const handleLoginFacebook = () => {
   props.loginWithFacebook()
  };

  const handleLogin = (email, password) => {
    props.loginWithEmail({ email, password });
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
        <FormSignIn
          handleLoginWithFacebook={handleLoginFacebook}
          handleInput={handleLogin}
        />
      </Box>
    </Box>
  );
};

const stateRedux = (state) => ({
  isLogin: state.isLogin,
});

const actionRedux = (dispatch) => ({
  loginWithEmail: (data) => dispatch(loginWithEmailApi(data)),
  loginWithFacebook: () => dispatch(loginWithFacebookApi())
});

export default connect(stateRedux, actionRedux)(Login);
