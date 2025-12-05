import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/Customer/LandingPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      {/* Other routes will be added later */}
    </Routes>
  )
}

export default App;