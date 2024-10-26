import React from "react";

function SignIn() {
  const [formData, setFormData] = React.useState({
    full_name: "",
    username: "",
    email: "",
    phone_number: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if password and confirmPassword match
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:8000/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          full_name: formData.full_name,
          username: formData.username,
          email: formData.email,
          phone_number: formData.phone_number,
          password: formData.password,
        }),
      });

      if (response.ok) {
        // Handle successful response
        const data = await response.json();
        console.log("User registered:", data);
        alert("User registered successfully!");
      } else {
        const errorData = await response.json();
        console.error("Error:", errorData.detail);
        alert("Error: " + errorData.detail);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while registering the user");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="full_name"
        placeholder="Full Name"
        value={formData.full_name}
        onChange={handleChange}
        required
      />
      <br />
      <input
        type="text"
        name="username"
        placeholder="Preferred Username"
        value={formData.username}
        onChange={handleChange}
        required
      />
      <br />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <br />
      <input
        type="text"
        name="phone_number"
        placeholder="Phone Number"
        value={formData.phone_number}
        onChange={handleChange}
        required
      />
      <br />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <br />
      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        value={formData.confirmPassword}
        onChange={handleChange}
        required
      />
      <br />
      <button type="submit">Sign In</button>
    </form>
  );
}

export default SignIn;
