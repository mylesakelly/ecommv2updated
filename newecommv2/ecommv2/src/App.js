import Home from './pages/home';
import Contact from './pages/contact';
import Products from './pages/products';

import Footer from './components/footer';

import { BrowserRouter as Router, Routes, Route } from  "react-router-dom";

import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App">

      <Router>
        <Navbar />
  
        
        <Routes>
            <Route path='/' element={<Home /> } />
            <Route path='/products' element={<Products /> }  />
            <Route path='/contact' element={<Contact /> }  />
        </Routes>
      </Router>

      <Footer />

    </div>
  );
}

export default App;
