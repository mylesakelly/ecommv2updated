import Home from './components/home';

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
      
      
    </div>
  );
}

export default App;
