import Login from "./pages/login";
import Home from "./pages/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Register from "./pages/register";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* path bintang tujuannya agar akses route yg tidak ada akan mengarah ke route ini */}
        <Route path="*" element={<h1>Page Not Found!</h1>} />
        <Route
          path="/login"
          element={<Login title="Login Pages" subtitle="Mini Absensi Apps" />}
        />
        <Route
          path="/register"
          element={
            <Register title="Register Pages" subtitle="Mini Absensi Apps" />
          }
        />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
