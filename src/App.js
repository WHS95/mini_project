import "./App.css";
import Home from "./home/Home";
import Participation from "./rank/participation";
import Founder from "./rank/founder";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/user/participation' element={<Participation />} />
          <Route path='/user/founder' element={<Founder />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// import React from 'react';

// function App() {
//   return (
//     <div className="bg-blue-500 p-2">
//       <h1 className="text-white text-5xl text-green-500">Hello,232 Tailwind CSS!</h1>
//     </div>
//   );
// }

// export default App;
