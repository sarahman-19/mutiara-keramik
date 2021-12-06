import { Box, CardMedia } from "@mui/material";
import RegisterImage from "../../../../assets/svg/register.svg";
import FormSignUp from "../../../organisms/FormSignUp";
import { connect } from "react-redux";
import { registerWithEmailApi } from "../../../../config/Redux/Action";
import {useState} from 'react';

const Register = (props) => {
  const [values, setValues] = useState({
    checkPassword: false
  })
  
  const handleRegister = (username, telpon, email, password) => {
    if(password.length < 6){
      return setValues({
        ...values,
        checkPassword: true
      })
    }
    setValues({
      ...values,
      checkPassword: false
    })
    return props.registerWithEmail({email, password})
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
          src={RegisterImage}
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
        <FormSignUp checkPassword={values.checkPassword} handleInput={handleRegister} />
      </Box>
    </Box>
  );
};

const reduxState = (state) => ({
  isLogin: state.isLogin
})

const reduxAction = (dispatch) => ({
  registerWithEmail: (data) => dispatch(registerWithEmailApi(data))
})

export default connect(reduxState, reduxAction)(Register);
