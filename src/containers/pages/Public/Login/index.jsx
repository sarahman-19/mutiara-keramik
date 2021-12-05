import { Box, CardMedia } from "@mui/material";
import loginImage from "../../../../assets/svg/login.svg";
import FormSignIn from "../../../organisms/FormSignIn";
import { connect } from "react-redux";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "../../../../config/Firebase";

const Login = () => {
  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
      });
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

const actionRedux = (dispatch) => ({});

export default connect(stateRedux, actionRedux)(Login);
