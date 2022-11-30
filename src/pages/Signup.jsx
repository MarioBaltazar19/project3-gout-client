import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handlePassword = (e) => setPassword(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    try {
      //try to create the user
      await axios.post(`${process.env.REACT_APP_API_URL}/auth/signup`, {
        email,
        password,
      });
      //redirect
      navigate("/login");
    } catch (error) {
      const errorDescription = error.response.data.message;
      setErrorMessage(errorDescription);
    }
  };

  return (
    <div className="SignupPage">
      <br />
      <h1>Sign Up</h1>
      <br />

      <form onSubmit={handleSignupSubmit}>
        <label>Name:</label>
        <input type="email" name="email" value={email} onChange={handleEmail} />
        <br />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />

        <br />

        <button type="submit">Sign Up</button>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <br />

      <p>Already have account?</p>
      <Link to="/login"> Login</Link>
    </div>
  );
}

export default Signup;
