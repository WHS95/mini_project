import "./App.css";
import Home from "./home/Home";
import Participation from "./rank/participation";
import Founder from "./rank/founder";
import Checkout from "./checkout/checkout";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/user/participation' element={<Participation />} />
          <Route path='/user/founder' element={<Founder />} />
          <Route path='/user/checkout' element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
