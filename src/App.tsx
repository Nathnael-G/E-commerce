import { Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/Customer/LandingPage';
import LoginPage from './auth/login';

import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Routes>
      <Route
        path="/"
        element={isLoggedIn ? <LandingPage /> : <Navigate to="/login" replace />}
      />

      <Route
        path="/login"
        element={<LoginPage setIsLoggedIn={setIsLoggedIn} />}
      />
    </Routes>
  );
}
export default App;