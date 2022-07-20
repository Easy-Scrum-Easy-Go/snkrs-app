import UpdateShoe from './pages/UpdateShoe';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
      <Routes>
        <Route path="/sneakers/:id" element={<UpdateShoe />} />
      </Routes>
      </Router>
      
    </div>
  );
}

export default App;
