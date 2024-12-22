import Login from "./pages/Login.jsx"
import SignUp from "./pages/SignUp.jsx";
import { BrowserRouter , Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar.jsx'
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Chatbots from "./pages/Chatbots.jsx";
import MyDashboard from './pages/MyDashboard.jsx'
import About from './pages/About.jsx'
import GroupStream from "./pages/GroupStream.jsx";
import AloneStream from "./pages/AloneStream.jsx";
import AI1 from "./pages/AI1.jsx";
import AI2 from "./pages/AI2.jsx";
import AI3 from "./pages/AI3.jsx";
import AI4 from "./pages/AI4.jsx";

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/chatbots" element={<Chatbots/>}/>
          <Route path="/mydashboard" element={<MyDashboard/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/group-stream" element={<GroupStream/>}/>
          <Route path="/alone-stream" element={<AloneStream/>}/>
          <Route path="/AI1" element={<AI1/>}/>
          <Route path="/AI2" element={<AI2/>}/>
          <Route path="/AI3" element={<AI3/>}/>
          <Route path="/AI4" element={<AI4/>}/>
        </Routes>
       
      </BrowserRouter>
      <Footer/>
    </>
  )
}

export default App
