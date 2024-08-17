import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/view/about/About.jsx";
import ClientLayout from "./layout/ClientLayout.jsx";
import Home from "./pages/view/home/Home.jsx";
import LoginLayout from "./layout/LoginLayout.jsx";
import DashboardLayout from "./layout/DashboardLayout.jsx";
import CrudProject from "./pages/dashboard/projectCrud/CrudProject.jsx";
import UserStatistic from "./pages/dashboard/userStatistic/UserStatistic.jsx";
import Login from "./pages/connexion/auth-page/Login.jsx";
import SingUp3 from "./pages/connexion/auth-page/SingUp.jsx";
import Project from "./pages/view/home/Project.jsx";
import ShowProject from "./components/ShowProject.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <Router>
        <Routes>
          <Route path="/connexion" element={<LoginLayout />}>
            <Route index element={<SingUp3 />} />
            <Route path="login" element={<Login />} />
          </Route>
          <Route path="/" element={<ClientLayout />}>
            <Route index element={<Home />} />
            <Route path="project" element={<Project />} />
            <Route path="show" element={<ShowProject />} />
            <Route path="about" element={<About />} />
          </Route>
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<CrudProject />} />
            <Route path="statistic" element={<UserStatistic />} />
            <Route path="project" element={<CrudProject />} />
          </Route>
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
