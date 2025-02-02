import {React,useState} from "react";
import { Badge } from "react-bootstrap";
import { Link,useNavigate } from "react-router-dom";
import Cart from "../screens/Cart"
import Modal from "../Modal"
import { useCart } from "./ContextReducer";

export default function Navbar() {
  let data=useCart();
  const [cartView,setCartView]=useState(false)
  const navigate=useNavigate();
  const handleLogout=()=>{
    localStorage.removeItem("authToken");
    navigate("/login")
  }
  return (
    /*a ki jgah link so page dosent reload and href ki jgah to*/
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 fst-italic" to="/">
            GoFoods
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              {/*me-auto means margin-right auto wo right margin utti lelega jitti wo le sake*/}
              <li className="nav-item">
                <Link
                  className="nav-link active fs-5"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              {localStorage.getItem("authToken") ? (
                <li className="nav-item">
                  <Link
                    className="nav-link active fs-5"
                    aria-current="page"
                    to="/myOrder"
                  >
                    My Orders
                  </Link>
                </li>
              ) : (
                ""
              )}
            </ul>
            {localStorage.getItem("authToken") ? (
              <div>
              <div className="btn bg-white text-success mx-1" onClick={()=>{setCartView(true)}}>
                Cart{" "}
                <Badge pill bg="danger">{data.length}</Badge>
              </div>
              {cartView ?<Modal onClose={()=>{setCartView(false)}}  ><Cart/></Modal> : null}
              {/*parameters in modal included fucntion and children so onclose and cart*/}
              <div className="btn bg-white text-danger mx-1" onClick={handleLogout} >
                Logout
              </div>
              </div>
            ) : (
              <div className="d-flex">
                <Link
                  className="btn bg-white text-success mx-1"
                  to="/createuser"
                >
                  Signup
                </Link>
                <Link className="btn bg-white text-success mx-1" to="/login">
                  Login
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
