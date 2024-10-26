import { Link } from "react-router-dom"; // Import Link from React Router

const Home = () => {
  return (
    <div className="home-container">
      {/* <div className="logo-container">
        <img src="public/pal_homo_logo.png" alt="Logo" className="logo" />
      </div> */}
      <h1>PAL</h1>
      <h2>Embracing Diversity in Connection</h2>
      <br />
      <center>
        <div className="button-container">
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
      </center>
      <br />
      <center>
        <Link to="/Sign_in">Not Signed In? Join Us !!</Link>
      </center>
    </div>
  );
};

export default Home;
