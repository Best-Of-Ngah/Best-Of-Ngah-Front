import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/connexion/Auth/Login.jsx";
import About from "./pages/view/about/About.jsx";
import ClientLayout from "./layout/ClientLayout.jsx";
import Home from "./pages/view/home/Home.jsx";
import LoginLayout from "./layout/LoginLayout.jsx";
import Register from "./pages/connexion/register/Register.jsx";
import Project from "./pages/connexion/register/Project.jsx";
import DashboardLayout from "./layout/DashboardLayout.jsx";
import CrudProject from "./pages/dashboard/projectCrud/CrudProject.jsx";
import { UserStatistic } from "./pages/dashboard/userStatistic/UserStatistic.jsx";

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
