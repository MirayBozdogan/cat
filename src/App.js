import logo from './logo.svg';
import './App.css';
import Home from './Home';
import SearchCats from './SearchCats';
import Detail from './Detail';
import Stats from './Stats';
import About from './About';
import Navbar from './Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App" >

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchCats />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
