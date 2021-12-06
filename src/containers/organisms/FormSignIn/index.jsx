import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

import LoadingButtonComp from "../../../components/atoms/LoadingButtonComp";

import {
  Box,
  TextField,
  Typography,
  Button,
  OutlinedInput,
  InputAdornment,
  IconButton,
  InputLabel,
  FormControl,
  Divider,
} from "@mui/material";

import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FacebookIcon from "@mui/icons-material/Facebook";

const FormSignIn = (props) => {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    password: "",
    showPassword: false,
    email: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box sx={{ p: 4, borderRadius: 5, boxShadow: 4 }}>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h3">Masuk</Typography>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
        <Button variant="outlined" startIcon={<FacebookIcon />}>
          Masuk Dengan Facebook
        </Button>
      </Box>

      <Divider>atau</Divider>

      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <TextField
          sx={{ mb: 2 }}
          margin="dense"
          id="EmailInput"
          label="Email"
          variant="outlined"
          onChange={handleChange("email")}
          size="small"
        />

        <FormControl sx={{ mb: 2 }} variant="outlined">
          <InputLabel htmlFor="passwordInput">Password</InputLabel>
          <OutlinedInput
            size="small"
            id="passwordInput"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? (
                    <VisibilityOffIcon />
                  ) : (
                    <VisibilityIcon />
                  )}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <LoadingButtonComp
          title="Masuk"
          handleSubmit={() => props.handleInput(values.email, values.password)}
          loadingStatus={props.Loading}
        />
        <Button
          sx={{ textAlign: "center", mt: 2 }}
          onClick={() => navigate("/register")}
          variant="text"
        >
          <Typography variant="caption">Belum Punya Akun</Typography>
        </Button>
      </Box>
    </Box>
  );
};

const reduxState = (state) => ({
  Loading: state.isLoading,
});

export default connect(reduxState, null)(FormSignIn);
