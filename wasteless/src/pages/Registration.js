import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
import axios from "axios";
import AppBarComponent from "../components/AppBar";

const Registration = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [obscureText, setObscureText] = useState(true);
  const [confirmObscureText, setConfirmObscureText] = useState(true);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const validateForm = () => {
    return (
      name !== "" &&
      username !== "" &&
      email !== "" &&
      validateEmail(email) &&
      password !== "" &&
      validatePassword(password) &&
      confirmPassword !== "" &&
      password === confirmPassword
    );
  };

  const handleSignUp = async () => {
    // Validation logic here...
    if (!validateForm()) {
      alert("Please fill in all required fields correctly");
      return;
    }

    const newUser = {
      userName: username,
      name: name,
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/registerUser",
        newUser
      );
      if (response.data === "Username already exists. Please try again.") {
        alert(response.data);
      } else {
        navigate("/login");
      }
    } catch (error) {
      alert("Unable to save");
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
      className="signup-container"
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
            Sign Up
          </Typography>
          <FormControl fullWidth margin="normal">
            <TextField
              label="Name"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <TextField
              label="Email"
              variant="outlined"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              error={email !== "" && !validateEmail(email)}
              helperText={
                email !== "" &&
                !validateEmail(email) &&
                "Enter a valid email address"
              }
            />
          </FormControl>
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
          <FormControl fullWidth margin="normal">
            <InputLabel>Confirm Password</InputLabel>
            <Input
              type={confirmObscureText ? "password" : "text"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setConfirmObscureText(!confirmObscureText)}
                    edge="end"
                  >
                    {confirmObscureText ? (
                      <VisibilityIcon />
                    ) : (
                      <VisibilityOffIcon />
                    )}
                  </IconButton>
                </InputAdornment>
              }
              error={confirmPassword !== "" && password !== confirmPassword}
              aria-describedby="confirm-password-helper-text"
            />
            {confirmPassword !== "" && password !== confirmPassword && (
              <FormHelperText id="confirm-password-helper-text">
                Passwords do not match
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
            Sign Up
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Registration;
