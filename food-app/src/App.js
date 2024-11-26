import Home from "./screens/Home"
import Login from "./screens/Login"
import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css"
/*jab corousel mai imageschange ni hori toh u have to import bootstrap*/
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    /*outermost div is router*/
    /*Routes matlab saare routes jaenge kha*/
    /* /login se tum login page pe aaoge and element Login will be loaded*/
    <Router>
      <div>
        <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/login" element={<Login/>} />

        </Routes>
      </div>

    </Router>
  );
}

export default App;
