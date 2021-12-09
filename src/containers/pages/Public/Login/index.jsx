import { Box, CardMedia } from "@mui/material";
import loginImage from "../../../../assets/svg/login.svg";
import FormSignIn from "../../../organisms/FormSignIn";
import { connect } from "react-redux";
import {
  loginWithEmailApi,
  loginWithFacebookApi,
  loginWithGoogleApi,
  saveDataUserApi
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

  const handleLoginFacebook = async () => {
    const response = await props.loginWithFacebook()
    if(response !== false){
      props.saveDataUser(response.uid, response)
    }else{
      console.log(response)
    }
  };

  const handleLoginWithGoogle = async () => {
    const response = await props.loginWithGoole();
    if(response !== false){
      props.saveDataUser(response.uid, response)
    }else{
      console.log(response)
    }
  };

  const handleLogin = async (email, password) => {
    const response = await props.loginWithEmail({ email, password });
    if(response){
      console.log(true)
    }else{
      console.log(false)
    }
  };

  return (
    <Box sx={{ height: "100vh", width: "100vw" }}>
      <AppBarLogin link="/daftar" title="Daftar" />
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
            handleLoginWithGoole={handleLoginWithGoogle}
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
  dataUser: state.dataUser
});

const actionRedux = (dispatch) => ({
  loginWithEmail: (data) => dispatch(loginWithEmailApi(data)),
  loginWithFacebook: () => dispatch(loginWithFacebookApi()),
  loginWithGoole: () => dispatch(loginWithGoogleApi()),
  saveDataUser: (uid, dataUser) => dispatch(saveDataUserApi(uid, dataUser))
});

export default connect(stateRedux, actionRedux)(Login);
