import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Doctors from "./pages/Doctors";
import Register from "./pages/Register";
import PageNotFound from "./pages/PageNotFound";
import Appointment from "./pages/Appointments";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route
          path="/apply-doctors"
          element={
            <>
              <Appointment />
              {/* <BookAppointment/> */}
            </>
          }
        />
        <Route path="/profile" element={<Profile />} />
        <Route path="/appointments" element={<Dashboard />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
