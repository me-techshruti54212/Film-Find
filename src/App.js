import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from './Navbar';
import Contact from './Contact';
import About from './About';
function App() {
  return (
   
    <BrowserRouter basename="/Film-Find">
    
      <Routes>
      <Route exact path="/"  element={<Navbar />} />
      <Route  path="/contact"  element={<Contact />} />
      <Route  path="/about"  element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
