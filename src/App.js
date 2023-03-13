import "./App.css";
import Signup from "./pages/main/Signup";
import Login from "./pages/main/Login";
import Forgotpassword from "./pages/main/Forgotpassword";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Emailverify from './pages/main/Emailverify';
import Staffportal from './pages/sub/Staffportal';
import Four from './pages/main/Four';
import Verifycode from './pages/main/Verifycode';

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
          <Route exact path="/four" element={<Four />} />
          <Route exact path="/verifycode" element={<Verifycode />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
