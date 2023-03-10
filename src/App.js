import "./App.css";
import Signup from "./pages/main/Signup";
import Login from "./pages/main/Login";
import Forgotpassword from "./pages/main/Forgotpassword";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/forgotpassword" element={<Forgotpassword />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
