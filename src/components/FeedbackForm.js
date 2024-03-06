import React, { useState } from "react";

const FeedbackForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    const newErrors = {
      name: name.trim() === "" ? "Name is required" : "",
      email:
        email.trim() === ""
          ? "Email is required"
          : emailRegex.test(email)
          ? ""
          : "Invalid email format",
      phone:
        phone.trim() === ""
          ? "Phone number is required"
          : phoneRegex.test(phone)
          ? ""
          : "Invalid phone number format (must be 10 digits)",
      address: address.trim() === "" ? "Address is required" : "",
      message: message.trim() === "" ? "Message is required" : "",
    };

    setErrors(newErrors);

    // Check if there are no errors
    return Object.values(newErrors).every((error) => error === "");
  };

  const handleSubmit = () => {
    if (validateForm()) {
      const feedbackData = {
        name,
        email,
        phone,
        address,
        message,
      };

      onSubmit(feedbackData);
    }
  };

  return (
    <div className="form-data">
      <h2>Feedback Form</h2>
      <label>
        <p>Name:</p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <span style={{ color: "red" }}>{errors.name}</span>
      </label>
      <label>
        <p>Email:</p>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <span style={{ color: "red" }}>{errors.email}</span>
      </label>
      <label>
        <p>Phone:</p>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <span style={{ color: "red" }}>{errors.phone}</span>
      </label>
      <label>
        <p>Address:</p>
        <textarea
          rows={5}
          cols={8}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <span style={{ color: "red" }}>{errors.address}</span>
      </label>
      <label>
        <p>Message:</p>
        <textarea
          rows={5}
          cols={8}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <span style={{ color: "red" }}>{errors.message}</span>
      </label>
      <button className="btn btn-primary" onClick={handleSubmit}>
        Submit Feedback
      </button>
    </div>
  );
};

export default FeedbackForm;
