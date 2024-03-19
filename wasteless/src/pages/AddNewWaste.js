import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import { useLocation } from "react-router-dom";
import CardContent from "@mui/material/CardContent";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Navbar from "../components/NavBar";
import MenuItem from "@mui/material/MenuItem";
import axios from "axios";

const AddNewWaste = () => {
  const location = useLocation();
  const username = new URLSearchParams(location.search).get("username");
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    date: "",
    weight: "",
    category: "",
  });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear validation error if user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }

    // Check if the selected date is greater than the current date
    if (name === "date") {
      const selectedDate = new Date(value);
      const currentDate = new Date();
      if (selectedDate > currentDate) {
        setErrors({
          ...errors,
          date: "Date cannot be greater than current date",
        });
      } else {
        setErrors({ ...errors, date: "" });
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validation
    let formValid = true;
    const newErrors = {};

    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = "This field is required";
        formValid = false;
      }
    });

    const enteredDate = new Date(formData.date);
    const currentDate = new Date();
    if (enteredDate > currentDate) {
      newErrors.date = "Date cannot be greater than current date";
      formValid = false;
    }

    if (!formValid) {
      setErrors(newErrors);
      return;
    }

    if (formData.weight <= 0) {
      newErrors.weight = "Weight must be greater than 0";
      formValid = false;
    }

    if (!formValid) {
      setErrors(newErrors);
      return;
    }

    // Form data is valid, send request to save record
    try {
      // Construct datetime string using current date and time
      const currentHours = currentDate.getHours();
      const currentMinutes = currentDate.getMinutes();
      const currentSeconds = currentDate.getSeconds();
      enteredDate.setHours(currentHours, currentMinutes, currentSeconds);
      const formattedDateTime = enteredDate.toISOString().slice(0, -5);

      // Construct payload
      const payload = {
        category: formData.category,
        dateTime: formattedDateTime,
        username: user.userName, // Assuming you get the username from somewhere
        weight: parseFloat(formData.weight).toFixed(2),
      };
      const response = await axios.post(
        "http://localhost:8080/addRecord",
        payload
      );

      if (response.status === 200 && response.data.error === null) {
        console.log("Payload:", payload, response.data);
        setUser(response.data.user);
        setMessage("Waste record saved successfully");
        setFormData({
          date: "",
          weight: "",
          category: "",
        });
      } else {
        setMessage(
          "Failed to save waste record. " + response.data.error.message
        );
      }

      // Send request to save record

      // Clear form data after successful submission
    } catch (error) {
      setMessage("Failed to save waste record");
    }
  };

  useEffect(() => {
    async function getUser() {
      await axios
        .get(`http://localhost:8080/getUser?userName=${username}`)
        .then((response) => setUser(response.data))
        .catch((error) => console.error(error));
    }
    getUser();
  }, [username]);

  const wasteCategories = [
    { label: "E WASTE", value: "E_WASTE" },
    { label: "LIGHTING WASTE", value: "LIGHTING_WASTE" },
    { label: "WASTE TREATMENT", value: "WASTE_TREATMENT" },
    { label: "CASH FOR TRASH", value: "CASH_FOR_TRASH" },
    { label: "NORMAL WASTE", value: "NORMAL_WASTE" },
  ];

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
      <Navbar
        points={user ? user.points : 0}
        username={user ? user.userName : ""}
      />
      <Card style={{ width: 700 }}>
        <CardContent>
          <Typography
            variant="h4"
            style={{ textAlign: "center", color: "#8bc34a" }}
          >
            Wasteless
          </Typography>

          {message && (
            <div
              style={{
                textAlign: "center",
                color: message.startsWith("Failed") ? "red" : "green",
              }}
            >
              {message}
            </div>
          )}

          <div style={{ fontSize: "1.5em", color: "darkgreen" }}>Add Waste</div>
          <br />
          <u>Record details of recent waste disposal</u>
          <br />
          <br />
          <form onSubmit={handleSubmit}>
            <FormControl fullWidth>
              <TextField
                label="Date"
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                error={!!errors.date}
                helperText={errors.date}
                required
                InputLabelProps={{
                  shrink: true,
                }}
                style={{ marginTop: "15px" }}
              />
            </FormControl>
            <br />
            <FormControl fullWidth>
              <TextField
                label="Enter Weight (Kg)"
                type="number"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                error={!!errors.weight}
                helperText={errors.weight}
                required
                inputProps={{ min: 0, step: 0.01 }}
                style={{ marginTop: "15px" }}
              />
            </FormControl>
            <br />
            <FormControl fullWidth>
              <TextField
                select // Add this prop
                label="Waste Category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                error={!!errors.category}
                helperText={errors.category}
                required
                style={{ marginTop: "15px" }}
              >
                {wasteCategories.map((category) => (
                  <MenuItem key={category.label} value={category.value}>
                    {category.label}
                  </MenuItem>
                ))}
              </TextField>
            </FormControl>

            <br />
            <br />
            <div style={{ textAlign: "center" }}>
              <Button type="submit" variant="contained" color="primary">
                Add Record
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddNewWaste;
