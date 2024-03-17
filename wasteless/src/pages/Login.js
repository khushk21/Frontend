import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import AppBarComponent from "../components/AppBar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [obscureText, setObscureText] = useState(true);
  const navigate = useNavigate();

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const validateForm = () => {
    return username !== "" && password !== "" && validatePassword(password);
  };

  const handleSignUp = async () => {
    // Validation logic here...
    if (!validateForm()) {
      alert("Please fill in all required fields correctly");
      return;
    }

    const user = {
      userName: username,
      password: password,
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/userLogin",
        user
      );
      if (response.data.error === null) {
        navigate(`/home?username=${username}`);
      } else {
        alert(response.data.error.message);
      }
    } catch (error) {
      alert("Unable to Login");
    }

    // Simulating API call
    // const usernameEmailExist = await validateUsernameEmail(username, email);

    // if (usernameEmailExist) {
    //   // Show error message
    //   alert(
    //     `Entered ${usernameEmailExist} already exists. Please enter another ${usernameEmailExist} and try again.`
    //   );
    // } else {
    //   // Call Spring Boot API for registration
    //   // Redirect to OTP screen or show success message
    //   alert("Registration successful!");
    //   // Redirect or show success message
    // }
  };

  return (
    <div
      className="login-container"
      style={{
        backgroundColor: "#8bc34a",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <AppBarComponent />
      <Card style={{ maxWidth: 400 }}>
        <CardContent>
          <Typography
            variant="h4"
            gutterBottom
            style={{ textAlign: "center", color: "#8bc34a" }}
          >
            Login
          </Typography>

          <FormControl fullWidth margin="normal">
            <TextField
              label="Username"
              variant="outlined"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel>Password</InputLabel>
            <Input
              type={obscureText ? "password" : "text"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setObscureText(!obscureText)}
                    edge="end"
                  >
                    {obscureText ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </IconButton>
                </InputAdornment>
              }
              error={password !== "" && !validatePassword(password)}
              aria-describedby="password-helper-text"
            />
            {password !== "" && !validatePassword(password) && (
              <FormHelperText id="password-helper-text">
                Password must be at least 6 characters
              </FormHelperText>
            )}
          </FormControl>

          <Button
            variant="contained"
            color="primary"
            onClick={handleSignUp}
            fullWidth
            style={{ marginTop: "20px" }}
            disabled={!validateForm()}
          >
            Login
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
