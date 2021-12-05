import { Box, CardMedia } from "@mui/material";
import RegisterImage from "../../../../assets/svg/register.svg";
import FormSignUp from "../../../organisms/FormSignUp";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "../../../../config/Firebase";

const Register = () => {
  
  const handleRegister = (username, telpon, email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
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
        <FormSignUp handleInput={handleRegister} />
      </Box>
    </Box>
  );
};

export default Register;
