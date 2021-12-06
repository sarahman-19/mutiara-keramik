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
  Collapse,
  FormHelperText
} from "@mui/material";

import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";

const FormSignUp = (props) => {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    password: "",
    showPassword: false,
    email: "",
    username: "",
    telpon: ""
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
        <Typography variant="h3">Daftar</Typography>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <TextField
          sx={{ mb: 2 }}
          margin="dense"
          id="UsernameInput"
          label="Username"
          type="text"
          variant="outlined"
          onChange={handleChange("username")}
          size="small"
        />

        <TextField
          sx={{ mb: 2 }}
          margin="dense"
          id="TelponInput"
          type="tel"
          placeholder="0812-3456-7890"
          pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}"
          label="Nomor Telpon"
          variant="outlined"
          onChange={handleChange("telpon")}
          size="small"
        />

        <TextField
          sx={{ mb: 2 }}
          margin="dense"
          id="EmailInput"
          label="Email"
          type="email"
          variant="outlined"
          onChange={handleChange("email")}
          size="small"
        />

        <FormControl sx={{ mb: 1 }} variant="outlined">
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
        <Collapse in={props.checkPassword} sx={{ mb: 2 }}>
          <FormHelperText sx={{ color: "red" }}>
          password kurang dari 6 karakter
          </FormHelperText>
        </Collapse>

        <LoadingButtonComp
          title="Daftar"
          handleSubmit={() =>
            props.handleInput(
              values.username,
              values.telpon,
              values.email,
              values.password
            )}
          loadingStatus={props.Loading}
        />

        <Button
          sx={{ textAlign: "center", mt: 2 }}
          onClick={() => navigate("/login")}
          variant="text"
        >
          <Typography variant="caption">Sudah Punya Akun</Typography>
        </Button>
      </Box>
    </Box>
  );
};

const reduxState = (state) => ({
  Loading: state.isLoading
})

export default connect(reduxState, null)(FormSignUp);
