import "./App.css";
import Signup from "./pages/main/Signup";
import Login from "./pages/main/Login";
import Forgotpassword from "./pages/main/Forgotpassword";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Emailverify from './pages/main/Emailverify';
import Staffportal from './pages/sub/Staffportal';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/forgotpassword" element={<Forgotpassword />} />
          <Route exact path="/emailverify" element={<Emailverify />} />
          <Route exact path="/staffportal" element={<Staffportal />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
