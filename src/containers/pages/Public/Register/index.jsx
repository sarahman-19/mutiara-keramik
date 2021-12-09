import { Box, CardMedia } from "@mui/material";
import RegisterImage from "../../../../assets/svg/register.svg";
import FormSignUp from "../../../organisms/FormSignUp";
import { connect } from "react-redux";
import { registerWithEmailApi, saveDataUserApi } from "../../../../config/Redux/Action";
import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import AppBarLogin from "../../../../components/molecules/AppBarLogin";

const Register = (props) => {
  const navigate = useNavigate()

  const [values, setValues] = useState({
    checkPassword: false
  })

  useEffect(() => {
    if(props.isLogin){
      navigate('/')
    }
  })
  
  const handleRegister = async (username, phoneNumber, email, password) => {
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
    const response = await props.registerWithEmail({username, phoneNumber, email, password})
    if(response !== false){
      props.saveDataUser(response.uid, response)
    }else{
      console.log(response)
    }
  };

  return (
    <Box sx={{ height: "100vh", width: "100vw"}}>
    <AppBarLogin link="/masuk" title="Masuk" />
    <Box sx={{ display: "flex", pt:1 }}>
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
  </Box>
  );
};

const reduxState = (state) => ({
  isLogin: state.isLogin
})

const reduxAction = (dispatch) => ({
  registerWithEmail: (data) => dispatch(registerWithEmailApi(data)),
  saveDataUser: (uid, dataUser) => dispatch(saveDataUserApi(uid, dataUser))
})

export default connect(reduxState, reduxAction)(Register);
