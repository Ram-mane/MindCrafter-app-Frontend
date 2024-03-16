import logo from "./logo.svg";
import "./App.css";

// import logo from './logo.svg';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";
import Base from "./pages/Base";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Services from "./pages/Services";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import UserDashbord from "./pages/user-routes/UserDashbord";
import Privateroute from "./components/Privateroute";
import ProfileInfo from "./pages/user-routes/ProfileInfo";
import ParticleBackground from "./ParticleBackground";
import PostPage from "./pages/PostPage";
import UserProvider from "./context/UserProvider";
function App() {
  return (

    <UserProvider>
      <div style={{ position: "relative" }}>
        <ParticleBackground id="particles" />
    <div style={{ position: "relative", zIndex: 1 }}>
      <BrowserRouter>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/posts/:postId" element={<PostPage />} />

        {/* private routes */}
        <Route path="/user" element={<Privateroute />}>
          <Route path="dashbord" element={<UserDashbord />} />
          <Route path="profile-info" element={<ProfileInfo />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
    </div>
    </UserProvider>
  );
}

export default App;
