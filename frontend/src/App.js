import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Shoes from './pages/Shoes';
import Shoe from './pages/Shoe';
import Admin from './pages/Admin';
import UpdateShoe from './pages/UpdateShoe';

function App() {
  return (
    <Router className='App'>
      <main>
        <Routes>
          <Route path='/sneakers' element={<Shoes />} />
          <Route path='/sneakers/:id' element={<Shoe />} />
          <Route path='/sneakers/admin' element={<Admin />} />
          <Route path="/sneakers/edit/:id" element={<UpdateShoe />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;