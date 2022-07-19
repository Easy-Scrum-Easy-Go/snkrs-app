import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Shoe from './pages/Shoe';

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path='/sneakers/:id' element={<Shoe />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
