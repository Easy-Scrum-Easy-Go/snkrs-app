import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Shoe from './pages/Shoe';
import Admin from './pages/Admin';

function App() {
  return (
    <Router className='App'>
      <main>
        <Routes>
          <Route path='/sneakers/:id' element={<Shoe />} />
          <Route path='/sneakers/admin' element={<Admin />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;