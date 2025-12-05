import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/Customer/LandingPage';
import LoginPage from './auth/login';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path='/login' element={<LoginPage />} />
      {/* Other routes will be added later */}
    </Routes>
  )
}

export default App;