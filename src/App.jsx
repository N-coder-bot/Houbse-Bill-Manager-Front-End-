import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import { AuthProvider } from "./AuthContext";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/SignUp/Signup";
import User from "./pages/User/User";
import Logout from "./components/Logout/Logout";
import Bill from "./pages/Bill/Bill";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Logout />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/user/:username" element={<User />} />
          <Route exact path="/bill" element={<Bill />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
export default App;
