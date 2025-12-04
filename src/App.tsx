import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/Customer/LandingPage';
import LogInPage from './auth/login';
function App() {

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LogInPage />} />
    </Routes>
  )
}

export default App