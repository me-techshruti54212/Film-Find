import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from './Navbar';
import Contact from './Contact';
import About from './About';
function App() {
  return (
   
    <BrowserRouter>
    <Navbar/>
      <Routes>
      <Route path="/contact" exact element={<Contact />} />
      <Route path="/about" exact element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
