import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import About from "./pages/about/About.jsx";
import ClientLayout from "./layout/ClientLayout.jsx";
import Home from "./pages/home/Home.jsx";
import LoginLayout from "./layout/LoginLayout.jsx";
import Register from "./pages/register/Register.jsx";
import Project from "./pages/register/Project.jsx";
import DashboardLayout from "./layout/DashboardLayout.jsx";
import CrudProject from "./pages/projectCrud/CrudProject.jsx";
import UserStatistic from "./pages/userStatistic/UserStatistic.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/connexion" element={<LoginLayout />}>
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="/" element={<ClientLayout />}>
          <Route index element={<Home />} />
          <Route path="project" element={<Project />} />
          <Route path="about" element={<About />} />
        </Route>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<CrudProject />} />
          <Route path="statistic" element={<UserStatistic />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
