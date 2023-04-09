import React from 'react';
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import About from './pages/about';
import Blogs from './pages/blogs';
import Zaivka from './pages/zaivka';
import Home from './pages/home';
  


function App() {
return (
    <Router>
    <Navbar/>
    <Routes>
        <Route path='/about' element={<About/>} />
        <Route path='/blogs' element={<Blogs/>} />
        <Route path='/zaivka' element={<Zaivka/>} />
        <Route path='/' element={<Home/>} />
    </Routes>
    </Router>
);
}
  
export default App;