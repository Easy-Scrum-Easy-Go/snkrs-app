import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Shoe from './pages/Shoe';
import Admin from './pages/Admin';
import UpdateShoe from './pages/UpdateShoe';

function App() {
  return (
    <Router className='App'>
      <main>
        <Routes>
        <Route path="/sneakers-edit/:id" element={<UpdateShoe />} />
          <Route path='/sneakers/:id' element={<Shoe />} />
          <Route path='/sneakers/admin' element={<Admin />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;