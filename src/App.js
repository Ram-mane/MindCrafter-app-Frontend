import logo from './logo.svg';
import './App.css';

// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import Base from './pages/Base';
import { BrowserRouter,Routes,Route  } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import About from './pages/About';
import Services from './pages/Services';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import UserDashbord from './pages/user-routes/UserDashbord';
import Privateroute from './components/Privateroute';
import ProfileInfo from './pages/user-routes/ProfileInfo';
function App() {
  return (
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
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/services' element={<Services/>}/>


    <Route path='/user' element={<Privateroute/>}> 

    <Route path='dashbord' element={<UserDashbord/>}/>
    <Route path='profile-info' element={<ProfileInfo/>}/>

    </Route>
    
   </Routes>
   </BrowserRouter>

   
  );
}

export default App;
