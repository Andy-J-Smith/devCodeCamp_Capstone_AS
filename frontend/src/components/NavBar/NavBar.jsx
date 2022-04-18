import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";
import { GiFishCorpse } from "react-icons/gi";
import { BsCartDash } from "react-icons/bs";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="navBar">
      <ul>
        <li className="brand">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <b className="logo">
              Bigbee <span>Slab</span> Tackle Co.
            </b>
          </Link>
          <GiFishCorpse className="fish-icon" size={75} />
        </li>
        <li>
          <button onClick={() => navigate("/product")}>Products</button>
        </li>
        <li>
          {user ? (
            <button onClick={() => navigate("/home")}>Account</button>
          ) : (
            ""
          )}
        </li>

        <li>
          {user ? (
            <button onClick={() => navigate("/admin")}>Admin</button>
          ) : (
            ""
          )}
        </li>
        <li>
          <button onClick={() => navigate("/about")}>About</button>
        </li>
        <li>
          {user ? (
            <button onClick={() => navigate("/checkout")}>
              <BsCartDash />
            </button>
          ) : (
            ""
          )}
        </li>
       
        <li>
          {user ? (
            <button onClick={logoutUser}>Logout</button>
          ) : (
            <button onClick={() => navigate("/login")}>Login</button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
