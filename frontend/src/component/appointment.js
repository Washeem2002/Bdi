import React, { useState } from "react";
import "./appointment.css";
import { Button, TextField, MenuItem } from "@mui/material";

const Language = [
  { value: "Hindi", label: "Hindi" },
  { value: "English", label: "English" },
  { value: "Urdu", label: "Urdu" },
];

const Timing = [
  { value: "10am-10:30am", label: "10am-10:30am" },
  { value: "11am-11:30am", label: "11am-11:30am" },
  { value: "12am-12:30pm", label: "12am-12:30pm" },
  { value: "1pm-1:30pm", label: "1pm-1:30pm" },
  { value: "3pm-3:30pm", label: "3pm-3:30pm" },
];

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    language: "",
    timing: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: "" });
    }
  };

  const handleValidation = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Enter a valid email";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    else if (!/^\d+$/.test(formData.phone))
      newErrors.phone = "Enter a valid phone number";
    if (!formData.language) newErrors.language = "Language is required";
    if (!formData.timing) newErrors.timing = "Timing is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (handleValidation()) {
      console.log("Form Data:", formData);
     
      window.location.href = "/payment";
    }
  };

  return (
    <div className="Appcontainer-outer">
      <div className="innerbox">
        <div className="g">Book Appointment</div>
        <TextField
          label="Name"
          value={formData.name}
          onChange={(e) => handleChange("name", e.target.value)}
          error={!!errors.name}
          helperText={errors.name}
          margin="dense"
          className="text"
        />
        <TextField
          label="Email"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          error={!!errors.email}
          helperText={errors.email}
          margin="dense"
          className="text"
        />
        <TextField
          label="Phone Number"
          value={formData.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
          error={!!errors.phone}
          helperText={errors.phone}
          margin="dense"
          className="text"
        />
        <TextField
          select
          label="Language"
          value={formData.language}
          onChange={(e) => handleChange("language", e.target.value)}
          error={!!errors.language}
          helperText={errors.language}
          margin="dense"
          className="text"
        >
          {Language.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          label="Timing"
          value={formData.timing}
          onChange={(e) => handleChange("timing", e.target.value)}
          error={!!errors.timing}
          helperText={errors.timing}
          margin="dense"
          className="text"
        >
          {Timing.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <div className="but">
          <Button variant="outlined" onClick={handleSubmit}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
