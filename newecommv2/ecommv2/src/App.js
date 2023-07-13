import Home from './pages/home';
import Home2 from './pages/home2';
import Slider from './components/slider';

import Footer from './components/footer';

import { BrowserRouter as Router, Routes, Route } from  "react-router-dom";

import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App">

      <Router>
        <Navbar />
        
        <Routes>
            <Route path='/' />
            <Route path='/products' />
            <Route path='/contact' />
        </Routes>
      </Router>
      <Home />
      <Slider />
      <Home2 /> 
      <Footer />
  
    </div>
  );
}

export default App;
