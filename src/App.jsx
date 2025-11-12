import About from "./About"
import Contact from "./Contact"
import Home from "./Home"
import Navbar from "./Navbar"
import { Routes ,Route,Link } from "react-router"
import PageNotFound from "./PageNotFound"
//import './App.css'
function App() {
  return (
    <>
    <Navbar/>
    
   
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/*" element={<PageNotFound/>}/>
     </Routes>
    </>
  )
}

export default App
