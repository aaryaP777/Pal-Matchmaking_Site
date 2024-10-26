import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-container">
      <h1>Login Page</h1>
      <form>
        <input type="text" placeholder="Username" required />
        <br />
        <input type="password" placeholder="Password" required />
        <br />
      </form>
      <Link to="/prefrences">
        <button type="submit">Login</button>
      </Link>
    </div>
  );
};

export default Login;
